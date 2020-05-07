
function obrir(){

    // 1 - PER CADA COP QUE ESCRIGUIN ALGUNA COSA EN EL INPUT CRIDI LA FUNCIÓ
    var inputDNI = document.getElementById("dni");
    inputDNI.addEventListener('blur', comprovarDNI);

    

    function comprovarDNI(){

        console.log("Comprovant el DNI");
    
        var peticio = new XMLHttpRequest();
        var dni = document.getElementById("dni").value;
        var url = "validarDades.php?dni=" + dni;

        
        peticio.open("GET", url, true);


        peticio.onreadystatechange = function (){

            if(peticio.readyState == 4){
                
                if (peticio.status == 200){

                    var posicioResposta = document.getElementById("resposta");

                    if (peticio.responseText == "0"){

                        // BOTÓ VERD
                        console.log("El DNI existeix");
                        posicioResposta.src="img/positiu.png";
                    }
                    else{

                        // BOTÓ VERMELL
                        console.log("El DNI no existeix");
                        posicioResposta.src="img/negatiu.png";
                    }
                }
                else{

                    alert ("El servidor retorna un codi d'estat: " + peticio.status);
                }
            }
        }
        
        peticio.send(null);
    }
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload= obrir;