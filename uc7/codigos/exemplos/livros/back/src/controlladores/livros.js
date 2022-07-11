const Livro = require("../modelos/Livro");
const Capitulo = require('../modelos/Capitulo');

const listarLivros = (req, res) => {
    res.send(Livro.listar());
}

const inserirLivros = (req, res) => {
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
}

const inserirCapa = (req, res) => {

    let livro = Livro.consultar(req.params.id);
    livro.capa = `http://localhost:3000/uploads/${req.file.filename}`;
    livro.salvar();

    res.status(200).send(livro);
}

const alterarLivros = (req, res) => {
    let livro = Livro.consultar(req.params.id).assign(req.body);
    livro.salvar()
    res.send(livro);
}

const excluirLivros = (req, res) => {
    Livro.consultar(req.params.id).excluir();
    res.status(200).send('OK');
}

const listarCapitulos = (req, res) => {
    res.send(Livro.consultar(req.params.id).capitulos);
}

const consultarLivro = (req, res) => {
    res.send(Livro.consultar(req.params.id));
}

const excluirCapitulo = (req, res) => {
    Capitulo.consultar(req.params.capitulo_id).excluir();
    res.status(200).send('OK');
}

module.exports = { listarLivros, inserirLivros, alterarLivros, excluirLivros, inserirCapa, listarCapitulos, consultarLivro, excluirCapitulo }