class Triangle {

    // CONSTRUCTOR
    constructor(base, altura){

        this._base = base;
        this._altura = altura;
        this._area = this.treuArea(base, altura);
    }


    // MÈTODES
    treuArea(base, altura){ // SI EL MÈTODE PASSA ALGUN VALOR, ...

        var area;
        area = base * altura / 2; // ... NO SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        return area;
    }

    getResultats(){

        document.write("<br /><br />RESULTATS TRIANGLE");
        document.write("<br />Base = "+this._base);
        document.write("<br />Altura = "+this._altura);
        document.write("<br />Area = "+this._area);
    }
}