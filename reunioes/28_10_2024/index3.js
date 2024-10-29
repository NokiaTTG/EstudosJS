//tipos primitivos booleanos, numeros, strings
//valores por referência: arrays e objetos

//let a = { classe: 1 }
let a = 2
/*
x = 1; 
y = x;
y = 1; 
x = 3;
y = 1;
*/

function alterar(b) {
    b.classe = 3
}
//alterar(a)
console.log(a)

let c = a
c = 12
console.log(c)

//c.classe = 5
console.log(a)