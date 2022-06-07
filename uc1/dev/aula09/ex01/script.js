 function verificar() {
    var num = document.getElementById("numero").value;
    var resto = num % 2;

    if (resto == 0) {
        document.getElementById('resultado').innerHTML = "Este número é PAR";
    }
    else {
        document.getElementById('resultado').innerHTML = "Este número é ÍMPAR";
    }
}