const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const newArray =[];
const ingredientsList = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = ingredient;
  return itemEl;
});
ingredientsList.prepend(...elements);

console.log(ingredientsList);

