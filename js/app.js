import { allCharacters, categories, getCharacter, getByCategory } from './characters/index.js';
import { renderStep, stopAnimation, renderFinal } from './renderer.js';
import { speak, stopSpeaking, toggleSound, isSoundEnabled } from './speech.js';
import {
    initPainter, teardownPainter, drawGuide, drawGuideForStep,
    setGuideVisible, isGuideVisible,
    setColor, getColor, setSize, getSize,
    setTool, getTool, clearPaint, undo, downloadPainting,
    COLORS, SIZES,
} from './painter.js';

// --- DOM refs ---
const menuScreen = document.getElementById('menu-screen');
const gameScreen = document.getElementById('game-screen');
const completionScreen = document.getElementById('completion-screen');
const paintScreen = document.getElementById('paint-screen');
const cardGrid = document.getElementById('card-grid');
const categoriesNav = document.getElementById('categories');
const canvas = document.getElementById('mainCanvas');
const instruction = document.getElementById('instruction');
const progressEl = document.getElementById('progress');
const drawingEmoji = document.getElementById('drawing-emoji');
const drawingName = document.getElementById('drawing-name');
const completionEmoji = document.getElementById('completion-emoji');
const soundIcon = document.getElementById('sound-icon');
const confettiCanvas = document.getElementById('confetti-canvas');
const paintEmoji = document.getElementById('paint-emoji');
const paintName = document.getElementById('paint-name');
const paintInstruction = document.getElementById('paint-instruction');
const paintProgress = document.getElementById('paint-progress');
const paintStepControls = document.getElementById('paint-step-controls');
const freePaintBanner = document.getElementById('free-paint-banner');

// --- State ---
let currentCharacter = null;
let currentStep = 0;
let activeCategory = 'all';
let paintStep = 0;
let paintMode = 'guided'; // 'guided' | 'free'
let paintToolbarBuilt = false;

// --- Init ---
buildCategories();
buildCards(allCharacters);
updateSoundIcon();

// --- Event listeners ---
document.getElementById('home-btn').addEventListener('click', showMenu);
document.getElementById('repeat-btn').addEventListener('click', replayStep);
document.getElementById('next-btn').addEventListener('click', nextStep);
document.getElementById('sound-toggle').addEventListener('click', () => {
    toggleSound();
    updateSoundIcon();
});
document.getElementById('draw-again-btn').addEventListener('click', () => {
    hideAll();
    startDrawing(currentCharacter.id);
});
document.getElementById('new-drawing-btn').addEventListener('click', () => {
    hideAll();
    showMenu();
});
document.getElementById('try-paint-btn').addEventListener('click', () => {
    hideAll();
    openPaintMode(currentCharacter, 'guided');
});
document.getElementById('skip-to-paint-btn').addEventListener('click', () => {
    stopAnimation();
    stopSpeaking();
    hideAll();
    openPaintMode(currentCharacter, 'guided');
});
document.getElementById('paint-back-btn').addEventListener('click', () => {
    teardownPainter();
    paintToolbarBuilt = false;
    hideAll();
    showMenu();
});
document.getElementById('paint-download-btn').addEventListener('click', () => {
    downloadPainting(currentCharacter?.id);
});
document.getElementById('paint-done-step-btn').addEventListener('click', () => {
    advancePaintStep();
});

// --- Categories ---
function buildCategories() {
    categoriesNav.innerHTML = categories.map(cat =>
        `<button class="pill${cat.id === activeCategory ? ' active' : ''}" data-category="${cat.id}">${cat.label}</button>`
    ).join('');

    categoriesNav.addEventListener('click', (e) => {
        const pill = e.target.closest('.pill');
        if (!pill) return;
        activeCategory = pill.dataset.category;
        categoriesNav.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        buildCards(getByCategory(activeCategory));
    });
}

