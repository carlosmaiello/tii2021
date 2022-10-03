const prompt = require('prompt-sync')();


var dia = +prompt('Digite o dia: ');
var mes = +prompt('Digite o mês: ');
var ano = +prompt('Digite o ano: ');


if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
    console.log('Data INVÁLIDA!');
}
else {
    if (mes == 2) {
        if ((ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0))) {
            if (dia > 29) {
                console.log('Data INVÁLIDA!');
            }
            else {
                console.log('Data VÁLIDA!');
            }
        }
        else if (dia > 28) {
            console.log('Data INVÁLIDA!');
        }
        else {
            console.log('Data VÁLIDA!');
        }
    }
    else if (
        ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia > 31) ||
        ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30)
    ) {
        console.log('Data INVÁLIDA!');
    }
    else {
        console.log('Data VÁLIDA!');
    }
}


