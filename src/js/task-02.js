const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingridientList = [];

ingredients.forEach(igridient => {
  const item = document.createElement(`li`);
  item.textContent = igridient;
  item.classList.add('item');
  ingridientList.push(item);
});
const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingridientList);
