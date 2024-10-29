//Estrutura de uma 'Arrow function'
(parametro) => expressão 


//Exemplo:
const ola = (nome) => console.log(`olá ${nome}`)
ola("Thayna!")
ola("Leonardo!")

//irá retornar "olá Thayna!" e "olá Leonardo!"

//Exemplo:
const saudacao = (nome, idade) => {
    console.log(`olá ${nome}`)
    console.log(`você tem ${idade} anos de idade`)
}
saudacao("Thayna!", 18)

//irá retornar "olá Thayna!"
//"você tem 18 anos de idade"


//Exemplo mais complexo:
const usuarios = [] //Array

const criaUsuario = (...nomes) => nomes.forEach(nome => usuarios.push(nome))
//o spread "..." fragmenta o parametro enviado em várias strings, a função faz um .push para cada elemento para dentro do nosso Array. 

criaUsuario("Thayna", "Leonardo", "Medina", "Caio") //execução da função

for (let i = 0; i < usuarios.length; i++) { console.log(usuarios[i]) }
//'Printa' todos os elementos de usuarios dentro do console.