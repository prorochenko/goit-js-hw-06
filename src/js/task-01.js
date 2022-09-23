const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}.`);

console.log(
  itemEl.forEach(element => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelector('ul').children.length}`);
    console.log(` `);
  })
);
