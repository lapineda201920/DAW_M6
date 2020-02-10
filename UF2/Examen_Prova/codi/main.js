// MAIN

function main(){

    var aposta01 = new Aposta();
    var aposta02 = new Aposta();
    var sorteig = new Sorteig();
    
   sorteig.dibuixa();
   sorteig.comprovarAposta(1, aposta01.dibuixa(1));
   sorteig.comprovarAposta(2, aposta01.dibuixa(2));
}

