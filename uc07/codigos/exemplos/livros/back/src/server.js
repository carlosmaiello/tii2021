const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {join} = require('path')
const Modelo = require('./framework/Modelo')

const usuarios = require('./rotas/usuarioRotas')
const livros = require('./rotas/livroRotas')
const autores = require('./rotas/autorRotas')

const port = 3000

Modelo.dir = join(__dirname, '..', 'dados')

const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('API v1.0');
});

app.use('/usuarios', usuarios);
app.use('/autores', autores);
app.use('/livros', livros);


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})