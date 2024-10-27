const prompt = require('prompt-sync')();

//codigo que conta de um em um até chegar em dez
for (let i = 1; i <= 10; i++) {
    console.log(`o valor de loop é: ${i}`)
}

/*Crie um programa que peça ao usuário para inserir números positivos e some esses números. O programa deve continuar pedindo números até que o usuário insira um número negativo. No final, exiba a soma total dos números positivos inseridos */

//Solicita 2 números ao usuário, define "num" pra armazenar o resultado da soma
console.log("Por favor, digite 2 números: ")
let num = 0

//transforma de string para number
let numUsuario1 = parseFloat(prompt("Número 1: "));
let numUsuario2 = parseFloat(prompt("Número 2: "));

//se os números forem maiores que 0 eles são somados e armazenados em "num", em sequencia é solicitado mais dois numeros e a linha se repete até que "if" seja cumprido
while (numUsuario1 >= 0 && numUsuario2 >= 0) {
    num += numUsuario1 + numUsuario2;

    numUsuario1 = parseFloat(prompt("Digite o próximo número 1 (ou um negativo para sair): "))
    numUsuario2 = parseFloat(prompt("Digite o próximo número 2 (ou um negativo para sair): "))
}

//se os números forem menores que 0 é mostrado o valor de "num" que é resultado das somas dentro do terminal
console.log(`O valor da soma dos números positívos é: ${num}`)

/*Crie um programa de jogo de adivinhação onde o computador escolhe um número aleatório entre 1 e 100. 
    O usuário deve tentar adivinhar o número, e o programa deve fornecer dicas se o palpite é maior ou menor que o número escolhido. 
    O loop deve continuar até que o usuário acerte o número.*/

    function getRandom() {
        return Math.random();
      }

