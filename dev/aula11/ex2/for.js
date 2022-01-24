/**
 * 2) Mostre os números de 1 à 10 marcando os pares
 */

/**
 * Exemplo 1
 */

console.log("Exemplo 1");

for (var n = 1; n <= 10; n++) {
    let par = "";
    if (n % 2 == 0)
        par = " <=";

    console.log(n, par);
}

/**
 * Exemplo 2
 */
console.log("Exemplo 2");

for (n = 1; n <= 10; n++) {
    console.log(n % 2 == 0 ? `${n} <=` : `${n}`);   
}