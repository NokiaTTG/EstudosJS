let varA = 1; 
let varB = 2;
let varC = 3;
let container;

container = varA //armazena o valor de (A = 1)
varA = varB //modifica o valor de A para (B = 2)
varB = varC //modifica o valor de B para (C = 3)
varC = container // modifica o valor de C para (container = A = 1)

//mesma coisa que: 
[varA, varB, varC] = [varB, varC, varA]
//altera os valores sem necessariamente criar um mais uma variavel para armazenar

console.log(varA, varB, varC)