
function obrir(){

    // 1 - PER CADA COP QUE ESCRIGUIN ALGUNA COSA EN EL INPUT CRIDI LA FUNCIÓ
    var inputPeli = document.getElementById("peli");
    inputPeli.addEventListener('keypress', comprovarPeli);

    

    function comprovarPeli(){

        console.log("Comprovant la Pel·licula");
    
        var peticio = new XMLHttpRequest();
        var peli = document.getElementById("peli").value;
        var url = "validarDades.php?peli=" + peli;

        
        peticio.open("GET", url, true);


        peticio.onreadystatechange = function (){

            if(peticio.readyState == 4){
                
                if (peticio.status == 200){

                    

                    if (peticio.responseText != "1"){

                        var posicioResposta = document.getElementById("resultatPelis");
                        posicioResposta.innerHTML = peticio.responseText;
                    }
                    else{

                        console.log("La pel·licula no existeix");
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