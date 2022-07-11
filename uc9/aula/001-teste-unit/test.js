const { aplicarDesconto } = require("./index.js");

function testarAplicarDesconto() {
    return aplicarDesconto(100,10) === 90;
}

console.log("Aplicando desconto de R$10 em R$100?")
console.log(testarAplicarDesconto());


function testarAplicarDescontoMaiorQueOValor() {
    return aplicarDesconto(100, 110) === 0;
}

console.log("Aplicando desconto maior que o valor?")
console.log(testarAplicarDescontoMaiorQueOValor());
