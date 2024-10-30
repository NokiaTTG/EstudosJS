# Callback
#### "callback" é passar uma 'function' para outra função como um parametro.

no exemplo abaixo, as duas funções são executadas ao mesmo tempo. No caso da função 'saudacao()' ser executada antes da 'despedida()' é preciso tratar disso.

~~~JavaScript
function saudacao(){
    console.log("Olá novamente!")
}

function despedida(){
    console.log("Até mais...")
}

saudacao();
despedida();
~~~



como mostrado acima, desta maneira a função 'despedida1' só será executada após a conclusão da 'saudacao1'.
//ao usar "callback"s garantimos que a próxima função irá ser executada após a primeira.

outros exemplos que funcionariam como "callback"