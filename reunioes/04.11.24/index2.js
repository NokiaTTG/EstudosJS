const obj = {
    nome: "Leonardo",

    idade: 19,

    altura: 1.9,
    
    endereco: {
        rua: "Rua Jóse Efim",
        numero: 582
    }
};

console.log(obj.nome)
console.log(obj.idade)
console.log(obj.altura)

//desestruturação de propriedade
const {idade, endereco:{numero:n, rua}, ...rest} = obj

console.log(idade)
console.log(n)
console.log(rua)
console.log(rest)

// const coisas = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const [primeiro, segundo, terceiro, quarto, quinto, ...resto] = coisas

// console.log(primeiro)
// console.log(segundo)
// console.log(resto)