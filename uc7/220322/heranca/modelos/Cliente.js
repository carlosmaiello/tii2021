const Pessoa = require("./Pessoa");

class Cliente extends Pessoa {
    #limiteDeCredito;

    constructor(nome, sobrenome) {
        super(nome, sobrenome);
    }

    get limiteDeCredito () {
        return this.#limiteDeCredito
    }

    set limiteDeCredito(valor) {
        this.#limiteDeCredito = valor
    }

}

module.exports = Cliente