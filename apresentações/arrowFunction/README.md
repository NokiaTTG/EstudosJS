# Arow Function

Versão alternativa da 'function' padrão; usada em pequenas linhas de código, pela sua simplicidade

~~~JavaScript
(parametro) => expressão
~~~

A partir do momento em que o parametro for cumprido, será execudata a função na qual a seta "=>" está indicando. Não é necessário 'return' diferente da 'function' padrão.

~~~JavaScript
const ola = (nome) => console.log(`olá ${nome}`)
ola("Thayna!")
ola("Leonardo!")
~~~

Quando são duas declarações a serem executadas, o corpo da função deve ser estruturado com chaves "{}"

~~~JavaScript
const saudacao = (nome, idade) => {
    console.log(`olá ${nome}`)
    console.log(`você tem ${idade} anos de idade`)
} 
~~~

É possível implementar funções uma dentro da outra, fazendo assim códigos mais complexos mesmo usando o metodo "arrowFunction".

~~~JavaScript
const usuarios = []
const criaUsuario = (...nomes) => nomes.forEach(nome => usuarios.push(nome))
criaUsuario("Thayna", "Leonardo", "Medina", "Caio")
for (let i = 0; i < usuarios.length; i++) { console.log(usuarios[i]) }
~~~