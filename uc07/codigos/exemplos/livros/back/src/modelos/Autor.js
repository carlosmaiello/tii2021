const Modelo = require("../framework/Modelo");


class Autor extends Modelo {
    static arquivo = 'autores.json';

    nome = '';
    sobrenome = '';
}

module.exports = Autor