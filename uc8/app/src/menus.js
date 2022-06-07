const prompt = require('prompt-sync')();

function principal() {

}

function cursos() {
    console.log("- CURSOS ".padEnd(80, "-"));
    console.log("1) Listar");
    console.log("2) Inserir");
    console.log("3) Alterar");
    console.log("4) Excluir");
    console.log("S) Sair");
    return prompt("Selecione uma das opções: ");
}

module.exports = { principal, cursos };