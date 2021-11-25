// Entradas
/**
 * 1. Inicializar o npm no diretório
 * npm init -y
 * 2. Instalar um plugin prompt-sync
 * npm install prompt-sync
 * 3. Rodar o programa
 * node <nome do arquivo js>.js
 */

// Saída
/**
 * console.log("Saída");
 */ 

const prompt = require('prompt-sync')();

do {
    console.log('####################################');
    console.log('Digite os valores');
    console.log('');
    var comp = prompt("Digite o comprimento da sala: ");
    var larg = prompt("Digite a largura da sala: ");
    var alt  = prompt("Digite a altera da sala: ");
} while (Number(comp) == 0 || Number(larg) == 0 || Number(alt) == 0);

var area = Number(comp) * Number(larg);
var volume = Number(comp) * Number(larg) * Number(alt);

console.log('');
console.log('Resultados:')
console.log("A área é ", area);
console.log("O volume é ", volume);




