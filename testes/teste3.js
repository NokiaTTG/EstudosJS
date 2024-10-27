function saudacao(usuarios){
 return `Seja bem-vindo(a) ${usuarios}`
}

const pessoa1 = {
    nome: "Frigideira",
    idade: 86,
    genero: "polishop"
}

const usuarios = [pessoa1, "NokiaTTG", "HTXT_DWP", "Frigideira"];

for(let i = 0; i < usuarios.length; i++){
 console.log(saudacao(usuarios[i]))
}

let num = '86'
num = parseFloat(num)

console.log(typeof(num));









function desconto(x = 50, y = 25){
 const resultado = `${-x * y / 100}R$ de desconto!`;
 return resultado;
}

function porcento(x = 25, y = 5){
 const resultado = `${-y / x * 100}% de desconto!`;
 return resultado;
}

console.log((desconto()), (porcento()));