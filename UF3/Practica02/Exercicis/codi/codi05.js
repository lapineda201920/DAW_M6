

function obrir(){

    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var nombreOriginal = document.getElementsByTagName("input")[0].value;
        var nombre = nombreOriginal;
        var missatge = "";
        var missatgeContador = "";
        var contador = 0;

        while (nombre >= 500){
            nombre = nombre - 500;
            missatge = missatge + "500+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" bitllet de 500€";
        }
        

        contador = 0;
        while (nombre >= 200){
            nombre = nombre - 200;
            missatge = missatge + "200+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" bitllet de 200€";
        }
        

        contador = 0;
        while (nombre >= 100){
            nombre = nombre - 100;
            missatge = missatge + "100+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" bitllet de 100€";
        }
        

        contador = 0;
        while (nombre >= 50){
            nombre = nombre - 50;
            missatge = missatge + "50+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" bitllet de 50€";
        }
        

        contador = 0;
        while (nombre >= 20){
            nombre = nombre - 20;
            missatge = missatge + "20+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" bitllet de 20€";
        }
        

        contador = 0;
        while (nombre >= 10){
            nombre = nombre - 10;
            missatge = missatge + "10+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" bitllet de 10€";
        }
        

        contador = 0;
        while (nombre >= 5){
            nombre = nombre - 5;
            missatge = missatge + "5+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" bitllet de 5€";
        }
        

        contador = 0;
        while (nombre >= 2){
            nombre = nombre - 2;
            missatge = missatge + "2+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda de 2€";
        }
        

        contador = 0;
        while (nombre >= 1){
            nombre = nombre - 1;
            missatge = missatge + "1+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda d'1'€";
        }
        

        contador = 0;
        while (nombre >= 0.5){
            nombre = nombre - 0.5;
            missatge = missatge + "0.5+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda de 0'50€";
        }
        

        contador = 0;
        while (nombre >= 0.2){
            nombre = nombre - 0.2;
            missatge = missatge + "0.2+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda de 0'20€";
        }
        

        contador = 0;
        while (nombre >= 0.1){
            nombre = nombre - 0.1;
            missatge = missatge + "0.1+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda de 0'10€";
        }
        

        contador = 0;
        while (nombre >= 0.05){
            nombre = nombre - 0.05;
            missatge = missatge + "0.05+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda de 0'05€";
        }
        

        contador = 0;
        while (nombre >= 0.02){
            nombre = nombre - 0.02;
            missatge = missatge + "0.02+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda de 0'02€";
        }
        

        contador = 0;
        while (nombre >= 0.01){
            nombre = nombre - 0.01;
            missatge = missatge + "0.01+";
            contador++;
        }
        if (contador != 0){
            missatgeContador = missatgeContador + "\n"+contador+" moneda de 0'01€";
        }

        missatge = missatge.slice(0,-1)
        missatge = missatge + " = "+nombreOriginal+"€";
        

        // 2 - AGAFEM LA POSICCIÓ
        var posicio = document.getElementsByTagName("p")[0];
        var posicioContador = document.getElementsByTagName("h5")[0];


        // 3 - HO IMPRIMIM AL HTML
        var missatgeNode = document.createTextNode(missatge);
        posicio.appendChild(missatgeNode);

        var missatgeContadorNode = document.createTextNode(missatgeContador);
        posicioContador.appendChild(missatgeContadorNode);
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;