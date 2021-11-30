const prompt = require('prompt-sync')();

var usuario = prompt("Digite o usuário: ");
var senha = prompt("Digite senha: ");


if (usuario == "carlos" && senha == "123") {
    console.log("Seja bem vindo!");
}
else {
    console.log("Usuário ou senha inválidos");
}