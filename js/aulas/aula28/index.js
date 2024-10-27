let numEscolhido = parseFloat(prompt('Diga-me um número a ser avaliádo.'));
const numSite = document.getElementById("num")
const textSite = document.getElementById("text")

numSite.innerHTML = numEscolhido

textSite.innerHTML = `<p>A raiz quadrada do número é: ${numEscolhido**0.5}</p> 
<p>${numEscolhido} é um número inteiro? ${Number.isInteger(numEscolhido)}</p> 
<p>Seu número é NaN? ${Number.isNaN(numEscolhido)}</p>
<p>Arredondado para cima: ${Math.ceil(numEscolhido)}</p> 
<p>Arredondado para baixo: ${Math.floor(numEscolhido)}</p> 
<p>Com duas casas decimais: ${numEscolhido.toFixed(2)}</p>`