/**
 * Cadastro de livros
 * 
 * Requisitos
 * - Gerenciar a lista de livros
 * - Gerenciar autores
 * - Gerenciar genêros
 * - Gerenciar editoras
 */

var editora = {
    id: 1,
    nome: 'Vagalume'
}

var genero = {
    id: 1,
    titulo: 'Terror',
};


var genero2 = {
    id: 2,
    titulo: 'Romance',
};

var genero3 = {
    id: 3,
    titulo: 'Aventura',
};

function Autor(id, nome, sobrenome) {
    this.id = id;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = '';
    this.site = '';

    this.nomeCompleto = function () {
        return this.sobrenome + ', ' + this.nome;
    }
}

var autor3 = new Autor(3, 'Maria', 'Fernandes');
autor3.email = 'maria.fernandes@gmail.com';

var autor = {
    id: 1,
    nome: 'Carlos',
    sobrenome: 'Maiello',
    email: 'carlos.amjunior@sp.senac.br',
    site: 'http://www.carlosmaiello.com',
};

var autor2 = {
    id: 2,
    nome: 'Jose',
    sobrenome: 'Silva',
    email: 'josesilva@gmail.com',
    site: 'http://www.josesilva.com'
};

var livro = {
    id: 1,
    titulo: 'A ilha perdida',
    sinopse: '...',
    ano: 1944,
    edicao: 1,
    classificacaoEtaria: 'Infantil',
    genero: genero3,
    autores: [autor, autor3],
    editora: editora,
    idioma: 'pt-br'
};


console.log(autor3, autor3.nomeCompleto());