// --- Card Grid ---
function buildCards(chars) {
    cardGrid.innerHTML = chars.map(c => `
        <div class="card" role="listitem" data-id="${c.id}" data-category="${c.category}" tabindex="0">
            <span class="card-emoji">${c.emoji}</span>
            <div class="card-name">${c.name}</div>
            <div class="card-steps">${'<span class="dot"></span>'.repeat(c.steps.length)}</div>
        </div>
    `).join('');

    cardGrid.addEventListener('click', onCardClick);
    cardGrid.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onCardClick(e);
        }
    });
}

function onCardClick(e) {
    const card = e.target.closest('.card');
    if (!card) return;
    startDrawing(card.dataset.id);
}

// --- Helpers ---
function hideAll() {
    menuScreen.style.display = 'none';
    gameScreen.classList.add('hidden');
    completionScreen.classList.add('hidden');
    paintScreen.classList.add('hidden');
}

// --- Navigation ---
function showMenu() {
    stopAnimation();
    stopSpeaking();
    teardownPainter();
    paintToolbarBuilt = false;
    hideAll();
    menuScreen.style.display = '';
}

function startDrawing(id) {
    currentCharacter = getCharacter(id);
    if (!currentCharacter) return;
    currentStep = 0;

    hideAll();
    gameScreen.classList.remove('hidden');

    drawingEmoji.textContent = currentCharacter.emoji;
    drawingName.textContent = currentCharacter.name;

    buildProgress();
    playStep();
}

// --- Drawing Steps (tutorial animation) ---
function buildProgress() {
    progressEl.innerHTML = currentCharacter.steps
        .map((_, i) => `<div class="progress-dot${i === 0 ? ' active' : ''}" data-step="${i}"></div>`)
        .join('');
}

function updateProgress() {
    progressEl.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.toggle('completed', i < currentStep);
        dot.classList.toggle('active', i === currentStep);
    });
}

function playStep() {
    const steps = currentCharacter.steps;
    updateProgress();
    instruction.textContent = steps[currentStep].text;
    speak(steps[currentStep].voice);
    renderStep(canvas, steps, currentStep);
}

function replayStep() {
    playStep();
}

function nextStep() {
    currentStep++;
    if (currentStep >= currentCharacter.steps.length) {
        showCompletion();
        return;
    }
    playStep();
}

// --- Completion ---
function showCompletion() {
    speak("Amazing! You finished watching. Now try painting it yourself!");
    renderFinal(canvas, currentCharacter.steps);
    completionEmoji.textContent = currentCharacter.emoji;
    hideAll();
    completionScreen.classList.remove('hidden');
    launchConfetti();
}

// --- Paint Mode ---
function openPaintMode(character, mode) {
    hideAll();
    paintScreen.classList.remove('hidden');

    paintEmoji.textContent = character.emoji;
    paintName.textContent = character.name;

    const paintCanvas = document.getElementById('paintCanvas');
    const guideCanvasEl = document.getElementById('guideCanvas');

    // Only init painter once per session (avoid duplicate event listeners)
    if (!paintToolbarBuilt) {
        initPainter(paintCanvas, guideCanvasEl);
        buildPaintToolbar();
        paintToolbarBuilt = true;
    } else {
        clearPaint();
    }

    setGuideVisible(true);
    document.getElementById('tool-guide').classList.remove('guide-off');

    if (mode === 'guided') {
        paintMode = 'guided';
        paintStep = 0;
        buildPaintProgress();
        showPaintStep();
        paintStepControls.classList.remove('hidden');
        freePaintBanner.classList.add('hidden');
    } else {
        enterFreePaintMode();
    }
}

function buildPaintProgress() {
    paintProgress.innerHTML = currentCharacter.steps
        .map((_, i) => `<div class="progress-dot${i === 0 ? ' active' : ''}" data-step="${i}"></div>`)
        .join('');
}

function updatePaintProgress() {
    paintProgress.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.toggle('completed', i < paintStep);
        dot.classList.toggle('active', i === paintStep);
    });
}

