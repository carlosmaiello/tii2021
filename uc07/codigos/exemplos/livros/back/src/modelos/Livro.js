const Modelo = require('../framework/Modelo');
const Capitulo = require('./Capitulo');

class Livro extends Modelo {
    static arquivo = 'livros.json';

    nome = '';
    autor_id = null;
    sinopse = '';
    ano = '';
    edicao = 1;
    capa = '';

    get capitulos () {
        return Capitulo.listarPorLivroId(this.id);
    }
}

module.exports = Livro