const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listRef = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  listRef.append(itemRef);
});

