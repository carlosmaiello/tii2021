const express = require('express');
const bodyParser = require('body-parser');
const { join } = require('path');
const Modelo = require('./framework/Modelo');
const receitas = require('./rotas/receitas');

const PORT = 3000;

Modelo.dir = join(__dirname, '..', 'dados');

const app = express();
app.use(bodyParser.json());

app.use('/receitas', receitas);

app.get('/', (req, res) => {
    res.send('API Receitas v0.1');
})


app.listen(PORT, () => {
    console.log(`O servidor iniciou na porta ${PORT}`);
})