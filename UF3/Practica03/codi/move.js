

function obrir(){

  var numeroImatge = 1;

  setInterval(function(){
  
    // 1 - RECOLLIM LA POSICIÓ DE LA IMG I DE LA GALETA
    var img = document.getElementsByTagName("img")[0];
    var galeta = document.getElementsByTagName("img")[1];

    // 2 - CANVIEM LA IMATGE EN EL SRC DE LA IMG I DE GALETA
    numeroImatge ++;
    if (numeroImatge == 7){
      
      numeroImatge = 1;
    }

    img.setAttribute("src", "fotos/nadal" + numeroImatge + ".jpg");
    galeta.setAttribute("src", "imatges/galeta" + numeroImatge + ".png");
  }, 3000);

}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;