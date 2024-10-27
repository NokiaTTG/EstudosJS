//                      VARIAVEIS E SEUS TIPOS

//const: variável constante; que sempre irá manter seu valor dentro de um código. Irá ocorrer um erro se uma constante tentar ser alterada.
//  ex:

    const num1 = 2 //tipo Number: Apenas números; ex: 2; 22.5; 50 = x...
    const num2 = 4
    
//let: variável alterável; é possível alterar seu valor dentro do código e pode ser indefinido durante a primeira aparição.
//  ex:

    let var1 = "Olá mundo" //tipo String: Texto de modo geral
    let var2 = ":D"
    let var3; //variavel com seu valor indefinido

//outra tipo de variável é a "Boolean" que é uma variável de verificação Verdadeiro ou Falso.
//  ex:

    let um = true
    let zero = false

//console.log: permite que um valor seja exibido no terminal; variaveis podem ser somadas ou concatenadas, ou seja, podem ser unidas sem necessáriamente serem somadas
//  ex:

    console.log(var1, num1) //será exibido "Olá mundo 2"
    var1 = "Oiê mundo"      //alterando o valor de var1
    console.log(var1, num1) //será exibido "Oiê mundo 2"

    console.log(num1, num2) //será exibido "2 4" afinal não foi utilizado simbulo de soma
    console.log(num1 + num2)//será exibido "6" sendo o resultado dá soma
        console.log(um)     //será exibido "true" no terminal, afirmando que seu valor é "verdadeiro"

    console.log(`Um texto bacana: ${var1}`, 'Um texto bacana: ', var1)
