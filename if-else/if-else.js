const cabecalho = document.querySelector('#cabecalho')

const paragrafo = document.createElement('p')
paragrafo.textContent = 'Olá, Mundo!'
paragrafo.classList.add('paragrafo-criado')

cabecalho.appendChild(paragrafo)