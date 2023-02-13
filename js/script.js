// LÓGICA DE ENCRIPTACIÓN
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
        areaMostrada.innerHTML =    "<div id='wallpaper'></div>" +
                                    "<p class='pri-text'>Ningún mensaje fue encontrado</p>" +
                                    "<p class='sub-text'>Ingresa el texto que desees encriptar o desencriptar</p>";
    
    
    } else{
        areaMostrada.innerHTML =    "<p class='text'>" + textos + "</p>" +
                                    "<button class='copiar' onclick='copiar()'>Copiar</button>";
    
    }

    document.getElementById("input").value = "";   
}

function copiar(){
    navigator.clipboard.writeText(texto);
}

// TEMAS
const body = document.querySelector("body");
const header = document.querySelector("header");
const btn = document.querySelector("header div");

const ta = document.querySelector("main textarea");

function cambiarTema(){
    let tex = document.getElementById("input").value;

    body.classList.toggle("dark");
    header.classList.toggle("header-dark")
    btn.classList.toggle("botonT-dark");
    ta.classList.toggle("cajaEntrada-dark");
}