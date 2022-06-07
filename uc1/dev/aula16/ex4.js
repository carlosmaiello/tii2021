const prompt = require('prompt-sync')();

var tarefas = [];

/**
 * Mostrar a lista de opções do sistema
 */
function mostrarMenu() {
    do {
        mostrarTarefas();
        
        var opcao = prompt("[A]dicionar - [R]emover - [S]air? ");

        if (opcao.toUpperCase() == "A") {
            adicionarTarefa();
        }
        else if (opcao.toUpperCase() == "R") {
            removerTarefa();
        }

    } while (opcao.toUpperCase() != "S");
}

/**
 * Listar as tarefas na tela
 */
function mostrarTarefas() {
    console.log();
    console.log("Minhas tarefas:");
    console.log("=-=-=-");

    tarefas.forEach(function (item, i) {
        console.log(i, item);
    });
    console.log("=-=-=-");
    console.log();
}

/**
 * Adicionar uma tarefa à lista de tarefas
 */
function adicionarTarefa() {
    let tarefa = prompt("Digite a tarefa: ");
    tarefas.push(tarefa);
}

/**
 * Remover uma tarefa da lista
 */
function removerTarefa() {
    let pos = +prompt('Digite o número da tarefa: ');
    tarefas.splice(pos, 1);
}


mostrarMenu();