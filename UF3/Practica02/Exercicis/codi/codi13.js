

function obrir(){

    document.getElementsByTagName("img")[0].onmouseover = function(){mouseOver()};
    document.getElementsByTagName("img")[0].onmouseout = function(){mouseOut()};

    // 1 - RECOLLIM LA POSICIÓ DE LA P
    var posicioSpan = document.getElementsByTagName("span")[0];

    // 2 - IMPRIMIM EL FET
    var frase = "ATURAT";
    var fet = document.createTextNode(frase);
    posicioSpan.appendChild(fet);


    var numeroImatge = 1;

    function mouseOver() {
        
        // 1 - RECOLLIM LA POSICIÓ DE LA IMG
        var img = document.getElementsByTagName("img")[0];

        // 2 - CANVIEM LA IMATGE EN EL SRC DE LA IMG
        numeroImatge ++;
        if (numeroImatge == 7){

            numeroImatge = 1;
        }

        img.setAttribute("src", "img/imatge0" + numeroImatge + ".jpg");

        // 3 - RECOLLIM LA POSICIÓ DE LA P
        var posicioSpan = document.getElementsByTagName("span")[0];

        // 4 - IMPRIMIM EL FET
        var frase = "FUNCIONANT";
        var fet = document.createTextNode(frase);
        posicioSpan.replaceChild(fet, posicioSpan.childNodes[0]);

        /*while (!mouseOut){

            setTimeout(function () {

                mouseOver();
            }, 3000)
        }*/
        

    }

    function mouseOut() {

        // 1 - RECOLLIM LA POSICIÓ DE LA P
        var posicioSpan = document.getElementsByTagName("span")[0];

        // 2 - IMPRIMIM EL FET
        var frase = "ATURAT";
        var fet = document.createTextNode(frase);
        posicioSpan.replaceChild(fet, posicioSpan.childNodes[0]);
    }
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;