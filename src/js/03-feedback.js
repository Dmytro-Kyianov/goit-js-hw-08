import throttle from 'lodash.throttle';

const keyStore = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const formValue = {};

formEl.addEventListener('submit', onSubmit)
formEl.addEventListener('input', throttle(onInput, 500))

function onInput(event) {
formValue[event.target.name] = event.target.value;
localStorage.setItem(keyStore, JSON.stringify(formValue));
}

function onSubmit(event) {
event.preventDefault();

if (formEl.email.value === "" || formEl.message.value === "") {
    return alert("Enter Your Email and Message");
  }
event.currentTarget.reset();
localStorage.removeItem(keyStore);
console.log(formValue);
}

function returnSavedData() {
let savedData = localStorage.getItem(keyStore)

if (savedData) {
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([email, message]) => {
formEl.elements[email].value = message;
formValue[email] = message;
    })
}
}
returnSavedData();
