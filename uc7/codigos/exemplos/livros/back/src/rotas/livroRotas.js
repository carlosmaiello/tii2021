const multer = require('multer');
const express = require('express');
const auth = require('../auth');
const Capitulo = require('../modelos/Capitulo');
const Livro = require('../modelos/Livro');


const parser = multer({ dest: 'public/uploads/' });

const router = express.Router();

router.use(auth);

router.get('/', (req, res) => {
    res.send(Livro.listar());
})

router.post('/', (req, res) => {

    const capitulos = req.body.capitulos;
    if (capitulos)
        delete req.body.capitulos;

    let livro = new Livro().assign(req.body);
    livro.salvar();

    if (Array.isArray(capitulos)) {
        capitulos.forEach((capitulo) => {
            capitulo.livro_id = livro.id
            new Capitulo().assign(capitulo).salvar();
        });
    }

    res.status(200).send(livro);
})

router.post('/:id/capa', parser.single('capa'), (req, res) => {

    let livro = Livro.consultar(req.params.id);
    livro.capa = `http://localhost:3000/uploads/${req.file.filename}`;
    livro.salvar();

    res.status(200).send(livro);
})

router.get('/:id', (req, res) => {
    res.send(Livro.consultar(req.params.id));
})

router.get('/:id/capitulos', (req, res) => {
    res.send(Livro.consultar(req.params.id).capitulos);
})

router.put('/:id', (req, res) => {
    let livro = Livro.consultar(req.params.id).assign(req.body);
    livro.salvar()
    res.send(livro);
})

router.delete('/:id', (req, res) => {
    Livro.consultar(req.params.id).excluir();
    res.status(200).send('OK');
})

router.delete('/:id/capitulos/:capitulo_id', (req, res) => {
    Capitulo.consultar(req.params.capitulo_id).excluir();
    res.status(200).send('OK');
})

module.exports = router