const STORAGE_KEY = 'junior-art-sound';

let enabled = localStorage.getItem(STORAGE_KEY) !== 'off';

export function isSoundEnabled() {
    return enabled;
}

export function toggleSound() {
    enabled = !enabled;
    localStorage.setItem(STORAGE_KEY, enabled ? 'on' : 'off');
    if (!enabled) window.speechSynthesis.cancel();
    return enabled;
}

export function speak(message) {
    window.speechSynthesis.cancel();
    if (!enabled) return;
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 0.9;
    utterance.pitch = 1.3;
    window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
    window.speechSynthesis.cancel();
}
