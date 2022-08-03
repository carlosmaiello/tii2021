const express = require('express');
const { Usuario } = require('./models');

const router = express.Router();

router.get('/', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.send(usuarios);
});

router.post('/', async (req, res) => {
    const usuario = await Usuario.create(req.body);
    res.send(usuario);
})

module.exports = router;