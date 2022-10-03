const prompt = require('prompt-sync')();

function imc (altura, peso) {
    return Math.round((peso / Math.pow(altura, 2)) * 100) / 100;
}


var altura = +prompt("Digite a altura: ");
var peso = +prompt("Digite o peso: ");

var res = imc(altura, peso);

console.log(res);