const prompt = require('prompt-sync')();

/* Crie um programa que peça ao usuário para inserir números positivos e some esses números.
   O programa deve continuar pedindo números até que o usuário insira um número negativo.
   No final, exiba a soma total dos números positivos inseridos */

// Inicializa a soma com 0
let num = 0;

// Solicita 2 números ao usuário
let numUsuario1 = parseFloat(prompt("Número 1: "));
let numUsuario2 = parseFloat(prompt("Número 2: "));

// Continua pedindo números enquanto os dois forem positivos ou zero
while (numUsuario1 >= 0 && numUsuario2 >= 0) {
    // Soma os números
    num += numUsuario1 + numUsuario2;

    // Pede mais dois números
    numUsuario1 = parseFloat(prompt("Digite o próximo número 1 (ou um negativo para sair): "));
    numUsuario2 = parseFloat(prompt("Digite o próximo número 2 (ou um negativo para sair): "));
}

// Se algum número for negativo, exibe o valor da soma total
console.log(`O valor da soma dos números positivos é: ${num}`);