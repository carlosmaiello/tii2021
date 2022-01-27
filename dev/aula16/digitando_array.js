const prompt = require('prompt-sync')();

var numeros = [];

for (var i=0; i < 5; i++) {
    var n = +prompt('Digite um valor: ');
    numeros.push(n);
}

console.log(numeros);


