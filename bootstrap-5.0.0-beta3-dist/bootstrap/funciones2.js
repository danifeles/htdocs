
function sumar(){

    var numero1=document.getElementById("num1").value
    var numero2=document.getElementById("num2").value

    var numero1_valido=parseInt(numero1);
    var numero2_valido=parseInt(numero2);
    var resultado = numero1_valido+numero2_valido

    document.getElementById("resultado1").innerHTML= resultado

    
}

