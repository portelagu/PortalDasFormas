const LengthInput = document.getElementById('cuboid-length__input');
const HeightInput = document.getElementById('cuboid-height__input');
const DepthInput = document.getElementById('cuboid-depth__input');
const showResult = document.getElementById('cuboid__result');
const cuboidForm = document.getElementById('cuboid__math');

cuboidForm.addEventListener('submit', function (event){
    event.preventDefault();
    let result = 2 * (LengthInput.value * HeightInput.value + LengthInput.value * DepthInput.value + HeightInput.value * DepthInput.value);
    showResult.innerHTML = `A área é: ${result}`;
})