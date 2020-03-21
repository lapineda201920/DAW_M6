

function obrir(){

    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var nombre = document.getElementsByTagName("input")[0].value;
        var convertidor01 = document.getElementsByTagName("select")[0].value;
        var convertidor02 = document.getElementsByTagName("select")[1].value;

        if (convertidor01 == convertidor02){

            var missatge = "Valors iguals!";
        }
        else{

            if (convertidor01 == "kilograms"){

                var resultat = nombre * 2.2046;
                var missatge = nombre+" quilogrmas són, aproximadament, "+resultat+" lliures";
            }
            else{
    
                var resultat = nombre / 2.2046;
                var missatge = nombre+" lliures són, aproximadament, "+resultat+" quilogrmas";
            }
        }
        
        
        // 2 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementsByTagName("p")[0];
        posicio.removeChild(posicio.firstChild);


        // 3 - HO IMPRIMIM AL HTML
        var missatgeNode = document.createTextNode(missatge);
        posicio.appendChild(missatgeNode);
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;