function criarTabela(event) {
    event.preventDefault();

    let pegaTitulo = document.getElementById('titulo').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let pegaAutor = document.getElementById('autor').value;
    let pegaPagina = document.getElementById('pages').value;
    let pegaDataPublicacao = document.getElementById('data').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    let lista = document.getElementById('corpoTabela');
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = pegaTitulo;
    tr.appendChild(td);
    let tdIsbn = document.createElement('td');
    tdIsbn.textContent = pegaIsbn;
    tr.appendChild(tdIsbn);
    let tdAutor = document.createElement('td');
    tdAutor.textContent = pegaAutor;
    tr.appendChild(tdAutor);
    let tdPagina = document.createElement('td');
    tdPagina.textContent = pegaPagina;
    tr.appendChild(tdPagina);
    let tdDataDePublicacao = document.createElement('td');
    tdDataDePublicacao.textContent = pegaDataPublicacao;
    tr.appendChild(tdDataDePublicacao);
    let tempoInsercao = document.createElement('td');
    tempoInsercao.textContent = (`${dataInsercao}, ${horarioInsercao}`)
    tr.appendChild(tempoInsercao);
    let tdButton = document.createElement('td');
    tdButton.appendChild(criarBotao());
    tr.appendChild(tdButton);

    lista.appendChild(tr);

};


function criarBotao() {
    let botao = document.createElement('button');
    botao.textContent = "Remover"
    botao.addEventListener('click', function remover(event) {
        let botaoRetornado = event.target;
        let colunaRetornada = botaoRetornado.parentNode;
        let linhaBotao = colunaRetornada.parentNode;
        linhaBotao.remove();
    })
    return botao;
}


/*<ul>
    <li>
        Título: ${pegarTitulo}, Autor: ${pegarAutor}, ISBN: ${pegarISBN}, Data da Publicação: ${pegarDataPublicacao},
        Páginas: ${pegarQtdPaginas}, Data inserção no sistema: ${dataInsercao}, ${horarioInsercao}
    </li>
</ul>*/

/* document.getElementById('corpo_tabela').innerHTML += `
        <tr>
            <td>${pegarTitulo}</td>
            <td>${pegarAutor}</td>
            <td>${pegarISBN}</td>
            <td>${pegarDataPublicacao}</td>
            <td>${pegarQtdPaginas}</td>
            <td>${dataInsercao}, ${horarioInsercao}</td>
        </tr>    

    `*/