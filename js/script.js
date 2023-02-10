/*
function encriptar(palabra){
    let arr = Array.from(palabra);

    for(let l = 0; l < arr.lenght(); l++){
        if(arr[l] == "e"){
            arr[l] = "enter";
        } else if(arr[l] == "i"){
            arr[l] = "imes";
        } else if(arr[l] == "a"){
            arr[l] = "ai";
        } else if(arr[l] == "o"){
            arr[l] = "ober";
        } else if(arr[l] == "u"){
            arr[l] = "ufat";
        }
    }

    return palabra;
}
*/

function seleccionar(){
    var texto = document.getElementById("input").value;
    var areaMostrada = document.getElementById("box");

    if(texto == ""){
        areaMostrada.innerHTML = "<img src='/Primero/img/null.jpg' alt='Ningún mensaje fue encontrado' class='search'>" +
                                    "<p class='pri-text'>Ningún mensaje fue encontrado</p>" +
                                    "<p class='sub-text'>Ingresa el texto que desees encriptar o desencriptar</p>";
    } else{
        areaMostrada.innerHTML = texto;
    }
}
