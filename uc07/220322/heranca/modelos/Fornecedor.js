const Pessoa = require("./Pessoa");

class Fornecedor extends Pessoa {
    #prazoDePagamento = 0;

    constructor(nome, sobrenome) {
        super(nome, sobrenome);
    }

    get prazoDePagamento() {
        return this.#prazoDePagamento;
    }

    set prazoDePagamento(valor) {
        this.#prazoDePagamento = valor;
    }
}

module.exports = Fornecedor
