function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    //se o campoPesquisa for uma string sem nada. dois iguais para comparar// return finaliza a função.
    if(!campoPesquisa) {
      section.innerHTML = "<p>Nenhuma tecnologia encontrada </p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  

    console.log(campoPesquisa);
    
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao= "";
    let tags = "";

  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
    
      //se no dado titulo includes campoPesquisa então será executado todo bloco de código então, faça...
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes (campoPesquisa)) {
      console.log(dado.titulo.includes(campoPesquisa)) 
         // Cria um novo elemento HTML para cada resultado

        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a> </h2>
          <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais informações</a> </div>
          `;
    }   
      }   

      if(!resultados){
        resultados = "<p>Nenhuma tecnologia encontrada</p>"
      }
    // Atualiza o conteúdo HTML da seção com os resultados gerados
    section.innerHTML = resultados;
  }