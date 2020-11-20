let inputValueRef = document.querySelector('#font-size-control');
let spanRef = document.querySelector('#text');
inputValueRef.addEventListener('input', () => {
  spanRef.style.fontSize = `${inputValueRef.value}px`;
});
