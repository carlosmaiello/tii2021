/**
 * 5. Escreva um programa que solicite duas datas pelo teclado e imprima primeiro a menor data seguida da maior data
 
 
 01/01/2021 - 01/01/2022

 01/02/2021 - 01/03/2021

 01/03/2021 - 02/03/2021
 */

 const prompt = require('prompt-sync')();
const { data } = require('./datas');


console.log(data(1, 2, 2021));

console.log('Digite a primeira data: ');
 var dia1 = prompt('Dia: ');
 var mes1 = prompt('Mês: ');
 var ano1 = prompt('Ano: ');

console.log('Digite a segunda data: ');
 var dia2 = prompt('Dia: ');
 var mes2 = prompt('Mês: ');
 var ano2 = prompt('Ano: ');

 console.log('');

 var data1 = data(dia1, mes1, ano1);
 var data2 = data(dia2, mes2, ano2);
 
if (ano1 > ano2) {
    console.log(data2, data1);
}
else if (ano1 < ano2) {
    console.log(data1, data2);
}
else {
    if (mes1 > mes2) {
        console.log(data2, data1);
    }
    else if (mes1 < mes2) {
        console.log(data1, data2);
    }
    else {
        if (dia1 > dia2) {
            console.log(data2, data1);
        }
        else if (dia1 < dia2) {
            console.log(data1, data2);
        }
        else {
            console.log("Datas iguais");
        }
    }
}