const input = document.getElementById('cube__input');
const showResult = document.getElementById('cube__result');
const cubeForm = document.getElementById('cube__math');

cubeForm.addEventListener('submit', function (event){
    event.preventDefault();
    let result = 6 * (input.value * input.value);
    showResult.innerHTML = `A área é: ${result}`;
})