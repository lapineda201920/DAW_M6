

function obrir(){

    var button01 = document.getElementById("mespetit");
    button01.addEventListener("click", function(){

        console.log("-------------MÉS_PETIT---------------");

        // 0 - OBTENIM LES DADES
        var pPrimer = document.getElementsByTagName("p")[0].style.fontSize;
        var pSegon = document.getElementsByTagName("p")[1].style.fontSize;

        console.log("FontSize 1r p: " + pPrimer);
        console.log("FontSize 2n p: " + pSegon);
        console.log("------------------");

        if (pPrimer && pSegon){

            pPrimer = pPrimer.slice(0,-2);
            pPrimer = parseInt(pPrimer, 10);
            pSegon = pSegon.slice(0,-2);
            pSegon = parseInt(pSegon, 10);
        }
        else{

            pPrimer = 20;
            pSegon = 20;
        }
        

        console.log("Número FontSize 1r p: " + pPrimer);
        console.log("Número FontSize 2n p: " + pSegon);
        console.log("------------------");

        pPrimer = pPrimer - 2;
        pPrimer = pPrimer.toString();
        pPrimer = pPrimer + "px";

        pSegon = pSegon - 2;
        pSegon = pSegon.toString();
        pSegon = pSegon + "px";

        console.log("Surt FontSize 1r p: " + pPrimer);
        console.log("Surt FontSize 2n p: " + pSegon);
        console.log("------------------");


        // 1 - AGAFEM LA POSICCIÓ I HO IMPRIMIM AL HTML
        document.getElementsByTagName("p")[0].style.fontSize = pPrimer;
        document.getElementsByTagName("p")[1].style.fontSize = pSegon;
  
    });

    var button02 = document.getElementById("mesgran");
    button02.addEventListener("click", function(){

        console.log("-------------MÉS_GRAN---------------");

        // 0 - OBTENIM LES DADES
        var pPrimer = document.getElementsByTagName("p")[0].style.fontSize;
        var pSegon = document.getElementsByTagName("p")[1].style.fontSize;

        console.log("FontSize 1r p: " + pPrimer);
        console.log("FontSize 2n p: " + pSegon);
        console.log("------------------");

        if (pPrimer && pSegon){

            pPrimer = pPrimer.slice(0,-2);
            pPrimer = parseInt(pPrimer, 10);
            pSegon = pSegon.slice(0,-2);
            pSegon = parseInt(pSegon, 10);
        }
        else{

            pPrimer = 20;
            pSegon = 20;
        }
        

        console.log("Número FontSize 1r p: " + pPrimer);
        console.log("Número FontSize 2n p: " + pSegon);
        console.log("------------------");

        pPrimer = pPrimer + 2;
        pPrimer = pPrimer.toString();
        pPrimer = pPrimer + "px";

        pSegon = pSegon + 2;
        pSegon = pSegon.toString();
        pSegon = pSegon + "px";

        console.log("Surt FontSize 1r p: " + pPrimer);
        console.log("Surt FontSize 2n p: " + pSegon);
        console.log("------------------");


        // 1 - AGAFEM LA POSICCIÓ I HO IMPRIMIM AL HTML
        document.getElementsByTagName("p")[0].style.fontSize = pPrimer;
        document.getElementsByTagName("p")[1].style.fontSize = pSegon;    
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;