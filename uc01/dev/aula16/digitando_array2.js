const prompt = require('prompt-sync')();

var numeros = [];

var sair = false;

while (!sair) {
    var n = +prompt('Digite um valor: ');
    numeros.push(n);

    var opcao = prompt('Deseja continuar (S/N): ');
    sair = opcao.toUpperCase() == "N";
}


console.log(numeros);


