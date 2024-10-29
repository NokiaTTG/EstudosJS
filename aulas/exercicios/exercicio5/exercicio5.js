function meuEscopo (){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.exibir')

    const pessoas = []

    function recebeEventoForm(evento){

        //evento.preventDefalt()

        const nomeEl = form.querySelector('#nome')
        const sobrenomeEl = form.querySelector('#sobrenome')
        const pesoEl = form.querySelector('#peso')
        const idadeEl = form.querySelector('#idade')

        const peso = parseFloat(pesoEl.value)
        const idade = parseFloat(idadeEl.value)
        
        console.log(nomeEl.value, sobrenomeEl.value)

    }

    //form.addEventListener('submit', recebeEventoForm)
    const btn = document.getElementById("btn")
    btn.addEventListener("click", recebeEventoForm)
}
meuEscopo();




