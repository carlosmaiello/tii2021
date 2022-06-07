const prompt = require('prompt-sync')();

var a, b, c;

do {
    console.log("Entre com os valores")
    a = prompt("Digite A: ");
    b = prompt("Digite B: ");
} 
while (Number(a) < 0 || Number(b) < 0);

/*
"a" + "a" => "aa"
"1" + "2" => "12"
Number("1") + Number("2") => 3
*/

console.log("");
console.log("Trocando valores");

console.log("Valores antes:", a, b);

c = a;
a = b;
b = c;

console.log("Valores depois:", a, b);