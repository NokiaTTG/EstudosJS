let a = 10
console.log({a})
const b = 12
{
    a = 22
    {
        //const a = 11
        console.log(b)
        console.log({a})
        {
            const c = 12
            console.log(a)
        }
    }
}
function coisa(x){
    return x+1
}

a = coisa(a);
console.log(a)
a = coisa(a)
console.log(a)
a = coisa(a);
console.log(a)
a = coisa(a)
console.log(a)



if(true) a = 3
else d = "tchau"

console.log(d)
let i = 0
for(let i = 0;i < 10; i = i + 2){
    console.log(i)
}

//inicialização: ocorre uma vez(let i = 0)
//iteração: execução do for
//condição: verifi
//0 < 10? true, executa o corpo
//incremento: i = 1
//condição: i = 1
//... 11 < 10? false, para a execução do for