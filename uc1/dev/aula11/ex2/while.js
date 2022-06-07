/**
 * 2) Mostre os números de 1 à 10 marcando os pares
 */

/**
 * Exemplo 1
 */

console.log("Exemplo 1");
var n = 1;

while (n <= 10) {
    let par = "";
    if (n % 2 == 0)
        par = " <=";

    console.log(n, par);

    n++;
}

/**
 * Exemplo 2
 */
console.log("Exemplo 2");
var n = 1;

while (n <= 10) {
    // var x = (1 == 1 ? "2" : "3")
    console.log(n % 2 == 0 ? `${n} <=` : `${n}`);
    n++;
}