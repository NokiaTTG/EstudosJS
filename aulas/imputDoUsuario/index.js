let nomeDoUsuario;
//getElementById, pega o ID de referencia de uma tag. .onclick define que ao clicar nesta tag algo irá ocorrer, nesse caso o que estiver dentro da function
document.getElementById("btnEnviar").onclick = function(){
    
    //definimos o valor da variavel com o input feito pelo usuário
    nomeDoUsuario = document.getElementById("txtNome").value
    
    //definimos o conteudo de texto que irá ser exibido no h1, que no caso será o valor da variavel.
    document.getElementById("meuH1").textContent = `Olá! ${nomeDoUsuario}`
}