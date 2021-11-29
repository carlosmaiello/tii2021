const prompt = require('prompt-sync')();

console.log('Cálculo de Ração');

// Entrada
var pesoSaco = prompt('Informe o peso do Saco de Ração (KG): ');
var qtRacaoGato = prompt('Informe a quantidade de ração consumida por dia (gramas): ');

// Processamento
var consumo5Dias = qtRacaoGato * 2 * 5; //valor em gramas
var sobraApos5Dias = (pesoSaco * 1000) - consumo5Dias;

// Saída
console.log('Seus gatos consomem ', consumo5Dias, ' gramas em 5 dias.')
console.log('Após 5 dias sobrará ', sobraApos5Dias, ' gramas ou ', sobraApos5Dias/1000, ' kgs.');






