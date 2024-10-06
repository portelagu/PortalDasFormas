const LargerBaseInput = document.getElementById('cuboid-largerbase__input');
const SmallerBaseInput = document.getElementById('trapezoid-smallerbase__input');
const HeightInput = document.getElementById('trapezoid-height__input');
const showResult = document.getElementById('trapezoid__result');
const trapezoidForm = document.getElementById('trapezoid__math');

trapezoidForm.addEventListener('submit', function (event){
    event.preventDefault();
    let baseMaior = parseFloat(LargerBaseInput.value);
    let baseMenor = parseFloat(SmallerBaseInput.value);
    let altura = parseFloat(HeightInput.value);
    let result = ((baseMaior + baseMenor) * altura) / 2;
    showResult.innerHTML = `A área é: ${result}`;
});
