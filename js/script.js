var texto;
var areaMostrada = document.getElementById("box");

function encriptar(){
    texto = document.getElementById("input").value;

    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "ines");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");

    incrustar(texto);
}

function desencriptar(){
    texto = document.getElementById("input").value;

    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("ines", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");

    incrustar(texto);
}

function incrustar(texto){
    if(texto == ""){
        areaMostrada.innerHTML = "<img src='/Primero/img/null.jpg' alt='Ningún mensaje fue encontrado' class='search'>" +
                                    "<p class='pri-text'>Ningún mensaje fue encontrado</p>" +
                                    "<p class='sub-text'>Ingresa el texto que desees encriptar o desencriptar</p>";
    } else{
        areaMostrada.innerHTML = texto +
                                    "<button class='copiar' onclick='copiar()'>Copiar</button>";
    }

    texto = "";
}
/*
function copiar(texto){
    // Crea un campo de texto "oculto"
    var aux = document.createElement("oculto");

    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);

    // Añade el campo a la página
    document.body.appendChild(aux);

    // Selecciona el contenido del campo
    aux.select();

    // Copia el texto seleccionado
    document.execCommand("copy");

    // Elimina el campo de la página
    document.body.removeChild(aux);
}
*/