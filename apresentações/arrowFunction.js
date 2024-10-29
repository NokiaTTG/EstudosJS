//versão alternativa da 'function' padrão; usada em pequenas linhas de código, pela sua simplicidade

(parametro) => expressão

//A partir do momento em que o parametro for cumprido, será execudata a função na qual a seta "=>" está indicando. Não é necessário 'return' diferente da 'function' padrão.

const ola = (nome) => console.log(`olá ${nome}`)
ola("Thayna!")
ola("Leonardo")
//retorna: "olá Thayna"

//Quando são duas declarações a serem executadas, o corpo da função deve ser estruturado com chaves "{}"

const saudacao = (nome, idade) => {
    console.log(`olá ${nome}`)
    console.log(`você tem ${idade} anos de idade`)
}
saudacao("Thayna!", 18)
//retorna: olá Thayna!
//você tem 18 anos de idade

//é possível implementar funções uma dentro da outra, fazendo assim códigos mais complexos mesmo usando o metodo "arrowFunction".



const usuarios = []
const criaUsuario = (...nomes) => nomes.forEach(nome => usuarios.push(nome))
criaUsuario("Thayna", "Leonardo", "Medina", "Caio")
for (let i = 0; i < usuarios.length; i++) { console.log(usuarios[i]) }