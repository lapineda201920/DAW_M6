/* FUNCIONS COMUNS */

function print(sortida){  // Funció per visualitzar la sortida
	var s = document.getElementById("sortida"); // Objecte #sortida
		s.innerHTML += sortida; // Afegeix una nova línia de sortida
	
	if(sortida == "") s.innerHTML = ""; // Esborra la sortida	
}


/* FUNCIONS PER FACTORIAL */

function factor(nombre){ // Funció recursiva per obtenir el factorial
   
    if (nombre < 2)
		return 1;
	else
		return nombre * factor(nombre - 1); // Es crida a si mateixa
}

function factorial(){ //Funció pel visualitzar el text del factorial

	var missatge = `
					<h1>FACTORIAL</h2>
					<form name='form'>Entra un nombre enter:
					<input name='nombre' type='number' maxlength='3' size='3' autofocus='autofocus' />
					<input type='button' onclick="print('El factorial de ' + form.nombre.value +' és ' + factor(form.nombre.value) + '<br />');" value='factorial' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida

}


/* FUNCIONS PER ALEATORI */

function calculaAleatori(numero01,numero02){ 
   
	numero01 = parseInt(numero01);
	numero02 = parseInt(numero02);
   	var numero_aleatori = Math.floor(Math.random() * (numero02 - numero01)) + numero01;

    return numero_aleatori;

}

function aleatori(){
	var missatge = `
					<h1>ALEATORI</h2>
					<form name='form'>Introdueix entre quin número vols que es generi un número aleatori:
					<p>Número Mínim: <input name='numero01' type='number' maxlength='3' size='3' autofocus='autofocus' /></p>
					<p>Número Màxim: <input name='numero02' type='number' maxlength='3' size='3' autofocus='autofocus' /></p>
					<input type='button' onclick="print('Número aleatori: ' + calculaAleatori(form.numero01.value,form.numero02.value) + '<br />');" value='aleatori' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}


/* FUNCIONS PER VOCALS */

function canviar_vocals(cadena,vocal){

   	cadena = cadena.replace(/[aàáeèéièíoòóuùú]/gi, vocal);

    return cadena;

}

function vocals(){
	var missatge = `
					<h1>VOCALS</h2>
					<form name='form'>Introdueix una cadena de text i una vocal:
					<p>Cadena: <input name='cadena' type='text' size='15' autofocus='autofocus' /></p>
					<p>Vocal: <input name='vocal' type='text' maxlength='1' size='3' autofocus='autofocus' /></p>
					<input type='button' onclick="print('Cadena amb vocals substituides: ' + canviar_vocals(form.cadena.value,form.vocal.value) + '<br />');" value='vocals' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}

/* FUNCIONS PER PRIMERS */

function calculaPrimers(numero01,numero02){ // Funció recursiva per obtenir un número aleatori
	missatge = "2, 3, ";
	if (numero01 <= 1){
		numero01 = 2;
	}
	for(var i = numero01; i < numero02;i++){
		if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0){
			missatge = missatge + i + ", ";
		}
		else{
			if (i <= 10 && i % 2 != 0 && i % 3 != 0){
				missatge = missatge + i + ", ";
			}
		}
	}

    return missatge;

}

function primers(){
	var missatge = `
					<h1>PRIMERS</h2>
					<form name='form'>Introdueix entre quin número vols que s'imprimeixi els números primers corresponents:
					<p>Número Mínim: <input name='numero01' type='number' maxlength='3' size='3' autofocus='autofocus' /></p>
					<p>Número Màxim: <input name='numero02' type='number' maxlength='3' size='3' autofocus='autofocus' /></p>
					<input type='button' onclick="print('Números primers: ' + calculaPrimers(form.numero01.value,form.numero02.value) + '<br />');" value='primers' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}


/* FUNCIONS PER INREVES */

function canviar_cadena(cadena){

   	var cadena_reves = (""+cadena).split("").reverse().join("");

    return cadena_reves;
}

function inreves(){
	var missatge = `
					<h1>INREVES</h2>
					<form name='form'>Introdueix una cadena de text:
					<p>Cadena: <input name='cadena' type='text' size='15' autofocus='autofocus' /></p>
					<input type='button' onclick="print('Cadena invertida: ' + canviar_cadena(form.cadena.value) + '<br />');" value='invertir' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}