const h2 = document.querySelector('h2');
const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btnCalcular = document.querySelector('#btnCalcular');
const resultSuma = document.querySelector('#result');

form.addEventListener('submit', sumaInputs);

function sumaInputs(event){
    event.preventDefault();
    let result = parseInt(input1.value) + parseInt(input2.value);
    resultSuma.innerHTML = "Resultado: " + result;
}
