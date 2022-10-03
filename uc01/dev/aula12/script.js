var nomes = [];

function mostrarNomes() {
    document.getElementById('resultado').innerHTML = '';
    for (var i = 0; i < nomes.length; i++) {
        document.getElementById('resultado').innerHTML += `<li>${nomes[i]}</li>`;
    }
}

function adicionar(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    nomes.push(nome);
    document.getElementById('nome').value = '';
    document.getElementById('nome').focus();

    mostrarNomes();
}

