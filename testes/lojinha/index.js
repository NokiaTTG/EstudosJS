const produtos = [
    {id:1, produto: "Maçã", preco: 2.50},
    {id:2, produto: "Banana", preco: 1.50},
    {id:3, produto: "Laranja", preco: 3.50}
];

function selecionar(id) {
    if (id < 0 || id >= produtos.length) {
        return "Produto não encontrado.";
    }
    const seletor = `O seu produto é: ${produtos[id].produto}, e seu preço é: R$${produtos[id].preco.toFixed(2)}`;
    return seletor;
}

function mostrarProduto() {
    const index = parseInt(document.getElementById('produtoIndex').value);
    const resultado = selecionar(index);
    document.getElementById('resultado').innerText = resultado;
}



function desconto(){
    const index = parseInt(document.getElementById().value)
    const desc = `${-produtos.produto.preco * index / 100}R$ de desconto!`
    document.getElementById('desc').innerText = desc
    return desc
}









// let hamburgueres = [
//     { 
//         id: 0, 
//         name: 'X-Burguer', 
//         img: 'imagens/hamburguer.png', 
//         price: 8.00, 
//         description: 'Pão, Hamburguer, Queijo.', 
//         type: 'Hamburguer' 
//     },
//     { id: 1, name: 'X-Salada', img: 'imagens/hamburguer.png', price: 9.00, description: 'Pão, Hamburguer, Queijo, Tomate e Alface.', type: 'Hamburguer' },
//     { id: 2, name: 'X-Egg', img: 'imagens/hamburguer.png', price: 10.00, description: 'Pão, Hamburguer, Queijo, Ovo, Tomate e Alface.', type: 'Hamburguer' },
//     { id: 3, name: 'X-Calabresa', img: 'imagens/hamburguer.png', price: 12.00, description: 'Pão, Hamburguer, Queijo, Calabresa, Tomate e Alface.', type: 'Hamburguer' },
//     { id: 4, name: 'X-Bacon', img: 'imagens/hamburguer.png', price: 14.00, description: 'Pão, Hamburguer, Queijo, Bacon, Tomate e Alface.', type: 'Hamburguer' },
//     { id: 5, name: 'X-Tudo', img: 'imagens/hamburguer.png', price: 18.00, description: 'Pão, Hamburguer, Queijo, Calabresa, Omelete de Presunto e Queijo, Bacon, Tomate e Alface.', type: 'Hamburguer' },
//     { id: 6, name: 'X-Especial', img: 'imagens/hamburguer.png', price: 23.00, description: 'Pão, 2 Hamburgueres, Queijo, Calabresa, Omelete de Presunto e Queijo, Bacon, Tomate e Alface.', type: 'Hamburguer' }
// ];