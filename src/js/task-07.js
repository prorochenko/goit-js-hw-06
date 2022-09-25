const inputToddler = document.querySelector(`#font-size-control`);
const textSize = document.querySelector(`#text`);

function fontSizeChange(event) {
  textSize.style.fontSize = `${event.currentTarget.value}px`;
}

inputToddler.addEventListener('input', fontSizeChange);
