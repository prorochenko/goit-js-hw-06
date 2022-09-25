const inputPlace = document.querySelector(`#name-input`);
const outputName = document.querySelector(`#name-output`);

function changeName(event) {
  if (event.currentTarget.value === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = event.currentTarget.value;
  }
}

inputPlace.addEventListener('input', changeName);
