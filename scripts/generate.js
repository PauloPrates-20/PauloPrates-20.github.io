// Gera o teclado na página
const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const teclado = $('#teclado');
let htmlTeclado = '';

for (let letra in ALFABETO) {
  htmlTeclado += `
    <button onClick="verificarLetra(this)">${ALFABETO.charAt(letra)}</button>
  `;
}

teclado.html(htmlTeclado);

// Gera o campo da palavra na página
const PALAVRA = 'NAMORA COMIGO?';

const secaoPalavra = $('#palavra');
let htmlPalavra = '';

for (let letra in PALAVRA) {
  if (PALAVRA.charAt(letra) == ' ') {
    htmlPalavra += `<p id="${letra}">&nbsp;</p>`
  } else if (PALAVRA.charAt(letra) == '?') {
    htmlPalavra += '<p>?</p>'
  } else {
    htmlPalavra += `<p id="${letra}">_</p>`
  }
}

secaoPalavra.html(htmlPalavra);