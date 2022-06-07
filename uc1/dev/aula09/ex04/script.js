var numAleatorio;

function novoNumero() {
    numAleatorio = Math.round(Math.random() * 10);
}

function verificar() {

    let num = document.getElementById('numero').value;

    if (num > numAleatorio) {
        document.getElementById('resultado').innerHTML += `${num} é <b>MAIOR</b><br>`;
    }
    else if (num < numAleatorio) {
        document.getElementById('resultado').innerHTML += `${num} é <b>MENOR</b><br>`;
    }
    else {
        alert('Você acertou o número!');
        novoNumero();
        document.getElementById('resultado').innerHTML = '';
    }

    document.getElementById('numero').value = '';
    document.getElementById('numero').focus();
}

novoNumero();