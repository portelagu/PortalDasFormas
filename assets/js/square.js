const input = document.getElementById('square__input');
const showResult = document.getElementById('square__result');
const squareForm = document.getElementById('square__math');

squareForm.addEventListener('submit', function (event){
    event.preventDefault();
    let result = input.value ** 2;
    showResult.innerHTML = `A área é: ${result}`;
})