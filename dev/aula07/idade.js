const prompt = require('prompt-sync')();

var idade = prompt("Digite sua idade: ");


//Number(idade) >= 16 retorna true ou false (Verdadeiro ou falso)

if (Number(idade) >= 16) {
    console.log("Sua idade é", idade);
    console.log("Você pode votar!");
}