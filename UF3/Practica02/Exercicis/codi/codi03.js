

function obrir(){

    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var pes = document.getElementsByTagName("input")[0].value;
        var alcada = document.getElementsByTagName("input")[1].value;

        var calcul = pes / Math.pow(alcada, 2);

        if (calcul < 18){

            var resultatTipo = "magror";
        }
        if (calcul >= 18 && calcul <= 25){
            
            var resultatTipo = "coruplència normal";
        }
        if (calcul >= 25 && calcul <= 30){
            
            var resultatTipo = "sobrepès";
        }
        if (calcul >= 30 && calcul <= 40){
            
            var resultatTipo = "obesitat";
        }
        if (calcul > 40){
            
            var resultatTipo = "obesitat mòrbida";
        }
        

        // 2 - AGAFEM LA POSICCIÓ
        var posicioImc = document.getElementsByTagName("span")[0];
        var posicioTipos = document.getElementsByTagName("span")[1];

        // 3 - HO IMPRIMIM AL HTML
        var imcNode = document.createTextNode(calcul);
        posicioImc.appendChild(imcNode);

        var tipoNode = document.createTextNode(resultatTipo);
        posicioTipos.appendChild(tipoNode);
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;