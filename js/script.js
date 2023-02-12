var texto;
var areaMostrada = document.getElementById("box");

function encriptar(){
    texto = document.getElementById("input").value;

    texto = texto.replaceAll("e", "enter");
    texto = texto.replaceAll("i", "imes");
    texto = texto.replaceAll("a", "ai");
    texto = texto.replaceAll("o", "ober");
    texto = texto.replaceAll("u", "ufat");

    incrustar(texto);
}

function desencriptar(){
    texto = document.getElementById("input").value;

    texto = texto.replaceAll("enter", "e");
    texto = texto.replaceAll("imes", "i");
    texto = texto.replaceAll("ai", "a");
    texto = texto.replaceAll("ober", "o");
    texto = texto.replaceAll("ufat", "u");

    incrustar(texto);
}

function incrustar(textos){
    if(textos == ""){
        areaMostrada.innerHTML = "<img src='/Primero/img/null.jpg' alt='Ningún mensaje fue encontrado' class='search'>" +
                                    "<p class='pri-text'>Ningún mensaje fue encontrado</p>" +
                                    "<p class='sub-text'>Ingresa el texto que desees encriptar o desencriptar</p>";
    } else{
        areaMostrada.innerHTML = "<p class='text'>" + textos + "</p>" +
                                "<button id='copiar' onclick='copiar()'>Copiar</button>";
    }

    document.getElementById("input").value = "";
}

function copiar(){
    navigator.clipboard.writeText(texto);
}