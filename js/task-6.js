const validationInputRef = document.querySelector('#validation-input');
// const dataLengthRef = Number(validationInputRef.dataset.length);

validationInputRef.addEventListener('blur', () => {
  if (event.target.value.length === Number(validationInputRef.dataset.length)) {
    validationInputRef.classList.remove('invalid');
    validationInputRef.classList.add('valid');
  } else {
    validationInputRef.classList.remove('valid');
    validationInputRef.classList.add('invalid');
  }
});
