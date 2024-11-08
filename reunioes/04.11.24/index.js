// valores primitivos e referenciais

/*let a = 10;
let b = a; // cópia do valor de a
console.log(a, b)
b = 20;
console.log(a, b)*/

// const obj1 = {nome: "Leonardo"} // 0x123
// const obj2 = obj1 // 0x123
// obj2.nome = "Anderson"
// console.log(obj1)
// const obj3 = {nome: "Pedro"} // 0x124
// obj2 = obj3 // impossivel pelo fato do

const pessoas = ["Leonardo", "PAULÃO", "Anderson", "Pedro"] //0x135
// const pessoas2 = ["Mario", "Armario", "Frigideira", "Camille"]

// pessoas2.push("Primo")
// console.log(pessoas2)

// const pessoas3 = pessoas2

// pessoas3.push("Lima")
// console.log(pessoas2)

// pessoas2 = pessoas

function adicionarPessoa(array, elemento) {
    array.push(elemento)
}

adicionarPessoa(pessoas, "less")
console.log(pessoas[5])

// const numbers = [1, 2, 3, 4, 5], 0x534 0x555
// const obj = {propriedade1: "LA"}, 0x423 0x437 
// const dez = 10, 0x534