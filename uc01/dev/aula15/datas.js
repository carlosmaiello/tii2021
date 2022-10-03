
function data(d, m, a) {
    return `${d}/${m}/${a}`;
}

function validaData(dia, mes, ano) {
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        return false;
    }
    else {
        if (mes == 2) {
            if ((ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0))) {
                if (dia > 29) {
                    return false;
                }
                else {
                    return true;
                }
            }
            else if (dia > 28) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (
            ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && dia > 31) ||
            ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30)
        ) {
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = { data, validaData };