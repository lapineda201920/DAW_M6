class Vigenere {

    // CONSTRUCTOR
    constructor(entrada, clau){

        this._entrada = entrada;
        this._clau = clau;
        this._alfabet = "ABCÇDEFGHIJKLMNÑOPQRSTUVWYXZ";
        this._resultat = "";
    }


    // MÈTODES

    // --> ELIMINEM ELS ESPAIS EN BLANC I HO PASSEM TOT A MAJÚSCULES
    eliminarEspaisBlanc(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        
        this._entrada = this._entrada.replace(/\s/gi, '');
        this._entrada = this._entrada.toUpperCase();

        this._clau = this._clau.replace(/\s/gi, '');
        this._clau = this._clau.toUpperCase();
    }


    // --> CONVERTIM LES PARAULES AMB ACCENT EN SENSE ACCENT
    senseAccent(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        
        this._entrada = this._entrada.replace(/[aàáAÀÁ]/gi, 'A');
        this._entrada = this._entrada.replace(/[eèéEÈÉ]/gi, 'E');
        this._entrada = this._entrada.replace(/[iìíIÌÍ]/gi, 'I');
        this._entrada = this._entrada.replace(/[oòóOÒÓ]/gi, 'O');
        this._entrada = this._entrada.replace(/[uùúUÙÚ]/gi, 'U');

        this._clau = this._clau.replace(/[aàáAÀÁ]/gi, 'A');
        this._clau = this._clau.replace(/[eèéEÈÉ]/gi, 'E');
        this._clau = this._clau.replace(/[iìíIÌÍ]/gi, 'I');
        this._clau = this._clau.replace(/[oòóOÒÓ]/gi, 'O');
        this._clau = this._clau.replace(/[uùúUÙÚ]/gi, 'U');
    }


    // --> ENCRIPTEM LA ENTRADA AMB LA CLAU DONADA PEL USUARI
    getResultatCodificat(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.
        this.eliminarEspaisBlanc();
        this.senseAccent();
        for (var i = 0; i < this._entrada.length; i++){

            // IGUALEM LA LLARGADA DE LA CLAU A LA DE L'ENTRADA
            var y = 0;
            var max_lenght = this._entrada.length;
            while (this._entrada.length != this._clau.length){

                this._clau = this._clau + this._clau[y];

                if(y >= max_lenght){

                    y = 0;
                }
                else{

                    y++;
                }
            }

            // BUSQUEM ON ESTAN SITUATS TANT LA LLETRA DE L'ENTRADA COM DE LA CLAU
            var posicio_lletra_entrada = this._alfabet.indexOf(this._entrada[i]);
            var posicio_lletra_clau = this._alfabet.indexOf(this._clau[i]);

            // SUMEM LES DUES POSICIONS
            var suma_posicions = posicio_lletra_entrada + posicio_lletra_clau;

            // ANEM RESTANT MENTRE QUE EL MOD SIGUI MÉS GRAN QUE EL LENGTH DEL ABECEDARI
            while (suma_posicions >= this._alfabet.length){

                suma_posicions = suma_posicions - this._alfabet.length;
            }
            
            // ARA BUSQUEM LA LLETRA AMB LA QUAL SUBSTITUIREM L'ENTRADA
            this._resultat = this._resultat + this._alfabet[suma_posicions];
        }

        // RETORNEM EL RESULTAT
        return (document.form.sortida.value = this._resultat);
    }

    getResultatDecodificat(){ // SI EL MÈTODE NO PASSA ALGUN VALOR, SE LI POSSA this. MÉS EL ATRIBUT CORRESPONENT.

        for (var i = 0; i < this._entrada.length; i++){

            // IGUALEM LA LLARGADA DE LA CLAU A LA DE L'ENTRADA
            var y = 0;
            var max_lenght = this._entrada.length;
            while (this._entrada.length != this._clau.length){

                this._clau = this._clau + this._clau[y];

                if(y >= max_lenght){

                    y = 0;
                }
                else{

                    y++;
                }
            }

            // BUSQUEM ON ESTAN SITUATS TANT LA LLETRA DE L'ENTRADA COM DE LA CLAU
            var posicio_lletra_entrada = this._alfabet.indexOf(this._entrada[i]);
            var posicio_lletra_clau = this._alfabet.indexOf(this._clau[i]);

            // SUMEM LES DUES POSICIONS
            var resta_posicions = posicio_lletra_entrada - posicio_lletra_clau;

            // ANEM SUMANT MENTRE QUE EL MOD SIGUI MÉS GRAN QUE EL LENGTH DEL ABECEDARI
            while (resta_posicions < 0 || resta_posicions >= this._alfabet.length){

                resta_posicions = resta_posicions + this._alfabet.length;
            }
            
            // ARA BUSQUEM LA LLETRA AMB LA QUAL SUBSTITUIREM L'ENTRADA
            this._resultat = this._resultat + this._alfabet[resta_posicions];
        }

        // RETORNEM EL RESULTAT
        return (document.form.sortida.value = this._resultat);
    }
}