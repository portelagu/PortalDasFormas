const input = document.getElementById('polygon__input');
const showResult = document.getElementById('polygon__result');
const polygonForm = document.getElementById('polygon__math');
const select = document.getElementById('shape__select')

polygonForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let result;

    switch (select.value) {
        case 'hexagon':
            result = (3 * Math.sqrt(3) / 2) * input.value * input.value;
            break;

        case 'octagon':
            result =  2 * (1 + Math.sqrt(2)) * input.value * input.value;
            break;

        case 'triangle':
            result = (Math.sqrt(3) / 4) * (input.value * input.value);
            break;

        default:
            result = 0;
            break;
    }
    showResult.innerHTML = `A área é: ${result.toFixed(2)}`;
})