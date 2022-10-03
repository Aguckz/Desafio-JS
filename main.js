function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 289;
    if (document.getElementById("usd").checked){
        resultado = valore * dolar;
        alert("El cambio de monedas es: $" + resultado);
    }
    else{
        alert("Completa los campos requeridos")
    }
}