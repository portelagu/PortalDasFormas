const WidthInput = document.getElementById('retangle-width__input');
const HeightInput = document.getElementById('retangle-height__input');
const retangleForm = document.getElementById('retangle__math');
const showResult = document.getElementById('retangle__result')

retangleForm.addEventListener('submit', function (event){
    event.preventDefault();
    let result = WidthInput.value * HeightInput.value;
    showResult.innerHTML = `A área é: ${result}`;
})