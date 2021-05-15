document.querySelector('#Salvar').addEventListener('click', function armazemnarDados(event){
    event.preventDefault();
    let nome = document.getElementById('Nome');

    let exibiResposta = document.getElementById('resposta');

    if( nome.value === ''){
        exibiResposta.innerText="Por favor, digite seu nome";
    }else{
        exibiResposta.innerText="dados enviados"

    }
})
