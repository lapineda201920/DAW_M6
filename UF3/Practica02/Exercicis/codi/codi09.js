

function obrir(){

    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){

        console.log("-------------AFEGIR---------------");

        // 0 - OBTENIM LES DADES
        var textarea = document.getElementsByTagName("textarea")[0].value;

        console.log("textarea: " + textarea);
        console.log("------------------");


        // 1 - AGAFEM LA POSICCIÓ
        var posicioDiv = document.getElementsByTagName("div")[0];
        var posicioTextArea = document.getElementsByTagName("textarea")[0];
        
        
        // 2 - HO IMPRIMIM AL HTML
        var missatge = document.createTextNode(textarea);
        posicioDiv.appendChild(missatge);

        // 3 - ELIMINEM EL TEXTAREA
        posicioTextArea.value = "";
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;