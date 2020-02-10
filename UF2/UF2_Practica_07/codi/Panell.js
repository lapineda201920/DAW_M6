class Panell {

    // CONSTRUCTOR
    constructor(arrayPremis){


        this._arrayPremis = this.ordenarAleatoriament(arrayPremis);
    }


    // MÈTODES

    // --> ORDANEM ALEATORIAMENT ELS PREMIS
    ordenarAleatoriament(arrayPremis){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.

        return arrayPremis.sort(function(){return Math.random() - 0.5});
    }

    obtenirPremi(numeroPremi){

        var resultat = this._arrayPremis[numeroPremi]._descripcio+", "+this._arrayPremis[numeroPremi]._nom+" valorat en "+this._arrayPremis[numeroPremi]._valor+"€<br/> <img src='"+this._arrayPremis[numeroPremi]._imatge+"' alt='Premi' height='200' width='200'> ";
        
        return resultat;
    }
}

// MAIN

function tractarPremi(numeroPremi){

    // CREEM ELS PREMIS
    var premi1 = new Premi("Tablet", "Samsung Note 8.0", 150, "imatges/producte1.jpg");
    var premi2 = new Premi("Portatil", "Lenovo 720 13º", 1050, "imatges/producte2.jpg");
    var premi3 = new Premi("Mòvil", "Xiaommi MiA3", 250, "imatges/producte3.png");
    var premi4 = new Premi("Tablet", "Última generació", 28, "imatges/producte4.jpg");
    var premi5 = new Premi("Auriculars", "Energy", 86, "imatges/producte5.png");
    var premi6 = new Premi("Ratolí", "Logitec", 64, "imatges/producte6.jpg");
    var premi7 = new Premi("Televisió", "Samsung", 45, "imatges/producte7.jpg");
    var premi8 = new Premi("Monitor", "Philips", 3, "imatges/producte8.jpg");
    var premi9 = new Premi("Teclat", "Razer", 23, "imatges/producte9.jpg");
    var premi10 = new Premi("USB", "Sandisk", 123, "imatges/producte10.png");


    // CREEM EL PANELL I LI PASEM ELS PREMIS
    var panell = new Panell([premi1, premi2, premi3, premi4, premi5,premi6, premi7, premi8, premi9, premi10]);
    

    // RETORNEM EL RESULTAT (PREMI)
    document.getElementById("sortida").innerHTML = panell.obtenirPremi(numeroPremi);
   
}

