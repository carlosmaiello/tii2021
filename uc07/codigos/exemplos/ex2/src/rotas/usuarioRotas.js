const express = require('express');
const router = express.Router();
const db = require('../db/usuarios');

router.get('/', (req, res) => {
    res.send(db.todos());
});

router.post('/', (req, res) => {
    var usuarios = db.todos();
    usuarios.push(req.body);
    db.salvar(usuarios);

    res.status(200).send('OK');
});

router.get('/:id', (req, res) => {
    res.send('consultar');
});

router.put('/:id', (req, res) => {
    res.send('alterar');
});

router.delete('/:id', (req, res) => {
    res.send('deletar');
});

module.exports = router;

