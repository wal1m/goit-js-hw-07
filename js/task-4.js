let counterValue = 0;
function decremenet() {
  counterValue -= 1;
  render();
}
function incremenet() {
  counterValue += 1;
  render();
}
function render() {
  value.textContent = counterValue;
}

const value = document.querySelector('#value');
const btnDecremenet = value.previousElementSibling;
const btnIncremenet = value.nextElementSibling;

btnDecremenet.addEventListener('click', decremenet);
btnIncremenet.addEventListener('click', incremenet);

// console.log(value);
// console.log(btnDecremenet);
// console.log(btnIncremenet);
// console.log(counterValue);
