/**
 * Freehand painting engine with touch + mouse support.
 * Draws on a paint canvas layered above a guide canvas.
 */

const MAX_UNDO = 30;

let paintCanvas, paintCtx;
let guideCanvas, guideCtx;
let isDrawing = false;
let lastX = 0, lastY = 0;
let undoStack = [];
let currentColor = '#2F3542';
let currentSize = 8;
let tool = 'brush'; // 'brush' | 'eraser'
let guideVisible = true;
let onChangeCallback = null;

export const COLORS = [
    '#2F3542', '#FF4757', '#FF6B81', '#FFA502', '#ECCC68',
    '#2ED573', '#7BED9F', '#1E90FF', '#70A1FF', '#A855F7',
    '#D580FF', '#FF7F50', '#8B4513', '#FFFFFF',
];

export const SIZES = [
    { label: 'S', value: 4 },
    { label: 'M', value: 8 },
    { label: 'L', value: 14 },
    { label: 'XL', value: 22 },
];

export function initPainter(paintCanvasEl, guideCanvasEl, onChange) {
    paintCanvas = paintCanvasEl;
    paintCtx = paintCanvas.getContext('2d');
    guideCanvas = guideCanvasEl;
    guideCtx = guideCanvas.getContext('2d');
    onChangeCallback = onChange;

    // Pointer events for unified mouse + touch handling
    paintCanvas.addEventListener('pointerdown', onPointerDown);
    paintCanvas.addEventListener('pointermove', onPointerMove);
    paintCanvas.addEventListener('pointerup', onPointerUp);
    paintCanvas.addEventListener('pointerleave', onPointerUp);

    // Prevent scrolling while drawing on touch devices
    paintCanvas.addEventListener('touchstart', e => e.preventDefault(), { passive: false });

    clearPaint();
}

export function teardownPainter() {
    if (!paintCanvas) return;
    paintCanvas.removeEventListener('pointerdown', onPointerDown);
    paintCanvas.removeEventListener('pointermove', onPointerMove);
    paintCanvas.removeEventListener('pointerup', onPointerUp);
    paintCanvas.removeEventListener('pointerleave', onPointerUp);
}

// --- Guide ---
/**
 * Draw all steps as a faint full guide (used in free-paint mode).
 */
export function drawGuide(steps) {
    guideCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
    guideCtx.lineWidth = 5;
    guideCtx.lineCap = 'round';
    guideCtx.lineJoin = 'round';
    guideCtx.strokeStyle = '#E2E8F0';
    guideCtx.fillStyle = '#E2E8F0';
    guideCtx.globalAlpha = 0.5;

    for (const step of steps) {
        step.draw(guideCtx, 1);
    }

    guideCtx.globalAlpha = 1;
}

/**
 * Draw guide for a specific step in guided-paint mode.
 * Previous steps are very faint, current step is highlighted.
 */
export function drawGuideForStep(steps, currentStep) {
    guideCtx.clearRect(0, 0, guideCanvas.width, guideCanvas.height);
    guideCtx.lineWidth = 5;
    guideCtx.lineCap = 'round';
    guideCtx.lineJoin = 'round';

    // Previous steps — very faint
    guideCtx.globalAlpha = 0.2;
    guideCtx.strokeStyle = '#CBD5E0';
    guideCtx.fillStyle = '#CBD5E0';
    for (let i = 0; i < currentStep; i++) {
        steps[i].draw(guideCtx, 1);
    }

    // Current step — highlighted with dashed style
    guideCtx.globalAlpha = 0.6;
    guideCtx.strokeStyle = '#FF6B81';
    guideCtx.fillStyle = '#FF6B81';
    guideCtx.setLineDash([8, 6]);
    guideCtx.lineWidth = 6;
    steps[currentStep].draw(guideCtx, 1);
    guideCtx.setLineDash([]);

    // Future steps — very faint hint
    guideCtx.globalAlpha = 0.08;
    guideCtx.strokeStyle = '#E2E8F0';
    guideCtx.fillStyle = '#E2E8F0';
    guideCtx.lineWidth = 5;
    for (let i = currentStep + 1; i < steps.length; i++) {
        steps[i].draw(guideCtx, 1);
    }

    guideCtx.globalAlpha = 1;
}

