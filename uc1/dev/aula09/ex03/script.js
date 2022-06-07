function estacao() {
    var mes = document.getElementById('mes').value;
    var estacao = "";

    mes = mes.toUpperCase();

    if (mes == "JANEIRO" || mes == "FEVEREIRO" || mes == "MARÇO") {
        estacao = "VERÃO";
    }
    else if (mes == "ABRIL" || mes == "MAIO" || mes == "JUNHO") {
        estacao = "OUTONO";
    }
    else if (mes == "JULHO" || mes == "AGOSTO" || mes == "SETEMBRO") {
        estacao = "INVERNO";
    }
    else if (mes == "OUTUBRO" || mes == "NOVEMBRO" || mes == "DEZEMBRO") {
        estacao = "PRIMAVERA";
    }
    else {
        alert('Mês inválido!');
    }

    document.getElementById('resultado').innerHTML = estacao;
}
