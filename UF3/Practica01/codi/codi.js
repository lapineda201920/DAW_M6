
// EXECUTAR FUNCIONS

function obrir(){

    exerci1();
    exerci2();
    exerci3();
    exerci4();
    exerci5();
    exerci6();
    exerci7();
    exerci8();
    exerci9();
    exerci10();
    exerci11();
    exerci12();
    exerci13();
    exerci14();
}


//-------------------------------INSERIR_NOU_ELEMENT-------------------------------------------//
function exerci1(){

    // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    var li = document.createElement("li"); //<li></li>

    var a = document.createElement("a"); //<a></a>
    a.setAttribute("href", "http://www.w3c.com"); //<a href="http://www.w3c.com"></a>
    var aText = document.createTextNode("W3C");
    a.appendChild(aText); //<a href="http://www.w3c.com">W3C</a>

    li.appendChild(a); //<li><a href="http://www.w3c.com">W3C</a></li>


    // 2 - AGAFEM LA POSICCIÓ
    var ul = document.querySelector("nav ul");
    var posicio = ul.getElementsByTagName("li")[1];

    // 3 - HO IMPRIMIM AL HTML
    ul.insertBefore(li,posicio);
}

//----------------------------------ELIMINAR_LINIA----------------------------------------//
function exerci2(){

	// 1 - SELECCIONEM EL ELEMENT A ELIMINAR
    var eliminarP = document.getElementsByTagName("p").item(0);

    // 2 - UN COP SELECIONEM, HO ELIMINEM
    eliminarP.remove();
}

//------------------------------------ELIMINAR_PRIMERA_FILA_TAULA--------------------------------------//
function exerci3(){

	// 1 - SELECCIONEM EL ELEMENT A ELIMINAR
    var eliminarTr = document.getElementsByTagName("tr").item(1);

    // 2 - UN COP SELECIONEM, HO ELIMINEM
    eliminarTr.remove();
}

//------------------------------------INSERIR_NOVA_COLUMNA_TAULA--------------------------------------//
function exerci4(){

    // 0 - CANVIEM EL COLSPAN DEL TH
    var th = document.getElementsByTagName("th").item(0);
    th.setAttribute("colspan", 4);

	// 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    var td01 = document.createElement("td");
    var td01Text = document.createTextNode("Avui");
    td01.appendChild(td01Text); //<td>Avui</td>

    var td02 = document.createElement("td");
    var td02Text = document.createTextNode("Demà");
    td02.appendChild(td02Text); //<td>Demà</td>

    // 2 - AGAFEM LA POSICCIÓ
    var table = document.getElementsByTagName("table")[0];
    var tr01 = table.getElementsByTagName("tr")[1];
    var tr02 = table.getElementsByTagName("tr")[2];

    // 3 - HO IMPRIMIM AL HTML
    tr01.appendChild(td01);
    tr02.appendChild(td02);
}

//---------------------------------AFEGIR_ELEMENT_FORMULARI-----------------------------------------//
function exerci5(){

	// 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("value", "None");
    input.setAttribute("id", "cavall");
    input.setAttribute("name", "gender");
    input.setAttribute("checked", "true");


    var label = document.createElement("label");
    label.setAttribute("for", "cavall");
    label.setAttribute("class", "radio");
    var labelText = document.createTextNode("Cavall");
    label.appendChild(labelText);

    // 2 - AGAFEM LA POSICCIÓ
    var div = document.getElementsByClassName("gender")[0];

    // 3 - HO IMPRIMIM AL HTML
    div.appendChild(input);
    div.appendChild(label);
}

//-------------------------------------CANVIAR_FORMULARI-------------------------------------//
function exerci6(){

    // 2 - AGAFEM LA POSICCIÓ
    var div = document.getElementsByTagName("form")[0];
    var posicioP = div.getElementsByTagName("p")[0];
    var contingutP = div.getElementsByTagName("p")[0].textContent;

    contingutP = contingutP.replace("en","amb");

    // 3 - HO IMPRIMIM AL HTML
    posicioP.textContent = contingutP;
}

//---------------------------------------AFEGIR_PARÀGREF_SECCIÓ_TEXT_2N_POSICIÓ-----------------------------------//
function exerci7(){

    // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    var p = document.createElement("p"); //<p></p>
    var pText = document.createTextNode("Aquest és el segon paràgraf"); //"Aquest és el segon paràgraf"
    p.appendChild(pText); //<p>Aquest és el segon paràgraf</p>


    // 2 - AGAFEM LA POSICCIÓ
    //var posicio = document.querySelector("article p+p");

    var article = document.querySelector("article");
    var posicio = article.getElementsByTagName("p")[1];

    // 3 - HO IMPRIMIM AL HTML
    article.insertBefore(p,posicio);

}

