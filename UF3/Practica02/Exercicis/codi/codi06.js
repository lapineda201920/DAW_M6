

function obrir(){

    var button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", function(){

        // 0 - OBTENIM LES DADES
        var pizzaPetita = document.getElementsByTagName("input")[0].value;
        var pizzaMitjana = document.getElementsByTagName("input")[1].value;
        var pizzaGran = document.getElementsByTagName("input")[2].value;

        var propina = 0;
        var propina1 = document.getElementsByName("propina")[0].checked;
        var propina2 = document.getElementsByName("propina")[1].checked;
        var propina3 = document.getElementsByName("propina")[2].checked;

        if (propina1 == true){

            propina = 10;
        }
        if(propina2 == true){

            propina = 15;
        }
        if(propina3 == true){

            propina = 20;
        }
        
        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var resultatPizzaPetita = pizzaPetita * 8.99;
        var resultatPizzaMitjana = pizzaMitjana * 10.99;
        var resultatPizzaGran = pizzaGran * 12.99;


        var resultatSumaPizzes = resultatPizzaPetita + resultatPizzaMitjana + resultatPizzaGran;
        resultatSumaPizzes = Math.round((resultatSumaPizzes + Number.EPSILON) * 100) / 100;

        var resultatImpostos = resultatSumaPizzes * 9 / 100;
        resultatImpostos = Math.round((resultatImpostos + Number.EPSILON) * 100) / 100;
        
        var resultatTotalSumaPizzes = resultatSumaPizzes + resultatImpostos;
        resultatTotalSumaPizzes = Math.round((resultatTotalSumaPizzes + Number.EPSILON) * 100) / 100;
        
        var resultatPropina = resultatTotalSumaPizzes / propina;
        resultatPropina = Math.round((resultatPropina + Number.EPSILON) * 100) / 100;

        var resultatTotal = resultatTotalSumaPizzes + resultatPropina;
        resultatTotal = Math.round((resultatTotal + Number.EPSILON) * 100) / 100;


        // 2 - AGAFEM LA POSICCIÓ
        var posicioResultatSumaPizzes = document.getElementsByTagName("span")[3];
        var posicioResultatImpostos = document.getElementsByTagName("span")[4];
        var posicioResultatTotalSumaPizzes = document.getElementsByTagName("span")[5];

        var posicioResultatPropina = document.getElementsByTagName("span")[6];
        var posicioResultatTotal = document.getElementsByTagName("span")[7];


        // 3 - HO IMPRIMIM AL HTML
        var missatgeResultatSumaPizzes = document.createTextNode(resultatSumaPizzes);
        posicioResultatSumaPizzes.replaceChild(missatgeResultatSumaPizzes, posicioResultatSumaPizzes.childNodes[0]);

        var missatgeResultatImpostos = document.createTextNode(resultatImpostos);
        posicioResultatImpostos.replaceChild(missatgeResultatImpostos, posicioResultatImpostos.childNodes[0]);

        var missatgeResultatTotalSumaPizzes = document.createTextNode(resultatTotalSumaPizzes);
        posicioResultatTotalSumaPizzes.replaceChild(missatgeResultatTotalSumaPizzes, posicioResultatTotalSumaPizzes.childNodes[0]);

        var missatgeResultatPropina = document.createTextNode(resultatPropina);
        posicioResultatPropina.replaceChild(missatgeResultatPropina, posicioResultatPropina.childNodes[0]);

        var missatgeResultatTotal = document.createTextNode(resultatTotal);
        posicioResultatTotal.replaceChild(missatgeResultatTotal, posicioResultatTotal.childNodes[0]);
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;