const ANIM_DURATION = 2000;
const GHOST_COLOR = '#E2E8F0';
const ACTIVE_COLOR = '#FF4757';

let animationFrame = null;

export function renderStep(canvas, steps, currentStep, onComplete) {
    const ctx = canvas.getContext('2d');
    let start = null;

    cancelAnimationFrame(animationFrame);

    function animate(timestamp) {
        if (!start) start = timestamp;
        let t = (timestamp - start) / ANIM_DURATION;
        if (t > 1) t = 1;

        // Ease out cubic for smoother animation
        const eased = 1 - Math.pow(1 - t, 3);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 7;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw completed steps as ghost
        for (let i = 0; i < currentStep; i++) {
            ctx.strokeStyle = GHOST_COLOR;
            ctx.fillStyle = GHOST_COLOR;
            steps[i].draw(ctx, 1);
        }

        // Draw current step in red
        ctx.strokeStyle = ACTIVE_COLOR;
        ctx.fillStyle = ACTIVE_COLOR;
        steps[currentStep].draw(ctx, eased);

        if (t < 1) {
            animationFrame = requestAnimationFrame(animate);
        } else if (onComplete) {
            onComplete();
        }
    }

    animationFrame = requestAnimationFrame(animate);
}

export function stopAnimation() {
    cancelAnimationFrame(animationFrame);
}

export function renderFinal(canvas, steps) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#2F3542';
    ctx.fillStyle = '#2F3542';

    for (const step of steps) {
        step.draw(ctx, 1);
    }
}
