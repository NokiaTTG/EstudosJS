function desconto(x = 50, y = 25){
    const calculo = -x * y / 100;
    const resultado = `R$: ${parseFloat(calculo).toFixed(2)} de desconto!`;
    return resultado;
}

function porcento(x = 25, y = 5){
    const calculo = -y / x * 100;
    const resultado = `${parseFloat(calculo).toFixed(2)}% de desconto!`;
    return resultado;
}

console.log((desconto()), (porcento()));