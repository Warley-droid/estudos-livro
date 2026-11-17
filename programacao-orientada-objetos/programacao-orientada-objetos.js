function Livro(titulo, paginas, isbn){ // cria uma função que será utilizada para construir objetos.
    this.titulo = titulo
    this.paginas = paginas
    this.isbn = isbn
}

// Instanciando a classe através do /new/
const meuLivro = new Livro('JavaScript', 350, '40028922')

// Podemos acessar acessar suas propriedades e atualizá-las deste modo:
console.log(meuLivro.titulo) // Exibe o título do livro.

meuLivro.titulo = 'Novo título' //Atualiza o valor do título do livro.

console.log(meuLivro.titulo) // Exibe o título do livro.