// Criei o objeto com informações
objeto = {
    nome: {
        primeiro: 'Warley',
        ultimo: 'Martins', 
    },

    endereco: {
        rua: 'Odassi Nazalli',
        numero: '17',
    }
}

// Criei as constantes
const meunome = document.querySelector('#meunome')

// Criei os elementos
const meunomeH1 = document.createElement('h1')
meunomeH1.id = 'meu-nome-h1'
meunomeH1.textContent = `Olá, ${objeto.nome.primeiro} ${objeto.nome.ultimo}`

meunome.appendChild(meunomeH1)

console.log(objeto)
console.log(objeto.nome.ultimo)