function showPaintStep() {
    const steps = currentCharacter.steps;
    const step = steps[paintStep];

    updatePaintProgress();

    // Update instruction
    paintInstruction.textContent = `Step ${paintStep + 1}: ${step.text}`;
    paintInstruction.className = 'paint-instruction-box guided-active';

    // Draw guide showing current step highlighted
    drawGuideForStep(steps, paintStep);

    // Speak the instruction
    speak(step.voice);

    // Update button text for last step
    const btn = document.getElementById('paint-done-step-btn');
    if (paintStep === steps.length - 1) {
        btn.innerHTML = "I'm Done! Finish <span class='arrow'>&#10132;</span>";
    } else {
        btn.innerHTML = "I'm Done! Next Step <span class='arrow'>&#10132;</span>";
    }
}

function advancePaintStep() {
    paintStep++;
    if (paintStep >= currentCharacter.steps.length) {
        // All guided steps done — switch to free paint
        speak("You did it! Now add your own colors and details!");
        enterFreePaintMode();
        return;
    }
    showPaintStep();
}

function enterFreePaintMode() {
    paintMode = 'free';
    paintStepControls.classList.add('hidden');
    freePaintBanner.classList.remove('hidden');

    // Show full guide
    drawGuide(currentCharacter.steps);

    // Update instruction
    paintInstruction.textContent = "Free paint mode — add your own colors and details!";
    paintInstruction.className = 'paint-instruction-box free-mode';

    // Mark all progress dots as completed
    paintProgress.querySelectorAll('.progress-dot').forEach(dot => {
        dot.classList.add('completed');
        dot.classList.remove('active');
    });
}

function buildPaintToolbar() {
    // Color palette
    const palette = document.getElementById('color-palette');
    palette.innerHTML = COLORS.map(c =>
        `<button class="color-swatch${c === getColor() ? ' active' : ''}" data-color="${c}" style="background:${c};" aria-label="Color ${c}"></button>`
    ).join('');

    palette.addEventListener('click', (e) => {
        const swatch = e.target.closest('.color-swatch');
        if (!swatch) return;
        setColor(swatch.dataset.color);
        palette.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        updateToolButtons('brush');
    });

    // Size picker
    const sizePicker = document.getElementById('size-picker');
    sizePicker.innerHTML = SIZES.map(s =>
        `<button class="size-btn${s.value === getSize() ? ' active' : ''}" data-size="${s.value}">${s.label}</button>`
    ).join('');

    sizePicker.addEventListener('click', (e) => {
        const btn = e.target.closest('.size-btn');
        if (!btn) return;
        setSize(Number(btn.dataset.size));
        sizePicker.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });

    // Tool buttons
    document.getElementById('tool-brush').addEventListener('click', () => updateToolButtons('brush'));
    document.getElementById('tool-eraser').addEventListener('click', () => updateToolButtons('eraser'));
    document.getElementById('tool-undo').addEventListener('click', () => undo());
    document.getElementById('tool-clear').addEventListener('click', () => {
        clearPaint();
    });
    document.getElementById('tool-guide').addEventListener('click', () => {
        const visible = !isGuideVisible();
        setGuideVisible(visible);
        document.getElementById('tool-guide').classList.toggle('guide-off', !visible);
    });

    updateToolButtons(getTool());
}

function updateToolButtons(activeTool) {
    setTool(activeTool);
    document.getElementById('tool-brush').classList.toggle('active', activeTool === 'brush');
    document.getElementById('tool-eraser').classList.toggle('active', activeTool === 'eraser');
}

// --- Sound ---
function updateSoundIcon() {
    soundIcon.textContent = isSoundEnabled() ? '\u{1F50A}' : '\u{1F507}';
}

// --- Confetti ---
function launchConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const ctx = confettiCanvas.getContext('2d');
    const colors = ['#FF4757', '#2ED573', '#1E90FF', '#FFA502', '#A855F7', '#FF6B81', '#70A1FF'];
    const particles = [];

    for (let i = 0; i < 80; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 3,
            vy: Math.random() * 3 + 2,
            rotation: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.2,
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotSpeed;
            p.vy += 0.05;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        }

        frame++;
        if (frame < 120) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        }
    }
    requestAnimationFrame(animate);
}
