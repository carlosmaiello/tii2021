const fs = require('fs');
const {join} = require('path');

class Modelo {
    static dir;
    static arquivo = '';

    static get arquivoCaminho() {
        return join(this.dir, this.arquivo);
    }

    id=0;
    dataCadastro=new Date();
    dataAtualizacao=new Date();

    constructor() {
    }

    salvar() {
        var dados = this.constructor.listar();

        if (this.id == 0) {
            this.id = dados.length > 0 ? dados[dados.length - 1].id + 1 : 1;
            dados.push(this);
        }
        else {
            // Alterar os dados
        }

        fs.writeFileSync(this.constructor.arquivoCaminho, JSON.stringify(dados, null, '\t'))


    }

    excluir() {

    }

    static consultar(id) {

    }

    static listar() { 
        try {
            const dados = fs.existsSync(this.arquivoCaminho) ? 
                fs.readFileSync(this.arquivoCaminho) : '';
            return JSON.parse(dados);
        }
        catch (erro) {
            return [];
        }
    }

}

module.exports = Modelo