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

