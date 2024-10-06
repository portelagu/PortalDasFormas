const LargerDiagonalInput = document.getElementById('rhombohedron-largerdiagonal __input');
const SmallerDiagonalInput = document.getElementById('rhombohedron-smallediagonal __input'); 
const HeightInput = document.getElementById('rhombohedron-height__input');
const showResult = document.getElementById('rhombohedron__result');
const rhombohedronForm = document.getElementById('rhombohedron__math');

rhombohedronForm.addEventListener('submit', function (event){
    event.preventDefault();
    let DiagonalMaior = parseFloat(LargerDiagonalInput.value);
    let DiagonalMenor = parseFloat(SmallerDiagonalInput.value);
    let altura = parseFloat(HeightInput.value);
    let result = 2 * ( (DiagonalMaior * DiagonalMenor) + (DiagonalMaior * altura) + (DiagonalMenor * altura) );
    showResult.innerHTML = `A área é: ${result}`;
});
