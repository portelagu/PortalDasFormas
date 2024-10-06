const input = document.getElementById('circle__input');
const showResult = document.getElementById('circle__result');
const circleForm = document.getElementById('circle__math');

circleForm.addEventListener('submit', function (event){
    event.preventDefault();
    let result = Math.PI * Math.pow(input.value, 2);
    showResult.innerHTML = `A área é: ${result.toFixed(2)}`;
})