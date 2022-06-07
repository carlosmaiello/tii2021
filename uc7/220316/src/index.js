const { BandaEstilo, Banda, EventoTipo, Evento } = require("./src/modelosdelos");

var rock = new BandaEstilo("Rock");
var sertanejo = new BandaEstilo("Sertanejo");

var paralamas = new Banda(rock, 'Paralamas do Sucesso');
paralamas.setEndereco('Av. Nações Unidas', '123', '17100-000', 'Centro', 'Bauru', 'SP');

console.log("A banda", paralamas.nome, "é do estilo", paralamas.estilo.nome);

console.log(paralamas);

var tipos = [
    new EventoTipo('Barzinho'),
    new EventoTipo('Show'),
    new EventoTipo('Festival'),
    new EventoTipo('Exposição')
];

var evento = new Evento(tipos[2], 'Rock in Rio');
evento.addBanda(paralamas);