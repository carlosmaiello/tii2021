const Modelo = require("../framework/Modelo");

class Produto extends Modelo {
    static arquivo = "produtos.json";
    
    nome='';
    valor=0;

}

module.exports = Produto