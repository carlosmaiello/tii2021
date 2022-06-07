const Modelo = require('../framework/Modelo');

class Capitulo extends Modelo {
    static arquivo = 'capitulos.json';

    numero = '';
    titulo = '';
    livro_id = 0;

    static listarPorLivroId(id) {
        return Capitulo.listar().filter(capitulo => capitulo.livro_id == id);
    }
}

module.exports = Capitulo