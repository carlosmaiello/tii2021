const prompt = require('prompt-sync')();


var numAletorio = Math.round(Math.random() * 10);
var num = -1;

while (num != numAletorio) {
    var num = prompt("Digite um número entre 0 e 10: ");

    if (num > numAletorio) {
        console.log(`${num} é MAIOR`);
    }
    else if (num < numAletorio) {
        console.log(`${num} é MENOR`);
    }
    else {
        console.log(`Você acertou!`);
    }
}