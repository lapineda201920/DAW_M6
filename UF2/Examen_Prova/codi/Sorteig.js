class Sorteig {

    // CONSTRUCTOR
    constructor(arrayPremis){

        this._array_numeros_loteria = this.creaAleatoriament();
    }


    // MÈTODES

    creaAleatoriament(){

        var array_numeros_loteria = [];

        while (array_numeros_loteria.length != 6){

            // 1r - Creem un número aleatori
            var numero_aleatori = Math.floor(Math.random() * (50 - 1)) + 1;

            // 2n - Comprovem si realment ja existeix en el array, en cas contrari, l'inserim
            if (array_numeros_loteria.includes(numero_aleatori) == false){

                array_numeros_loteria.push(numero_aleatori);

                // 2nA - Si és un dels 6 primers números, ordenem l'array
                
                if (array_numeros_loteria.length <= 6){

                    function comparar ( a, b ){ 
                        return a - b; 
                    }

                    array_numeros_loteria.sort(comparar);
                }
            }
        }

        return array_numeros_loteria;
    }

    // --> RETORNA UN STRING AMB ELS NÚMEROS SEPERATS PER COMES
    dibuixa(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.

        var resultat = "Sorteig: "+this._array_numeros_loteria.toString();
        return document.getElementById("sorteig").innerHTML = resultat;
    }

    // --> INDICA SI ÉS GUANYADORA O NO
    comprovarAposta(numeroAposta, arrayAposta){

        var resultat = "SÍ";

        if(JSON.stringify(this._array_numeros_loteria)!=JSON.stringify(arrayAposta)){

            resultat = "NO";
        }

            
        return document.getElementById("comprovacions").innerHTML += "La aposta"+numeroAposta+" "+resultat+" sigut premiada<br/>";
    }
}

