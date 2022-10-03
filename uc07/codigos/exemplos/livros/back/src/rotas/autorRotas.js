const express = require('express');
const auth = require('../auth');
const Autor = require('../modelos/Autor');

const router = express.Router()
router.use(auth);


router.get('/', (req, res) => {
    res.send(Autor.listar());
})

router.post('/', (req, res) => {
    let autor = new Autor().assign(req.body);
    autor.salvar();
    res.status(200).send(autor);
})

router.get('/:id', (req, res) => {
    res.send(Autor.consultar(req.params.id));
})

router.put('/:id', (req, res) => {
    let autor = Autor.consultar(req.params.id).assign(req.body);
    autor.salvar();
    res.send(autor);
})

router.delete('/:id', (req, res) => {
    Autor.consultar(req.params.id).excluir();
    res.status(200).send('OK');
})


module.exports = router