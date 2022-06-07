const prompt = require('prompt-sync')();
const { Usuario } = require('./modelos');


console.log('CADASTRO DE USUÁRIOS =-=-=-=-');
var nome = prompt('Nome: ');
var email = prompt('E-mail: ');
var senha = prompt('Senha: ');
var logradouro = prompt('Logradouro: ');
var numero = prompt('Número: ');
var cep = prompt('Cep: ');
var bairro = prompt('Bairro: ');
var cidade = prompt('Cidade: ');
var estado = prompt('Estado: ');

var usuario = new Usuario(nome, email, senha);
usuario.setEndereco(logradouro, numero, cep, bairro, cidade, estado);

console.log(usuario);

console.log(usuario.endereco.logradouro);