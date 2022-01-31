var tarefas = [];

function adicionar(e) {
    e.preventDefault();

    let tarefa = document.getElementById('tarefa').value;

    if (tarefa != '') {
        tarefas.push(tarefa);
    }

    document.getElementById('tarefa').value = '';
    document.getElementById('tarefa').focus();
    
    mostrarTarefas();
    
}

function mostrarTarefas() {
    var lista = document.getElementById('tarefas');

    lista.innerHTML = '';
    tarefas.forEach(function (item, i) {
        lista.innerHTML += `<li>${item} <button type="button" onclick="remover(${i})" class="btn-remover">X</button></li>`;
    })
}

function remover(pos) {
    tarefas.splice(pos, 1);

    mostrarTarefas();
}