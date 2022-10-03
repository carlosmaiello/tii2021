const express = require('express');
const Receita = require('../modelos/Receita');

const router = express.Router();

/**
 * Listar todas as receitas
 */
router.get('/', (req, res) => {
    res.send(Receita.listar());
});

/**
 * Inserir uma receita
 */
router.post('/', (req, res) => {
    const receita = new Receita().assign(req.body);
    receita.salvar();
    res.send(receita);
});

/**
 * Consultar uma receita
 */
router.get('/:id', (req, res) => {
    res.send(Receita.consultar(req.params.id));

});

/**
 * Alterar uma receita
 */
router.put('/:id', (req, res) => {
    const receita = Receita.consultar(req.params.id).assign(req.body);
    receita.salvar();
    res.send(receita);
});

/**
 * Remover uma receita
 */
router.delete('/:id', (req, res) => {
    Receita.consultar(req.params.id).excluir();
    res.send('OK');
});

module.exports = router;