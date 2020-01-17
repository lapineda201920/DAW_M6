class Cesar {

    // CONSTRUCTOR
    constructor(entrada, clau){

        this._entrada = entrada;
        this._clau = clau;
        this._alfabet = "ABCÇDEFGHIJKLMNÑOPQRSTUVWYXZ0123456789";
        this._resultat = "";
    }


    // MÈTODES

    // --> ELIMINEM ELS ESPAIS EN BLANC I HO PASSEM TOT A MAJÚSCULES
    eliminarEspaisBlanc(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        
        this._entrada = this._entrada.replace(/\s/gi, '');
        this._entrada = this._entrada.toUpperCase();
    }


    // --> CONVERTIM LES PARAULES AMB ACCENT EN SENSE ACCENT
    senseAccent(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        
        this._entrada = this._entrada.replace(/[aàáAÀÁ]/gi, 'A');
        this._entrada = this._entrada.replace(/[eèéEÈÉ]/gi, 'E');
        this._entrada = this._entrada.replace(/[iìíIÌÍ]/gi, 'I');
        this._entrada = this._entrada.replace(/[oòóOÒÓ]/gi, 'O');
        this._entrada = this._entrada.replace(/[uùúUÙÚ]/gi, 'U');
    }


    // --> ENCRIPTEM LA ENTRADA AMB LA CLAU DONADA PEL USUARI
    getResultatCodificat(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        this.eliminarEspaisBlanc();
        this.senseAccent();
        for (var i = 0; i < this._entrada.length; i++){

            // BUSQUEM LA MATEIXA LLETRA EN ELS 2 ARRAYS
            var posicio = this._alfabet.indexOf(this._entrada[i]);


            // PASSEM LA CLAU A INT, LI SUMEM X A LA POSICIO I SUMEM EL RESULTAT A LA VARIABLE RESULTAT
            this._clau = parseInt(this._clau);
            posicio = posicio + this._clau;

            if (posicio >= this._alfabet.length){

                var restant = posicio - this._alfabet.length;
                posicio = restant;
            }

            this._resultat = this._resultat + this._alfabet[posicio];
        }

        // RETORNEM EL RESULTAT
        return (document.form.sortida.value = this._resultat);
    }

    getResultatDecodificat(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.

        for (var i = 0; i < this._entrada.length; i++){

            // BUSQUEM LA MATEIXA LLETRA EN ELS 2 ARRAYS
            var posicio = this._alfabet.indexOf(this._entrada[i]);

            // PASSEM LA CLAU A INT, LI RESTEM X A LA POSICIO I RESTEM  EL RESULTAT A LA VARIABLE RESULTAT
            this._clau = parseInt(this._clau);
            posicio = posicio - this._clau;
            

            if (posicio < 0 || posicio >= this._alfabet.length){

                var restant = posicio + this._alfabet.length;
                posicio = restant;
            }

            this._resultat = this._resultat + this._alfabet[posicio];;
        }

        // RETORNEM EL RESULTAT
        return (document.form.sortida.value = this._resultat);
    }
}