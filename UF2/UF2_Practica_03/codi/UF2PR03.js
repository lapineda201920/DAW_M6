/* FUNCIONS COMUNS */

function print(sortida){  // Funció per visualitzar la sortida
	var s = document.getElementById("sortida"); // Objecte #sortida
		s.innerHTML += sortida; // Afegeix una nova línia de sortida
	
	if(sortida == "") s.innerHTML = ""; // Esborra la sortida	
}


/* FUNCIONS PER DIR ELS NÚMEROS FIBONACCI */

function calculaFibo(numero){

	var major = 1, menor = 0, numero_temporal = 0;
	var missatge = ``;
	var array_numeros_fibo = [];

	while (numero > 0){
		numero_temporal = major;
		major = major + menor;
		menor = numero_temporal;
		numero--;

		array_numeros_fibo.push(menor);
		console.log(array_numeros_fibo);
	}

	for (var i = 0; i < array_numeros_fibo.length; i++){
		missatge = missatge + ` `+array_numeros_fibo[i]+` `;
	}

    return missatge;

}

function fibomatriu(){
	var missatge = `
					<h1>FIBONACCI</h2>
					<form name='form'>Introduèix un nº d'elements a imprimir de la sèrie de fibonaci:<br /><br />
						<p>Cadena: <input name='numero' type='number' /></p>
						<input type='button' onclick="print('<br />Cadena: ' +calculaFibo(form.numero.value) + '<br />');" value='Calcular!' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}


/* FUNCIONS PER DIR NÚMEROS ALEATORIS DAUS */

function calculaDau(){ 

	var num_dau01 = Math.floor(Math.random() * (7 - 1)) + 1;
	var num_dau02 = Math.floor(Math.random() * (7 - 1)) + 1;

	var dau = `
				<img src="imatges/`+num_dau01+`.png" alt="número" height="50" width="50">
				<img src="imatges/`+num_dau02+`.png" alt="número" height="50" width="50">
				<br />
				`;

    return dau;

}

function Daus(){
	var missatge = `
					<h1>DAUS</h2>
					<form name='form'>Fes girar el dau, a veure quin número sortirà:<br /><br />
						<input type='button' onclick="print(calculaDau());" value='Girar Dau!' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}


/* FUNCIONS PER DIR EL DÍGIT DE CONTROL DEL NIF */

function calculaNif(cadena){ 

	// Obtenim el número resultant de la operació de dividir per 23 el nostre DNI
	resultat_divisio = cadena % 23;

	var matriu = [
					[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
					["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"]

				];


	var lletra = matriu[1][resultat_divisio];
	var resultat_dni = ``+cadena+`-`+lletra;


    return resultat_dni;

}

function nif(){
	var missatge = `
					<h1>NIF</h2>
					<form name='form'>Introdueix un DNI o NIE, per així dir-te la lletra de control:<br /><br />
						<p>Cadena: <input name='cadena' type='text' size='15' autofocus='autofocus' /></p>
						<input type='button' onclick="print('DNI: ' + calculaNif(form.cadena.value) + '<br />');" value='Obtenir NIF!' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}

/* FUNCIONS PER DIR LA CONVINACIÓ GUANYADORA DE LA LOTERIA */

function calculaLoto(){ 
	var missatge = `
					<table>
					 	<tr style="color:red;font-weight:bold;">
					    	<th colspan="6">COMBINACIÓ GUANYADORA</th>
					    	<th>Plus</th>
					    	<th>C</th>
					    	<th>R</th>
						</tr>
						<tr>`;

	// DECLARACIÓ DE VARIABLES
	var fila = 0;
	var columna = 0;

	var array_numeros_loteria = [];


	// CREEM 9 NÚMEROS ALEATORIS
	while (array_numeros_loteria.length != 9){

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
		console.log(array_numeros_loteria);
	}

	for (var cops = 0; cops < 9; cops++){	

		// 3r - En aquest punt volem saber el número de fila, per a després dir quina part de la foto a ha retallar
		
		if (array_numeros_loteria[cops] >= 1 && array_numeros_loteria[cops] <= 10){ // Si el nº és entre el 1 i el 10
			fila = 0;
			columna = (array_numeros_loteria[cops] - 1) * 44;
		}

		if (array_numeros_loteria[cops] >= 11 && array_numeros_loteria[cops] <= 20){ // Si el nº és entre el 11 i el 20
			fila = 46;
			columna = (array_numeros_loteria[cops] - 11) * 44;
		}

		if (array_numeros_loteria[cops] >= 21 && array_numeros_loteria[cops] <= 30){ // Si el nº és entre el 21 i el 30
			fila = 46 * 2;
			columna = (array_numeros_loteria[cops] - 21) * 44;
		}

		if (array_numeros_loteria[cops] >= 31 && array_numeros_loteria[cops] <= 40){ // Si el nº és entre el 31 i el 40
			fila = 46 * 3;
			columna = (array_numeros_loteria[cops] - 31) * 44;
		}

		if (array_numeros_loteria[cops] >= 41 && array_numeros_loteria[cops] <= 49){ // Si el nº és entre el 41 i el 49
			fila = 46 * 4;
			columna = (array_numeros_loteria[cops] - 41) * 44;
		}

		if (cops <= 5){
			var missatge = missatge + `
				<td style="
					width:45px;
					height:45px;
					background: url(imatges/boles_blau.png) -`+columna+`px -`+fila+`px;
					background-size:445px 230px;">
				</td>`;
		}
		if (cops == 6){
			var missatge = missatge + `
				<td style="
					width:45px;
					height:45px;
					background: url(imatges/boles_roig.png) -`+columna+`px -`+fila+`px;
					background-size:445px 230px;">
				</td>`;
		}
		if (cops == 7){
			var missatge = missatge + `
					<td style="
						width:45px;
						height:45px;
						background: url(imatges/boles_verd.png) -`+columna+`px -`+fila+`px;
						background-size:445px 230px;">
					</td>`;
		}
		if (cops == 8){
		var missatge = missatge + `
				<td style="
					width:45px;
					height:45px;
					background: url(imatges/boles_groc.png) -`+columna+`px -`+fila+`px;
					background-size:445px 230px;">
				</td>
				</tr>`;
		}
	}

    return missatge;

}

function loto(){
	var missatge = `
					<h1>LOTO</h2>
					<form name='form'>Prem el botó, a veure quina convinació sortirà:<br /><br />
						<input type='button' onclick="print(calculaLoto());" value='Juga a la Loto!' />
					</form><br />`

	print(""); // Esborra la sortida
    print(missatge); // Utilitza la funció print() per visualitzar la sortida*/

}