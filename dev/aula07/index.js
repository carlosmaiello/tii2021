const prompt = require('prompt-sync')();


do {
    var num1 = Number(prompt('Digite o número 1: '));
    var num2 = Number(prompt('Digite o número 2: '));
} while (num1 == 0 || num1 == NaN || num2 == 0 || num2 == NaN);

console.log(num1);
console.log(num2);
