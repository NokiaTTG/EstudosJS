const prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ');
const sobrenome = prompt('Digite seu sobrenome: ');
const peso = prompt('Digite seu peso em kg: ');
const idade = prompt('Digite sua idade: ');
const altura = prompt('Digite sua altura em metros: ');

let resultado = (peso / (altura * altura));
let resultadoString;

if (resultado <= 18.5) {
    resultadoString = "Abaixo do Peso";
} else if (resultado >= 18.5 && resultado <= 24.9) {
    resultadoString = "com Peso Ideal";
} else {
    resultadoString = "Acima do Peso";
}

console.log(`${nome} ${sobrenome}, tem ${idade} anos de idade, pesando ${peso}Kg e medindo ${altura} metros de altura, obteve o resultado de ${resultado} em seu IMC e está ${resultadoString}`);
