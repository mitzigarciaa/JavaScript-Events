// Mouse Events
const hoverButton = document.getElementById('hover-btn');
const hoverFeedback = document.getElementById('hover-message');

hoverButton.addEventListener('mouseenter', () => {
  console.log('Mouse entered');
  hoverFeedback.textContent = "Hello";
});

hoverButton.addEventListener('mouseleave', () => {
  console.log('Mouse left');
  hoverFeedback.textContent = "Come back!";
});

// Keyboard Events
const keyInputField = document.getElementById('keyboard-input');
const keyFeedback = document.getElementById('key-message');

keyInputField.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
    keyFeedback.textContent = `Last pressed: '${event.key}'`;
});

// Form Events
const exampleForm = document.getElementById('demo-form');
const formFeedback = document.getElementById('form-message');

exampleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputName = document.querySelector('#name').value.trim();
    if (inputName) {
        formFeedback.textContent = `Hello, ${inputName}! Form submitted.`;
    } else {
        formFeedback.textContent = "Invalid";
    }
});