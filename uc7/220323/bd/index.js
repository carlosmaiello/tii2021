const Modelo = require("./framework/Modelo");
const Cliente = require("./modelos/Cliente");
const Produto = require("./modelos/Produto");

const { join } = require('path');

Modelo.dir = join(__dirname, 'dados');


/*
var p1 = new Produto();
p1.nome = "Produto 1";
p1.valor = 10;
p1.salvar();

var p2 = new Produto();
p2.nome = "Produto 2";
p2.valor = 20;
p2.salvar();

var c1 = new Cliente();
c1.nome = "Cliente 1";
c1.documento = "123";
c1.salvar();
*/

// console.log(Cliente.listar());
// console.log(Produto.listar());

console.log("ANTES:", Produto.consultar(2));

let p = new Produto();
p.assign(Produto.consultar(2));
p.excluir();


console.log("DEPOIS:", Produto.consultar(2));
