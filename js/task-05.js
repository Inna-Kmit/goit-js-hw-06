
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const textInput = document.querySelector(`#name-input`);
const textOutput = document.querySelector(`#name-output`);

textInput.addEventListener('input', onInputChange);
function onInputChange(event) {
if (event.currentTarget.value.trim()) {
return (textOutput.textContent = event.currentTarget.value);  
}
textOutput.textContent = 'Anonymous'; 
};