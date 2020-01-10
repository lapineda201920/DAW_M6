class Rectangle {

    // CONSTRUCTOR
    constructor(costat1, costat2){

        this._costat1 = costat1;
        this._costat2 = costat2;
        this._area = this.treuArea(costat1, costat2);
        this._perimetre = this.treuPerimetre();
    }


    // MÈTODES
    treuArea(costat1, costat2){ // SI EL MÈTODE PASSA ALGUN VALOR, ...
        
        var area;
        area = costat1 * costat2; // ... NO SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        return area;
    }

    treuPerimetre(){ // SI EL MÈTODE NO PASSA CAP VALOR I VOLS AGAFAR VALORS DE LA CLASSE, ...
        
        var perimetre;
        perimetre = 2 * (this._costat1 + this._costat2); // ... SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        return perimetre;
    }

    getResultats(){

        document.write("<br /><br />RESULTATS RECTANGLE");
        document.write("<br />Costat 1 = "+this._costat1);
        document.write("<br />Costat 2 = "+this._costat2);
        document.write("<br />Area = "+this._area);
        document.write("<br />Perimetre = "+this._perimetre);
    }
}
