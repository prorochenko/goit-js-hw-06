const inputForm = document.querySelector('#validation-input');
const dataLength = Number(inputForm.getAttribute('data-length'));

inputForm.addEventListener('blur', () => {
  console.log(dataLength);
  if (inputForm.value.length !== dataLength) {
    inputForm.classList.add('invalid');
    inputForm.classList.remove('valid');
  } else {
    inputForm.classList.add('valid');
    inputForm.classList.remove('invalid');
  }
});
