function pintar()
{
    return "hola";
}


function sumar(a,b)
{
    return a+b;
}

function procesar()
{
    console.log("Ha conseguido pulsar el boton")
    var dato=document.getElementById("nom-for").value
    document.getElementById("nombre").innerHTML=dato

}

var x=10
var z=20
var resultado=sumar(x,z)
document.getElementById("nombre").innerHTML=pintar()
document.getElementById("apellidos").innerHTML=resultado
document.write(pintar())
document.write(resultado)