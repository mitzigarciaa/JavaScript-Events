// Mouse Events
const hoverButton = document.getElementById('hover-btn');
const hoverFeedback = document.getElementById('hover-message');

hoverButton.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
  hoverFeedback.textContent = "The button feels your presence...";
});

hoverButton.addEventListener('mouseleave', () => {
  console.log('Mouse left');
  hoverFeedback.textContent = "The button misses you already!";
});
// Keyboard Events
const keyInputField = document.getElementById('keyboard-input');
const keyFeedback = document.getElementById('key-message');

keyInputField.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    keyFeedback.textContent = `You just hit: '${event.key}'`;
});