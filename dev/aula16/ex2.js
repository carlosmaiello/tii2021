const prompt = require('prompt-sync')();

var numeros = [];

var sair = false;

while (!sair) {
    let n = +prompt("Digite um número (0 para sair): ");
    sair = (n == 0);
    if (!sair) {
        numeros.push(n); 
    }
}

var total = 0;
for (var i=0; i <= numeros.length-1; i++) {
    total += numeros[i];
}

console.log('Números digitados: ', numeros.length);
console.log('Total: ', total);

