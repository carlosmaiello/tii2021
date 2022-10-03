const prompt = require('prompt-sync')();

var numeros = [];

var sair = false;

while (!sair) {
    var n = +prompt('Digite um valor: ');
    numeros.push(n);

    var opcao = prompt('Deseja continuar (S/N): ');
    sair = opcao.toUpperCase() == "N";
}

var total = 0;
for (var i=0; i <= numeros.length-1; i++) {
    total += numeros[i];
}

console.log('Números digitados: ', numeros.length);
console.log('Total: ', total);

