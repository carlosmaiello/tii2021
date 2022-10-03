const Modelo = require("../framework/Modelo");


class Usuario extends Modelo {
    static arquivo = 'usuarios.json';

    nome = '';
    sobrenome = '';
    email = '';
    senha = '';

    static consultarPorEmailSenha(email, senha) {
        return this.listar().find(usuario => usuario.email == email && usuario.senha == senha);
        
        // const dados = this.listar().filter(usuario => usuario.email == email && usuario.senha == senha);
        // if (dados.length > 0)
        //     return dados[0];
        // else
        //     return null;
    }
}

module.exports = Usuario