//---------------------------------------AFEGIR_PARÀGREF_SECCIÓ_TEXT_ÚLTIMA_POSICIÓ-----------------------------------//
function exerci8(){

    // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    var p = document.createElement("p"); //<p></p>
    var pText = document.createTextNode("Aquest és l’últim paràgraf"); //"Aquest és l’últim paràgraf"
    p.setAttribute("class", "ultim"); //<p class="ultim"></p>
    p.appendChild(pText); //<p class="ultim">Aquest és l’últim paràgraf</p>


    // 2 - AGAFEM LA POSICCIÓ
    var article = document.querySelector("article");

    // 3 - HO IMPRIMIM AL HTML
    article.appendChild(p);
}

//---------------------------------------AFEGIR_IMATGE-----------------------------------//
function exerci9(){

    // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    var imatge = document.createElement("img");
    imatge.setAttribute("src", "codi/imatge03.jpg");
    imatge.setAttribute("alt", "wolverine comic");

    // 2 - AGAFEM LA POSICCIÓ
    var section = document.getElementsByTagName("section")[0];
    var posicio = section.getElementsByTagName("img")[2];

    // 3 - HO IMPRIMIM AL HTML
    section.insertBefore(imatge,posicio);   
}

//---------------------------------------AFEGIR_CONTINGUT_TITLE_MÉS_SÍMBOL_COPYRIGHT-----------------------------------//
function exerci10(){

    // 0 - AGAFEM EL TEXT DEL <title>
    var title = document.getElementsByTagName("title")[0];
    var titleText = " - ";
    titleText = titleText + title.textContent;
    var titleTextNode = document.createTextNode(titleText);

    // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
    var any = new Date().getFullYear();
    var anyText = "\u00A9";
    anyText = anyText + any;
    var anyTextNode = document.createTextNode(anyText);

    // 2 - AGAFEM LA POSICCIÓ
    var footer = document.getElementsByTagName("footer")[0];
    var posicio = footer.getElementsByTagName("p")[0];

    // 3 - HO IMPRIMIM AL HTML
    posicio.appendChild(titleTextNode);
    posicio.appendChild(anyTextNode);
}

//---------------------------------------CADASCUNA_IMATGES_FONS_DIFERENT-----------------------------------//
function exerci11(){

    // 1 - A TOTS ELS <img> LI POSSEM EL ONCLICK
    var imatges = document.getElementsByTagName("img");
    var lengthImatges = imatges.length;

    // 2 - CREEM EL ARRAY AMB LA DIRECCIÓ DE LES IMATGES DE FONS
    var rutes = ["codi/floral.jpg", "codi/flowers.jpg", "codi/fruit.jpg", "codi/vintage.jpg"];

	imatges[0].addEventListener("click", function(){

        imatgeFons(rutes[0]);
    });

    imatges[1].addEventListener("click", function(){

        imatgeFons(rutes[1]);
    });

    imatges[2].addEventListener("click", function(){

        imatgeFons(rutes[2]);
    });

    imatges[3].addEventListener("click", function(){

        imatgeFons(rutes[3]);
    });

    // 3 - AL FOOTER LI POSSEM EL ONCLICK
    var p = document.getElementsByTagName("p")[6];
    p.addEventListener("click", function(){

        document.body.style.backgroundImage = "none";
    });
    
}

function imatgeFons(fons){

    document.body.style.backgroundImage = "url("+fons+")";
}

//---------------------------------------CADASCUNA_IMATGES_FONS_DIFERENT_PER_SOBRE-----------------------------------//
function exerci12(){

	// 1 - AGAFEM LA POSICCIÓ
    var ul = document.querySelector("nav ul");
    var posicio = ul.getElementsByTagName("li")[1];

    // 2 - AFEGIM EL EVENT
    posicio.addEventListener("mouseover", function(){

        document.body.style.backgroundImage = "url(codi/goku.png)";
        document.body.style.backgroundRepeat = "no-repeat";
    });
}

//---------------------------------------IMATGES_FONS_DESAPAREIX_W3SCHOOL-----------------------------------//
function exerci13(){

    // 1 - AGAFEM LA POSICCIÓ
    var ul = document.querySelector("nav ul");
    var posicio = ul.getElementsByTagName("li")[2];

    // 2 - AFEGIM EL EVENT
    posicio.addEventListener("mouseover", function(){

        document.body.style.backgroundImage = "none";
    });
}

//---------------------------------------APAREIX_LLAÇ_AL_FOOTER-----------------------------------//
function exerci14(){

    // 1 - AGAFEM LA POSICCIÓ
    var posicio = document.getElementsByTagName("p")[6];

    // 2 - AFEGIM EL EVENT
    posicio.addEventListener("mouseover", function(){

        document.body.style.backgroundImage = "url(codi/llaç.png)";
        document.body.style.backgroundRepeat = "repeat-x";
        document.body.style.backgroundPosition = "bottom center";
    });
}

//---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
window.onload=obrir;