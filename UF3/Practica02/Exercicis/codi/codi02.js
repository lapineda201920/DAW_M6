

function exercici2(){
    
    var button1 = document.getElementsByTagName("button")[0];
    button1.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    	var nombre = document.getElementsByTagName("input")[0].value;
    	var cub = "El cub de "+nombre+" és "+Math.pow(nombre, 3);

        // 2 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementById("sortida");

        // 3 - HO IMPRIMIM AL HTML
        var cubNode = document.createTextNode(cub);
        posicio.appendChild(cubNode);
    });

    var button2 = document.getElementsByTagName("button")[1];
    button2.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    	var nombre = document.getElementsByTagName("input")[1].value;
    	var invers = "El invers de "+nombre+" és "+1/nombre;

        // 2 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementById("sortida");

        // 3 - HO IMPRIMIM AL HTML
        var inversNode = document.createTextNode(invers);
        posicio.appendChild(inversNode);
    });

    var button3 = document.getElementsByTagName("button")[2];
    button3.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var nombre = document.getElementsByTagName("input")[2].value;
        var operacio = Math.pow(nombre, 2) * Math.PI;
    	var cub = "L'area del cercle del radi de "+nombre+" és "+operacio;

        // 2 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementById("sortida");

        // 3 - HO IMPRIMIM AL HTML
        var cubNode = document.createTextNode(cub);
        posicio.appendChild(cubNode);
    });

    var button4 = document.getElementsByTagName("button")[3];
    button4.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var nombre = document.getElementsByTagName("input")[3].value;
        var quantitat = document.getElementsByTagName("input")[4].value;
        var operacio = (nombre/quantitat)* 100;
    	var cub = "El tant per cent de "+nombre+" de la quantitat de "+quantitat+" és "+operacio;

        // 2 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementById("sortida");

        // 3 - HO IMPRIMIM AL HTML
        var cubNode = document.createTextNode(cub);
        posicio.appendChild(cubNode);
    });

    var input = document.getElementsByTagName("input")[5];
    input.addEventListener("click", function(){

        // 1 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementById("sortida");

        // 2 - HO IMPRIMIM AL HTML
        posicio.removeChild(posicio.childNodes[0]);
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=exercici2;