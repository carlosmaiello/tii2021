
var frutas = ['Banana', 'Maçã', 'Melão', 'Morango', 'Jaboticaba'];
console.log(frutas.length);

console.log("Primeiro e último");
console.log(frutas[0]);
console.log(frutas[frutas.length - 1]);

console.log('');
console.log("Listando todos");
for (var i=0; i <= frutas.length-1; i++) {
    console.log(frutas[i], frutas[i].substring(0, 1));
}

frutas.push('Laranja');
var nome = "Melancia";
frutas.push(nome);

console.log('');
console.log("Listando forEach");

frutas.forEach(function (item, i) {
    console.log(i, item);
    if (item.substring(0, 1) == 'M') {
        frutas.splice(i, 1);
    }
});


console.log("Posição do Morango: ", frutas.indexOf('Morango'));
console.log("Posição da Ameixa: ", frutas.indexOf('Ameixa'));








var alunos = ["Saulo", "Lyan", "Bryan"];
var ra = ["1234", "1235", "1236"];

console.log('');
console.log('');
for (var i = 0; i <= alunos.length - 1; i++) {
    console.log(ra[i], alunos[i]);
}
