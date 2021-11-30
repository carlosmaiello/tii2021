/**
 * 1. Escreva um programa que pergunte dois números e indique se são iguais ou diferentes. Caso sejam diferentes, mostre o maior e o menor, nesta ordem.
 */

const prompt = require('prompt-sync')();

var n1 = +prompt("Digite o número 1: "); //10
var n2 = +prompt("Digite o número 2: "); //20

if (n1 == n2) {
    console.log("Os números são iguais");
}
else {
    console.log("Os números são diferentes");

    if (n1 > n2) {
        console.log("n1 é maior: ", n1, n2);
    }
    else {
        console.log("n2 é maior: ", n2, n1);
    }
}
