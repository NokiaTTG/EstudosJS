// const prompt = require('prompt-sync')();

// /* Crie um programa que peça ao usuário para inserir números positivos e some esses números.
//    O programa deve continuar pedindo números até que o usuário insira um número negativo.
//    No final, exiba a soma total dos números positivos inseridos */

// // Inicializa a soma com 0
// let num = 0;

// // Solicita 2 números ao usuário
// let numUsuario1 = parseFloat(prompt("Número 1: "));
// let numUsuario2 = parseFloat(prompt("Número 2: "));

// // Continua pedindo números enquanto os dois forem positivos ou zero
// while (numUsuario1 >= 0 && numUsuario2 >= 0) {
//     // Soma os números
//     num += numUsuario1 + numUsuario2;

//     // Pede mais dois números
//     numUsuario1 = parseFloat(prompt("Digite o próximo número 1 (ou um negativo para sair): "));
//     numUsuario2 = parseFloat(prompt("Digite o próximo número 2 (ou um negativo para sair): "));
// }

// // Se algum número for negativo, exibe o valor da soma total
// console.log(`O valor da soma dos números positivos é: ${num}`);


function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function () { console.log('f1'); if (callback) callback(); }, rand());
}

function f2(callback) {
    setTimeout(function () { console.log('f2'); if (callback) callback(); }, rand());
}

function f3(callback) {
    setTimeout(function () { console.log('f3'); if (callback) callback(); }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}

function j3(){
    console.log("qualquer coisa j3")
    console.log("mais um texto qualquer j3")
}

function j2(){
    console.log("qualquer coisa j2")
    j3()
    console.log("mais um texto qualquer j2")
}

function j1(){
    console.log("qualquer coisa j1")
    j2()
    console.log("mais um texto qualquer j1")
    return "qualquer coisa"
}

const teste = j1()
console.log(teste)

//j1 e j1()
//j1(j2(j3()))
//"qualquer coisa j1"
//"qualquer coisa j2"
//"qualquer coisa j3"
//"mais um texto qualquer j3"
//"mais um texto qualquer j2"
//"mais um texto qualquer j1"