export function setGuideVisible(visible) {
    guideVisible = visible;
    guideCanvas.style.opacity = visible ? '1' : '0';
}

export function isGuideVisible() {
    return guideVisible;
}

// --- Tools ---
export function setColor(color) {
    currentColor = color;
    if (tool === 'eraser') tool = 'brush';
}

export function getColor() {
    return currentColor;
}

export function setSize(size) {
    currentSize = size;
}

export function getSize() {
    return currentSize;
}

export function setTool(t) {
    tool = t;
}

export function getTool() {
    return tool;
}

// --- Actions ---
export function clearPaint() {
    paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
    undoStack = [];
    saveState();
}

export function undo() {
    if (undoStack.length <= 1) return; // keep at least the blank state
    undoStack.pop(); // remove current
    const prev = undoStack[undoStack.length - 1];
    const img = new Image();
    img.onload = () => {
        paintCtx.clearRect(0, 0, paintCanvas.width, paintCanvas.height);
        paintCtx.drawImage(img, 0, 0);
    };
    img.src = prev;
}

export function downloadPainting(characterName) {
    // Composite guide + paint onto a temporary canvas
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = paintCanvas.width;
    tempCanvas.height = paintCanvas.height;
    const tempCtx = tempCanvas.getContext('2d');

    // White background
    tempCtx.fillStyle = '#FFFFFF';
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // Guide layer (faint)
    if (guideVisible) {
        tempCtx.globalAlpha = 0.3;
        tempCtx.drawImage(guideCanvas, 0, 0);
        tempCtx.globalAlpha = 1;
    }

    // Paint layer
    tempCtx.drawImage(paintCanvas, 0, 0);

    const link = document.createElement('a');
    link.download = `my-${characterName || 'painting'}.png`;
    link.href = tempCanvas.toDataURL('image/png');
    link.click();
}

// --- Internal drawing ---
function getCanvasPos(e) {
    const rect = paintCanvas.getBoundingClientRect();
    const scaleX = paintCanvas.width / rect.width;
    const scaleY = paintCanvas.height / rect.height;
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
    };
}

function onPointerDown(e) {
    isDrawing = true;
    const pos = getCanvasPos(e);
    lastX = pos.x;
    lastY = pos.y;

    // Draw a dot for single taps
    paintCtx.beginPath();
    paintCtx.arc(lastX, lastY, getEffectiveSize() / 2, 0, Math.PI * 2);
    applyStyle();
    if (tool === 'eraser') {
        paintCtx.globalCompositeOperation = 'destination-out';
        paintCtx.fill();
        paintCtx.globalCompositeOperation = 'source-over';
    } else {
        paintCtx.fill();
    }

    paintCanvas.setPointerCapture(e.pointerId);
}

function onPointerMove(e) {
    if (!isDrawing) return;
    const pos = getCanvasPos(e);

    paintCtx.beginPath();
    paintCtx.moveTo(lastX, lastY);
    paintCtx.lineTo(pos.x, pos.y);
    paintCtx.lineWidth = getEffectiveSize();
    paintCtx.lineCap = 'round';
    paintCtx.lineJoin = 'round';

    if (tool === 'eraser') {
        paintCtx.globalCompositeOperation = 'destination-out';
        paintCtx.strokeStyle = 'rgba(0,0,0,1)';
        paintCtx.stroke();
        paintCtx.globalCompositeOperation = 'source-over';
    } else {
        paintCtx.strokeStyle = currentColor;
        paintCtx.stroke();
    }

    lastX = pos.x;
    lastY = pos.y;
}

function onPointerUp() {
    if (!isDrawing) return;
    isDrawing = false;
    saveState();
}

function applyStyle() {
    paintCtx.fillStyle = currentColor;
}

function getEffectiveSize() {
    return tool === 'eraser' ? currentSize * 2.5 : currentSize;
}

function saveState() {
    if (undoStack.length >= MAX_UNDO) undoStack.shift();
    undoStack.push(paintCanvas.toDataURL());
}
