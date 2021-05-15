function mostraPrecoAptoDoisDorm() {
    //especificar o elemento do DOM que será manipulado. DICA: botão

    //evento de exibição do valor do imóvel

    let getBotaoApDoisDorm = document.querySelector('#btnAptoDoisDorm');
    
    getBotaoApDoisDorm.addEventListener('click', function mostrarValor(){

      document.getElementById('precoAptoDoisDorm').innerHTML='Preço do imóvel: R$ 500.000,00'
      
    })


  };
  
  function mostraPrecoAptoTresDorm() {
    document.getElementById('precoAptoTresDorm').innerHTML ='Preço do imóvel: R$ 600.000,00'

  };
  
  mostraPrecoAptoDoisDorm();
  //mostraPrecoAptoTresDorm();