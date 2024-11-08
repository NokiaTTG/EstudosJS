let idade = 59;
// idade = 70
new Promise((resolve, reject) => {
    if(idade >= 65){
        resolve(idade)
    } else {
        reject("Não pode ser aposentado por não ter idade suficiênte")
    }
}).then((idade) => {
    const diferenca = idade - 65;
    return diferenca;
}).then((diferenca) => {
    const salario = 2000 + diferenca * 100
    return salario;
}).then((salario) => {
    console.log(`Salário total: ${salario}`)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Serviço finalizado. Taxa de serviço: R$ 50.00")
})

// for(let i = 0; i <= 100; i++) {
//     console.log("principal "+i)
// }