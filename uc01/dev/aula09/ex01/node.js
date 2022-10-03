const prompt = require('prompt-sync')();

console.log("PAR ou ÍMPAR");
console.log("------------");

var num = prompt("Digite o número: ");

var resto = num % 2;

if (resto == 0) {
    console.log(`O número ${num} é PAR!`);
}
else {
    console.log(`O número ${num} é ÍMPAR!`);
}