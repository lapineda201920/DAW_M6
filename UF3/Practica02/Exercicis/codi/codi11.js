

function obrir(){

    document.getElementsByTagName("img")[0].onmouseover = function(){mouseOver()};
    document.getElementsByTagName("img")[0].onmouseout = function(){mouseOut()};

    function mouseOver() {

        // ARRAY FETS
        var fets = [
            "Chuck Norris va guanyar una cursa de fórmula 1 empenyent el cotxe.",
            "Chuck Norris no fa servir gasolina, orina al dipòsit.",
            "Chuck Norris agafa les corbes en línia recta.",
            "Chuck Norris va destruir la taula periòdica, perquè només reconeix l'element de sorpresa.",
            "El satèl·lit Meteosat no existeix, els meteoròlegs pregunten a Chuck Norris el temps que vol que faci.",
            "Chuck Norris no només té un xalet a la lluna, també té un al Sol.",
            "No hi ha bojos, sinó gent a la qual Chuck va mirar fixament als ulls.",
            "Chuck Norris no talla la gespa. Simplement li adverteix que si creix, es penedirà.",
            "Chuck Norris pot dibuixar un polígon amb 2 costats.",
            "Chuck Norris escriu codi que s'optimitza sol.",
            "Chuck Norris pot resoldre les Torres de Hanoi en un sol moviment",
            "Qualsevol que toqui la guitarra de Chuck Norris, morirà d'una puntada giratòria abans que pugui escoltar algun so.",
            "Chuck Norris va recórrer un bucle infinit.",
            "El temps en l'univers es regeix pel rellotge de Chuck Norris."
        ];


        // 1 - RECOLLIM LA POSICIÓ DE LA P
        var posicioP = document.getElementsByTagName("p")[0];

        // 2 - SELECCIONEM UN FET DE MANERA ALEATORIA
        var numerofetAleatori = Math.floor((Math.random() * 13) + 0);

        // 3 - SELECCIONEM UN FET DE MANERA ALEATORIA
        var fetAleatori = fets[numerofetAleatori];

        // 4 - IMPRIMIM EL FET
        var fet = document.createTextNode(fetAleatori);
        posicioP.replaceChild(fet, posicioP.childNodes[0]); 

    }

    function mouseOut() {

        // 1 - RECOLLIM LA POSICIÓ DE LA P
        var posicioP = document.getElementsByTagName("p")[0];

        // 2 - IMPRIMIM EL FET
        var frase = "Poseu el ratolí sobre la imatge";
        var fet = document.createTextNode(frase);
        posicioP.replaceChild(fet, posicioP.childNodes[0]);
    }
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;