let acerto = false;
let erros = 4;
let palavraAtual = PALAVRA.replace('?', '');
let andamento = false;

const forca = $('#forca img');

// Verifica se o jogo ainda está em andamento
function verificarEstado(palavra) {
  if (erros > 9) {
    return 'perdeu';
  } else if (palavra == '') {
    return 'acertou';
  }

  return false;
}

// Verifica a letra digitada e atualiza a tela
function verificarLetra(gatilho) {
  let letra = gatilho.textContent;
  
  for (let posicao in PALAVRA) {
    if (PALAVRA.charAt(posicao) == letra) {
      palavraAtual = palavraAtual.replace(letra, '').trim();

      $(`#${posicao}`).text(letra);
      acerto = true;
    }
  }
  
  if (!andamento) {
    gatilho.remove();
    
    if (!acerto) {
      erros++;
      forca.attr('src', `assets/hangman/${erros}.png`);
    }
  } 
  
  acerto = false;
  
  andamento = verificarEstado(palavraAtual);
  
  if (andamento == 'perdeu') {
    secaoPalavra.html("<button onClick='location.reload()'>Tentar novamente</button>");
  }
}