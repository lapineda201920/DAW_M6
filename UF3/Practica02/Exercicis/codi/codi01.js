

function exercici1(){
    // 0 - AGAFEM LA POSSICIÓ DEL BOTÓ I LI POSSEM UN EVENT
    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var text = "";

        var subj = document.getElementById("subjecte");
        text = text + subj.value;

        var verb = document.getElementById("verb");
        text = text + verb.value;

        var compl = document.getElementById("complement");
        text = text + compl.value;

        // 2 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementById("sortida");

        // 3 - HO IMPRIMIM AL HTML
        var textNode = document.createTextNode(text);
        posicio.appendChild(textNode);
    });

    var input = document.getElementsByTagName("input")[3];
    input.addEventListener("click", function(){

        // 1 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementById("sortida");

        // 2 - HO IMPRIMIM AL HTML
        posicio.removeChild(posicio.childNodes[0]);
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=exercici1;
    
