var numeros = [];


function adicionar() {
    var n = +document.getElementById('numero').value;

    numeros.push(n);

    document.getElementById('numero').value = '';
    document.getElementById('numero').focus();

    mostrar();
    somar();
      
}

function mostrar() {
    document.getElementById('resultado').innerHTML = '';
    numeros.forEach(function (item) {
        document.getElementById('resultado').innerHTML += item + "<br>";
    });
}

function somar() {
    var soma = 0;

    numeros.forEach(function (item) {
        soma += item;
    });

    document.getElementById('soma').innerHTML = soma;
}