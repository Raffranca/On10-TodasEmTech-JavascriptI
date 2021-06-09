const pagaTitulo = document.querySelector('#titulo');
const pagaAutor = document.querySelector('#autor');
const pagaIsbn = document.querySelector('#isbn');
const pagaPaginas = document.querySelector('#pages');
const pagaDataPublicacao = document.querySelector('#data');
const corpoTabela = document.querySelector('#corpoTabela');
const botaoEnviar = document.querySelector('#enviar');

botaoEnviar.addEventListener('click', (event)=>{
    event.preventDefault();
    if(pagaTitulo.value == "" || pagaAutor.value == "" || pagaIsbn.value == "" || pagaDataPublicacao.value == ""){
        alert('Preencher campo obrigatório')
    }else{
        corpoTabela.innerHTML += `
    <tr>
        <td>${pagaTitulo.value}</td>
        <td>${pagaAutor.value}</td>
        <td>${pagaIsbn.value}</td>
        <td>${pagaPaginas.value}</td>
        <td>${pagaDataPublicacao.value}</td>
        <td><button class="btnExcluir">excluir</button></td>
    </tr>
    `
    limparFormulario();
    //excluirLivro();
    }
})

const limparFormulario = () => {
    pagaTitulo.value = ""
    pagaAutor.value = ""
    pagaIsbn.value = ""
    pagaPaginas.value = ""
    pagaDataPublicacao.value = ""
}

corpoTabela.addEventListener('click', (event) => {
    if(event.target.className == 'bntExcluir'){
        console.log(event.target)
        const botaoPai = event.target.parentElement
        botaoPai.parentElement.remove()
    }
})


/*const excluirLivro = ()=>{
    const excluirLinha = document.querySelector('.bntExcluir')
    excluirLinha.addEventListener('click',(event)=>{
        //event.preventDefault()
       // console.log(event.target)
        const botaoLixo = event.target
        //console.log(botaoLixo)
        const botaoPai = botaoLixo.parentElement
        botaoPai.parentElement.remove()
    })
}*/




