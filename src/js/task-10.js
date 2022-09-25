function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector(`input[type="number"]`);
const creatBtn = document.querySelector(`[data-create]`);
const destroyBtn = document.querySelector(`[data-destroy]`);
const boxes = document.querySelector(`#boxes`);

let value = 0;

function parsingValue(event) {
  value = event.currentTarget.value;
}

numberInput.addEventListener(`input`, parsingValue);

function createBoxes() {
  for (let i = 1; i <= value; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${20 + 10 * i}px`;
    box.style.height = `${20 + 10 * i}px`;

    boxes.append(box);
  }
}

creatBtn.addEventListener('click', createBoxes);

function destroyBoxes() {
  numberInput.value = '';
  for (let i = 0; i < boxes.children.length; i++) {
    boxes.lastChild.remove();
    i -= 1;
  }
  value = 0;
}

destroyBtn.addEventListener('click', destroyBoxes);
