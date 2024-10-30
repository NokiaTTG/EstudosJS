function saudacao(){
    console.log("Olá novamente!")
}

function despedida(){
    console.log("Até mais...")
}

saudacao();
despedida();



function saudacao1(callback){
    console.log("Olá novamente!")
    callback()
}

function despedida1(){
    console.log("Até mais...")
}

saudacao1(despedida1)



function pergunta(){
    console.log("Já tomou café hoje?")
}

function susto(){
    console.log("AI! Que susto :0")
}

saudacao(pergunta)
saudacao(susto)


function acao1(){
    console.log("Eu")
    acao2()
    console.log("você.")
}

function acao2(){
    console.log("me")
    acao3()
    console.log("amo")
}

function acao3(){
    console.log("pergunto\nse")
}

acao1()