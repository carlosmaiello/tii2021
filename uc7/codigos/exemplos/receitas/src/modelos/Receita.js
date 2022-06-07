const Modelo = require("../framework/Modelo");

class Receita extends Modelo {
    static arquivo = 'receitas.json';

    nome = ''
    tempo = 0
    porcoes = 0
    ingredientes = []
    preparo = []

}

module.exports = Receita