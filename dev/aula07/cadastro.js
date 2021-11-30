const prompt = require('prompt-sync')();

var idade = prompt("Digite sua idade: ");


if (Number(idade) >= 18) {
    var nome = prompt("Digite seu nome:");
    var endereco = prompt("Digite seu endereco:");
    var email = prompt("Digite seu email:");
    var telefone = prompt("Digite seu telefone:");

    console.log(nome, endereco, email, telefone);
    console.log("Cadastro realizado com sucesso!")
}
else 
    console.log("Você não pode se cadastrar");
