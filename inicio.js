function entrar() {
    var usuario = document.getElementById("usuario").value
    var contraseña = document.getElementById("contraseña").value
    var arr = JSON.parse(localStorage.getItem(usuario));
    if (localStorage.getItem(usuario)) {
        var valor = arr.usuario;
        if (valor == contraseña) {
            setTimeout(function () { document.location.href = "principal.html" }, 500);
        } else {
            alert("Contraseña equivocada")
        }
    } else {
        setTimeout(function () { document.location.href = "registro.html" }, 500);
    }
}

