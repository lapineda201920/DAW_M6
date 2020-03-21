

function obrir(){

    //objRange.addEventListener("input", function(){output.value = this.value;}, false);

    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){

        // ARRAY COLORS
        var arryColors = [
            "red", "cyan", "gold", "magenta", "green", "blue", 
            "orange", "coral", "darkcyan", "greenyellow", "lime", 
            "olive", "peru", "salmon", "violet", "silver"
        ];


        // 1 - RECOLLIM QUANTS RECTANGLES L'USUARI VOL DIBUIXAR
        var numeroRectangles = document.getElementsByTagName("input")[0].value;
        console.log("Número Rectangles: " + numeroRectangles);

        // 2 - PER A CADA RECTANGLE
        for (var i = 0; i < numeroRectangles; i++){
            
            console.log(" ");
            console.log("----- Rectangle nº " + (i + 1) + " -----");

            // 2.1 CREEM EL SEU WIDHT I HEIGHT
            var widthAleatori = Math.floor((Math.random() * 300) + 5);
            widthAleatori = widthAleatori.toString();
            widthAleatori = widthAleatori + "px";

            var heigthAleatori = Math.floor((Math.random() * 300) + 5);
            heigthAleatori = heigthAleatori.toString();
            heigthAleatori = heigthAleatori + "px";

            console.log("---------> Width: " + widthAleatori);
            console.log("---------> Heigth: " + heigthAleatori);




            // 2.2 LI DIEM LA POSICIÓ ON ES DIBUIXARÀ
            var posicioXAleatori = Math.floor((Math.random() * 500) + 5);
            posicioXAleatori = posicioXAleatori.toString();
            posicioXAleatori = posicioXAleatori + "px";

            var posicioYAleatori = Math.floor((Math.random() * 500) + 5);
            posicioYAleatori = posicioYAleatori.toString();
            posicioYAleatori = posicioYAleatori + "px";

            console.log("---------> X: " + posicioXAleatori);
            console.log("---------> Y: " + posicioYAleatori);




            // 2.3 SELECCIONEM UN COLOR DE FONS DE MANERA ALEATORIA
            var colorAleatori = Math.floor((Math.random() * 15) + 1);


            // 2.4 LI APLIQUEM EL COLOR AL RECTANGLE
            var color = arryColors[colorAleatori];
            console.log("---------> Color: " + color);


            // 2.5 EL DIBUIXEM A LA PANTALLA
            var div = document.createElement("div");
            div.style.width = widthAleatori;
            div.style.height = heigthAleatori;
            div.style.backgroundColor = color;
            div.style.position = "absolute";
            div.style.left = posicioXAleatori;
            div.style.top = posicioYAleatori;
            div.style.opacity = "0.9";
            
            document.body.appendChild(div);
        }
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;