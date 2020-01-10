class Esfera {

    // CONSTRUCTOR
    constructor(radi){

        this._radi = radi;
        this._area = this.treuArea();
        this._volum = this.treuVolum();
    }


    // MÈTODES
    treuArea(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, ...
        
        var area;
        area = 4 * Math.PI * Math.pow(this._radi, 2); // ... SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        return area;
    }

    treuVolum(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, ...
        
        var volum;
        volum = ( 4 * Math.PI * Math.pow(this._radi, 3) ) / 3; // ... SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        return volum;
    }

    getResultats(){

        document.write("<br /><br />RESULTATS Esfera");
        document.write("<br />Radi = "+this._radi);
        document.write("<br />Volum = "+this._volum);
        document.write("<br />Area = "+this._area);
    }
}