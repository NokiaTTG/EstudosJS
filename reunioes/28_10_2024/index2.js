const nome = "Leonardo"

const endereco = {
    rua: "Rua dos Palmares",
    numero: 512,
    complemento: "casa"
}

const pessoa = {
    nome: nome,
    idade: 19, 
    sono: true, 
    endereco: endereco
}

const prop = "nome"
console.log(pessoa.endereco.rua)