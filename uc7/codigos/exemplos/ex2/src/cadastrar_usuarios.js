const db = require('./db/usuarios.js');

var usuarios = []; //db.todos();

usuarios.push({
    'id': 1,
    'nome': 'Carlos',
    'sobrenome': 'Maiello',
    'email': 'carlos.mjunior@sp.senac.br',
    'senha': '123'
});

usuarios.push({
    'id': 2,
    'nome': 'José',
    'sobrenome': 'Silva',
    'email': 'jose@gmail.com',
    'senha': '123'
});

db.salvar(usuarios);
