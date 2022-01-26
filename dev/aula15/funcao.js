const { data, validaData } = require('./datas.js');

console.log(data(1,2,2022));

console.log(validaData(29,2,2022));
console.log(validaData(28,2,2022));
console.log(validaData(29,2,2020));

if (validaData(29,2,2022)) {
    console.log('Data Válida');
}
else {
    console.log('Data inválida');
}