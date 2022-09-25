const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');
let counterValue = 0;

function decrementBtnClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function incrementBtnClick() {
  counterValue += 1;
  value.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrementBtnClick);
incrementBtn.addEventListener('click', incrementBtnClick);
