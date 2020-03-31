

function obrir(){

    document.getElementsByTagName("img")[0].onmouseover = function(){init()};
    document.getElementsByTagName("img")[0].onmouseout = function(){mouseOut()};

    // 1 - RECOLLIM LA POSICIÓ DE LA P
    var posicioSpan = document.getElementsByTagName("span")[0];

    // 2 - IMPRIMIM EL FET
    var frase = "ATURAT";
    var fet = document.createTextNode(frase);
    posicioSpan.appendChild(fet);


    var numeroImatge = 1;

    var interval;

    function init() {
        // 0 - RECOLLIM LA POSICIÓ DE LA P
        var posicioSpan = document.getElementsByTagName("span")[0];

        // 1 - IMPRIMIM EL FET
        var frase = "FUNCIONANT";
        var fet = document.createTextNode(frase);
        posicioSpan.replaceChild(fet, posicioSpan.childNodes[0]);

        interval = setInterval(mouseOver, 3000)
    }


    function mouseOver() {
        
        // 1 - RECOLLIM LA POSICIÓ DE LA IMG
        var img = document.getElementsByTagName("img")[0];

        // 2 - CANVIEM LA IMATGE EN EL SRC DE LA IMG
        numeroImatge ++;
        if (numeroImatge == 7){

            numeroImatge = 1;
        }

        img.setAttribute("src", "img/imatge0" + numeroImatge + ".jpg");
    }

    function mouseOut() {

        // 0 - ATUREM EL setInterval();
        clearInterval(interval);

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