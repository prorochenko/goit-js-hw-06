const itemEl = document.querySelectorAll('.item');
console.log(`1) Number of categories: ${itemEl.length}.`);

itemEl.forEach(element => {
  console.log(`Category: ${element.querySelector('h2').textContent}`);
  console.log(`Elements: ${element.querySelector('ul').children.length}`);
  console.log(` `);
});
