const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const usuarios = require('./rotas/usuarioRotas');

const app = new express();
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Segunda API em NodeJS + Express');
});

app.use('/usuarios', usuarios);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})
