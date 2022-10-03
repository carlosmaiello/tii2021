const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../auth');
const Usuario = require('../modelos/Usuario');

const router = express.Router();


router.get('/', auth, (req, res) => {
    res.send(Usuario.listar());
})

router.post('/', auth, (req, res) => {
    let usuario = new Usuario().assign(req.body);
    usuario.salvar();

    res.status(200).send(usuario);
})

router.get('/eu', auth, (req, res) => {
    res.send(Usuario.consultar(req.usuario_id));
})

router.get('/:id', auth, (req, res) => {
    res.send(Usuario.consultar(req.params.id));
})

router.put('/:id', auth, (req, res) => {
    let usuario = Usuario.consultar(req.params.id).assign(req.body);
    usuario.salvar();
    res.send(usuario);
})

router.delete('/:id', auth, (req, res) => {
    Usuario.consultar(req.params.id).excluir();
    res.status(200).send('OK');
})

router.post("/login", (req, res) => {
    const { email, senha } = req.body;

    const usuario = Usuario.consultarPorEmailSenha(email, senha);

    if (usuario == null)
        res.status(401).send({ erro: true, mensagem: "Usuário ou senha inválidos!" });
    else {
        const token = jwt.sign({ usuario_id: usuario.id }, "chavesecreta");
        res.send({ usuario, token });
    }
});


module.exports = router