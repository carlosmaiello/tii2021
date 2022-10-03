const express = require('express');
const { Usuario } = require('./models');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const usuarios = await Usuario.findAll();
        res.send(usuarios);
    }
    catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const usuario = await Usuario.create(req.body);
        res.send(usuario);
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;