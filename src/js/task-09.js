function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

function colorChange() {
  color.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}

btn.addEventListener('click', colorChange);
