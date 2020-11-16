const categoryes = document.querySelectorAll('.item');
const numberCategories = categoryes.length;
console.log(`В списке ${numberCategories} категории.`);

const titleRef = [...categoryes]
  .map(
    category =>
      `Категория: ${category.children[0].textContent}\nКоличество элементов: ${category.children[1].children.length}`,
  )
  .join('\n');

console.log(titleRef);

