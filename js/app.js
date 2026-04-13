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
const phaseLabel = document.getElementById('paint-phase-label');
const phaseIcon = document.getElementById('phase-icon');
const phaseText = document.getElementById('phase-text');
const phaseStepCount = document.getElementById('phase-step-count');
const paintSkipRow = document.getElementById('paint-skip-row');

// --- State ---
let currentCharacter = null;
let currentStep = 0;
let activeCategory = 'all';
let paintStep = 0;
let paintPhase = 'draw'; // 'draw' | 'color' | 'free'
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
    openPaintMode(currentCharacter);
});
document.getElementById('skip-to-paint-btn').addEventListener('click', () => {
    stopAnimation();
    stopSpeaking();
    hideAll();
    openPaintMode(currentCharacter);
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
document.getElementById('skip-paint-phase-btn').addEventListener('click', () => {
    stopSpeaking();
    enterFreePaintMode();
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

// ===========================================
// PAINT MODE — Two phases: Draw → Color → Free
// ===========================================

function openPaintMode(character) {
    hideAll();
    paintScreen.classList.remove('hidden');

    paintEmoji.textContent = character.emoji;
    paintName.textContent = character.name;

    const paintCanvas = document.getElementById('paintCanvas');
    const guideCanvasEl = document.getElementById('guideCanvas');

    if (!paintToolbarBuilt) {
        initPainter(paintCanvas, guideCanvasEl);
        buildPaintToolbar();
        paintToolbarBuilt = true;
    } else {
        clearPaint();
    }

    setGuideVisible(true);
    document.getElementById('tool-guide').classList.remove('guide-off');

    // Start with draw phase
    paintPhase = 'draw';
    paintStep = 0;
    freePaintBanner.classList.add('hidden');
    paintStepControls.classList.remove('hidden');
    paintSkipRow.classList.remove('hidden');

    buildPaintProgressForPhase();
    showCurrentPaintStep();

    speak(`Let's paint the ${character.name}! First, trace the shapes.`);
}

function getCurrentPhaseSteps() {
    if (paintPhase === 'draw') return currentCharacter.steps;
    if (paintPhase === 'color') return currentCharacter.paintSteps || [];
    return [];
}

function buildPaintProgressForPhase() {
    const steps = getCurrentPhaseSteps();
    paintProgress.innerHTML = steps
        .map((_, i) => `<div class="progress-dot${i === 0 ? ' active' : ''}" data-step="${i}"></div>`)
        .join('');

    // Update phase label
    if (paintPhase === 'draw') {
        phaseLabel.className = 'phase-label draw-phase';
        phaseIcon.textContent = '\u{270F}\u{FE0F}';
        phaseText.textContent = 'Draw Phase';
        phaseStepCount.textContent = `${steps.length} steps`;
    } else if (paintPhase === 'color') {
        phaseLabel.className = 'phase-label color-phase';
        phaseIcon.textContent = '\u{1F3A8}';
        phaseText.textContent = 'Color Phase';
        phaseStepCount.textContent = `${steps.length} steps`;
    }
}

function updatePaintProgress() {
    paintProgress.querySelectorAll('.progress-dot').forEach((dot, i) => {
        dot.classList.toggle('completed', i < paintStep);
        dot.classList.toggle('active', i === paintStep);
    });
}

function showCurrentPaintStep() {
    const steps = getCurrentPhaseSteps();
    if (!steps.length) return;
    const step = steps[paintStep];

    updatePaintProgress();

    if (paintPhase === 'draw') {
        // Draw phase: show guide for current shape step
        paintInstruction.textContent = `Step ${paintStep + 1}: ${step.text}`;
        paintInstruction.className = 'paint-instruction-box guided-active';
        drawGuideForStep(currentCharacter.steps, paintStep);
        speak(step.voice);
    } else if (paintPhase === 'color') {
        // Color phase: show full outline guide, auto-select color
        paintInstruction.textContent = `Step ${paintStep + 1}: ${step.text}`;
        paintInstruction.className = 'paint-instruction-box color-active';
        drawGuide(currentCharacter.steps);

        // Auto-select the suggested color
        if (step.color) {
            selectColorInPalette(step.color);
        }

        speak(step.voice);
    }

    // Update button text
    const btn = document.getElementById('paint-done-step-btn');
    const isLast = paintStep === steps.length - 1;

    if (paintPhase === 'draw' && isLast && currentCharacter.paintSteps?.length) {
        btn.innerHTML = "Done! Start Coloring <span class='arrow'>&#10132;</span>";
    } else if (isLast) {
        btn.innerHTML = "I'm Done! Finish <span class='arrow'>&#10132;</span>";
    } else {
        btn.innerHTML = "I'm Done! Next Step <span class='arrow'>&#10132;</span>";
    }

    // Update skip text
    const skipBtn = document.getElementById('skip-paint-phase-btn');
    if (paintPhase === 'draw' && currentCharacter.paintSteps?.length) {
        skipBtn.textContent = 'Skip to coloring phase';
    } else {
        skipBtn.textContent = 'Skip to free paint';
    }
}

function advancePaintStep() {
    const steps = getCurrentPhaseSteps();
    paintStep++;

    if (paintStep >= steps.length) {
        // Phase complete — move to next phase
        if (paintPhase === 'draw' && currentCharacter.paintSteps?.length) {
            // Transition to color phase
            paintPhase = 'color';
            paintStep = 0;
            speak("Great drawing! Now let's add colors!");
            buildPaintProgressForPhase();
            showCurrentPaintStep();
            return;
        }
        // All phases done
        speak("You did it! Now add your own finishing touches!");
        enterFreePaintMode();
        return;
    }
    showCurrentPaintStep();
}

function enterFreePaintMode() {
    paintPhase = 'free';
    paintStepControls.classList.add('hidden');
    paintSkipRow.classList.add('hidden');
    freePaintBanner.classList.remove('hidden');

    drawGuide(currentCharacter.steps);

    paintInstruction.textContent = "Free paint mode — add your own details and creativity!";
    paintInstruction.className = 'paint-instruction-box free-mode';

    phaseLabel.className = 'phase-label';
    phaseIcon.textContent = '\u{2B50}';
    phaseText.textContent = 'Free Paint';
    phaseStepCount.textContent = '';

    // Mark all progress as done
    paintProgress.querySelectorAll('.progress-dot').forEach(dot => {
        dot.classList.add('completed');
        dot.classList.remove('active');
    });
}

function selectColorInPalette(color) {
    setColor(color);
    const palette = document.getElementById('color-palette');
    palette.querySelectorAll('.color-swatch').forEach(s => {
        s.classList.toggle('active', s.dataset.color === color);
    });
    updateToolButtons('brush');
}

function buildPaintToolbar() {
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

    document.getElementById('tool-brush').addEventListener('click', () => updateToolButtons('brush'));
    document.getElementById('tool-eraser').addEventListener('click', () => updateToolButtons('eraser'));
    document.getElementById('tool-undo').addEventListener('click', () => undo());
    document.getElementById('tool-clear').addEventListener('click', () => clearPaint());
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
