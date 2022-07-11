const multer = require('multer');
const express = require('express');
const auth = require('../auth');
const { listarLivros, inserirLivros, inserirCapa, alterarLivros, consultarLivro } = require('../controlladores/livros');

const parser = multer({ dest: 'public/uploads/' });

const router = express.Router();

router.use(auth);

router.get('/', listarLivros);
router.post('/', inserirLivros);
router.post('/:id/capa', parser.single('capa'), inserirCapa);
router.get('/:id', consultarLivro);
router.get('/:id/capitulos', listarCapitulos);
router.put('/:id', alterarLivros);
router.delete('/:id', excluirLivros);
router.delete('/:id/capitulos/:capitulo_id', excluirCapitulo);

module.exports = router