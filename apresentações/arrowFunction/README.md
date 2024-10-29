# Arow Function

> versão alternativa da 'function' padrão; usada em pequenas linhas de código, pela sua simplicidade

~~~JavaScript
(parametro) => expressão
~~~

> A partir do momento em que o parametro for cumprido, será execudata a função na qual a seta "=>" está indicando. Não é necessário 'return' diferente da 'function' padrão.

~~~JavaScript
const ola = (nome) => console.log(`olá ${nome}`)
ola("Thayna!")
ola("Leonardo!")
~~~

> Quando são duas declarações a serem executadas, o corpo da função deve ser estruturado com chaves "{}"

~~~JavaScript
const saudacao = (nome, idade) => {
    console.log(`olá ${nome}`)
    console.log(`você tem ${idade} anos de idade`)
} 
~~~

> é possível implementar funções uma dentro da outra, fazendo assim códigos mais complexos mesmo usando o metodo "arrowFunction".