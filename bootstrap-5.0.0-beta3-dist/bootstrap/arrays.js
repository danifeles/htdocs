var x=10
var z=20
document.write(x)
document.write(x+z)
var array1=[1, 90, 10]
document.write(array1)
document.write(array1[0])
var personas=new Array("Pedro", "Antonio", "Rosa")
document.writeln(personas)
document.getElementById("alert1").innerHTML=array1
document.getElementById("alert2").innerHTML=personas
document.getElementById("alert3").innerHTML=personas[1]

function parimpar()
{
    var dato=document.getElementById("num1").value
    var numero1=parseInt(dato);
    if(numero1 % 2 == 0)
    {
    document.getElementById("resultado1").innerHTML="par"
    } else
    {
    document.getElementById("resultado1").innerHTML="impar"
    }
}


var correcto=true
var num1=10
var num2=90.10

document.writeln(10==10)
document.writeln(10>10)