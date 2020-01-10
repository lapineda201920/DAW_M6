class Trapezi {

    // CONSTRUCTOR
    constructor(base1, base2, altura){

        this._base1 = base1;
        this._base2 = base2;
        this._altura = altura;
        this._area = this.treuArea(base1, base2);
    }


    // MÈTODES
    treuArea(base1, base2){ // SI EL MÈTODE PASSA ALGUN VALOR, ...
        
        var area;
        area = this._altura * ( (base1 + base2) / 2); // ... NO SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        return area;
    }

    getResultats(){

        document.write("<br /><br />RESULTATS Trapezi");
        document.write("<br />Base 1 = "+this._base1);
        document.write("<br />Base 2 = "+this._base2);
        document.write("<br />Altura = "+this._altura);
        document.write("<br />Area = "+this._area);
    }
}