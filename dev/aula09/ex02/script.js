
function verificar() {
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;

    if (num1 > num2) {
        document.getElementById('resultado').innerHTML = `O valor ${num1} é maior que o valor ${num2}`;
    }
    else if (num2 > num1) {
        document.getElementById('resultado').innerHTML = `O valor ${num2} é maior que o valor ${num1}`;
    }
    else {
        document.getElementById('resultado').innerHTML = `Os valores são iguais`;
    }
    
}