
/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form> */

const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();

const formEl = event.target.elements;
const email = formEl.email.value;
const password = formEl.password.value;

if (email === '' || password === '') {
alert(`Alert! Please, fill all the fields!`)} 
else {
const formData = {email, password}
console.log(formData)
form.reset()
}
}