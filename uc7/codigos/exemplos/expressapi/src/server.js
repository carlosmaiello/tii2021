const express = require('express');
const fs = require('fs');
const { join } = require('path');
const bodyParser = require('body-parser');

const fileName = join(__dirname, '..', 'json', 'usuarios.json');

const getUsuarios = () => {
    const dados = fs.existsSync(fileName) ?
        fs.readFileSync(fileName) :
        '[]';

    return JSON.parse(dados);
}

const salvarUsuarios = (usuarios) => fs.writeFileSync(fileName, JSON.stringify(usuarios), null, '\t');


const app = new express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send(getUsuarios());
});

app.post('/', (req, res) => {
    var usuarios = getUsuarios();
    usuarios.push(req.body);
    salvarUsuarios(usuarios);

    res.status(200).send('OK');
})

app.listen(3000, function () {
    console.log('Servidor iniciado na porta 3000');
});