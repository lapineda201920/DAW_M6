

function obrir(){

    // 1 - DIBUIXEM ELS QUADRATS EN LA IMATGE
    var widthHeigthcaixa = "50px";

    for (var i = 0; i < 100; i++){

        var div = document.createElement("div");
        div.setAttribute("onmouseover", "visible(" + (i + 1) + ")");
        div.setAttribute("id", "caixa" + (i + 1) );
        div.style.width = widthHeigthcaixa;
        div.style.height = widthHeigthcaixa;
        div.style.backgroundColor = "black";

        document.getElementById("contenidor").appendChild(div);
    }

    
   
}

var contador = 0;

function visible(numero) {

    console.log("Caixa nº" + numero + " passa de bloquejat a desbloquejat!");

    var posicio = document.getElementById("caixa" + numero);

    posicio.style.backgroundColor = "transparent";

    posicio.onmouseover = function(){};

    contador++;

    if (contador == 100){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var frase = "La nit estelada d’en Vincent van Gogh";

        // 2 - AGAFEM LA POSICCIÓ
        var posicioFraseP = document.getElementsByTagName("p")[0];

        // 3 - HO IMPRIMIM AL HTML
        var fraseResultat = document.createTextNode(frase);
        posicioFraseP.appendChild(fraseResultat);
    }
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;