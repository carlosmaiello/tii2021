/**
 * 5) Calcule o fatorial de um número
 * 5! = 5 X 4 X 3 X 2 X 1
 * 3! = 3 X 2 X 1
 */
const prompt = require("prompt-sync")();

var num = prompt('Digite um número: ');
var fatorial = 1;

for (var i=num; i > 1; i--) {
    fatorial *= i;
}

console.log("Fatorial de ", num, " é ", fatorial);


