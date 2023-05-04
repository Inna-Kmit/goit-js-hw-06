
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", () => {
if (inputEl.value.length === Number(inputEl.dataset.length)) {
inputEl.classList.add('valid');
inputEl.classList.remove('invalid');
return
} else inputEl.classList.remove('valid');
inputEl.classList.add('invalid');
});
