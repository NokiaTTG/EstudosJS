//"callback" é passar uma 'function' para outra função como um parametro.

function saudacao(){
    console.log("Olá novamente!")
}

function despedida(){
    console.log("Até mais...")
}

saudacao();
despedida();

//no exemplo acima, as duas funções são executadas ao mesmo tempo. No caso da função 'saudacao()' ser executada antes da 'despedida()' é preciso tratar disso.

function saudacao1(callback){
    console.log("Olá novamente!")
    callback()
}

function despedida1(){
    console.log("Até mais...")
}

saudacao1(despedida1)

//como mostrado acima, desta maneira a função 'despedida1' só será executada após a conclusão da 'saudacao1'.
//ao usar "callback"s garantimos que a próxima função irá ser executada após a primeira.

function pergunta(){
    console.log("Já tomou café hoje?")
}

function susto(){
    console.log("AI! Que susto :0")
}

saudacao(pergunta)
saudacao(susto)

//outros exemplos que funcionariam como "callback"