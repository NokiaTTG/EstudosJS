// //inicialização das variaveis
const prompt = require('prompt-sync')()
let continuarComprando = true
let total = 0

const lista = []

const frutas = [
    {
    produto: "Maçã",
    preco: 2.50,
    quantidade: 0
    },
    {
    produto: "Banana",
    preco: 1.50,
    quantidade: 0
    },
    {
    produto: "Laranja",
    preco: 3.00,
    quantidade: 0
    }
]

//Menu apresentado ao usuario em formato de texto

{console.log("Lojinha: Frutas")
console.log("1. 1x Maçã - R$2.50")
console.log("2. 1x Banana - R$ 1.50")
console.log("3. 1x Laranja - R$3.00")
console.log("4. Finalizar compra.")
console.log("0. Exclua o ultimo item.")
}

while (continuarComprando == true) {

    let quantidade;

    const frutaPega = prompt("\nEscolha um produto digitando seu número da lista: ")

    if(frutaPega != 4 && frutaPega != 0) {
    let pergunta = prompt(`Qual a quantidade que gostaria do item ${frutaPega}? Digite: ` )
    quantidade = pergunta
    }

    //Adiciona o valor ao total e mostra a mensagem de erro caso um valor invalido seja inserido
    //Mostra ao usuario um texto indicativo do que está sendo comprado
    function when(element, x = 1) {

        if (element == 1 || element == 2 || element == 3) {
            const calculo = (x * frutas[element - 1].preco); total += calculo;

            lista.push({produto: frutas[element - 1].produto, preco: calculo, quantidade: x});
            console.log(`\n+${x, frutas[element - 1].produto}(s) - R$${calculo}`)
        }

        if (element == 4) {
            continuarComprando = false;
            console.log("\nFinalizando compra...")
        } 

        if(element == 0) { lista.pop(); total -= calculo }

        else if (element < 0 || element > 4 || element == NaN) {
            console.log("Digite um número valido.")
        }
    }
    when(frutaPega, parseFloat(quantidade));
}
console.log(`Compra Finalizada. Sua lista é composta por: \n`)
for (let i = 0; i < lista.length; i++) {
    if (continuarComprando == false) {
        console.log(`${lista[i].quantidade}x ${lista[i].produto} - ${lista[i].preco}R$`)
    }
}

console.log(`\nO valor da sua compra é: ${total} R$\n`)
