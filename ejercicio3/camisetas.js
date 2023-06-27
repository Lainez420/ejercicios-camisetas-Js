function verificarCantidad(){
    let number =parseFloat(document.getElementById("numberInput").value)
    let resultElement = document.getElementById("resultado")


    if (number >= 5){
        resultElement.textContent = "Tu metodo de pago es tarjeta"
    }
    else{
        resultElement.textContent = "Tu metodo de pago es efectivo"
    }
}