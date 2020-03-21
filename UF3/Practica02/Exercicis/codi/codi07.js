

function obrir(){

    var button = document.getElementsByTagName("div")[0];
    button.addEventListener("click", function(){

        // 0 - OBTENIM LES DADES
        var divBackground = document.getElementsByTagName("div")[0].style.backgroundColor;
        console.log(divBackground);

        var divWidth = document.getElementsByTagName("div")[0].style.width;
        divWidth = divWidth.slice(0,-2);
        divWidth = parseInt(divWidth, 10);

        console.log("Entra: " + divWidth);

        if (divWidth <= 50 && divBackground){

            divBackground = !divBackground;
            document.getElementsByTagName("div")[0].style.backgroundColor = "none";
        }

        if (divWidth < 500 && !divBackground){

            var quartdivWidth = divWidth / 4;
            divWidth = divWidth + quartdivWidth;
        }
        else{

            var quartdivWidth = divWidth / 4;
            divWidth = divWidth - quartdivWidth;
            document.getElementsByTagName("div")[0].style.backgroundColor = "blue";
        }
        console.log(divBackground);
        console.log("Surt: " + divWidth);
        divWidth = divWidth.toString();
        divWidth = divWidth + "px";
        console.log("------------------------");


        // 1 - AGAFEM LA POSICCIÓ I HO IMPRIMIM AL HTML
        document.getElementsByTagName("div")[0].style.width = divWidth;
        document.getElementsByTagName("div")[0].style.height = divWidth;

        var posicioResultat = document.getElementsByTagName("div")[0];
        var missatgeResultat = document.createTextNode(divWidth);
        posicioResultat.replaceChild(missatgeResultat, posicioResultat.childNodes[0]);    
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;