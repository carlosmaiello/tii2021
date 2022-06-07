/**
 * Lista de tarefas
 * 
 * Requisitos
 * - Cadastrar uma tarefas
 * - Excluir uma tarefa
 * - Alterar uma tarefa
 * - Marcar uma tarefa como concluída
 * - Gerenciar usuários
 * - Gerenciar lista de tarefas
 * 
 * CRUD
 * - Create (Criar)
 * - Retrieve (Consultar)
 * - Update (Atualizar)
 * - Delete (Remover)
 */
var u1 = {
    id: 1,
    nome: 'Carlos Maiello',
    email: 'carlos.mjunior@sp.senac.br',
    senha: '123'
};

var u2 = {
    id: 2,
    nome: 'José Silva',
    email: 'josesilva@gmail.com',
    senha: '123'
};

var l1 = {
    id: 1,
    nome: 'Mercado',
    usuario: u1
};

var t1 = {
    id: 1,
    titulo: 'Comprar arroz',
    lista: l1,
    dataConclusao: new Date(2022, 02, 02),
    concluida: false
};

console.log(t1.lista.usuario.nome);


