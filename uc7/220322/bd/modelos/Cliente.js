const Modelo = require("../framework/Modelo");

class Cliente extends Modelo {
    static arquivo = "clientes.json";

    nome = '';
    documento = '';
}

module.exports = Cliente