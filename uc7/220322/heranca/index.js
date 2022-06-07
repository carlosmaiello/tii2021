const Cliente = require("./modelos/Cliente");
const Fornecedor = require("./modelos/Fornecedor");
const Pessoa = require("./modelos/Pessoa");


var p1 = new Pessoa("Carlos", "Maiello");
p1.documento = "123.123.123-3"

var c1 = new Cliente("Carlos", "Maiello");
c1.limiteDeCredito = 1000;
c1.documento = "312.321.312-1";

var f1 = new Fornecedor("Teste", "Teste");
f1.prazoDePagamento = 20;