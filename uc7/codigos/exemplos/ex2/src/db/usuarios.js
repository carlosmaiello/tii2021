const fs = require('fs');
const { join } = require('path');

const filePath = join(__dirname, '..', '..', 'arquivos', 'usuarios.json');

module.exports = {
    todos: () => {
        let dados = fs.existsSync(filePath) ? fs.readFileSync(filePath) : '[]';
        return JSON.parse(dados);
    },
    salvar: (usuarios) => {
        fs.writeFileSync(filePath, JSON.stringify(usuarios));
    }
}