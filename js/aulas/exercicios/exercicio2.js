const prompt = require('prompt-sync')();

let num1 = prompt('Digite um número: ')
let num2 = prompt('Digite mais um número: ')
alert(`Seus números são: ${num1} e ${num2}`)
num1 = parseInt(num1);
num2 = parseInt(num2);
const resultado = num1 + num2
alert(`O resultado da soma é: ${resultado}`)