

function obrir(){

    console.clear();
    console.log("ENTRA AL JS!");

    // 1 - MARCA I PROCESSADORS
    var marca = [];;

    document.getElementById("intel").onclick = function(){comprobar(marca)};
    document.getElementById("amd").onclick = function(){comprobar(marca)};


    function comprobar(marca){

        // ARRAYS PROCESSADORS
        var intel = [
            [
                "https://thumb.pccomponentes.com/w-530-530/articles/17/173598/1539027947000-1435918.jpg",
                "Intel Core i7-9700K 3.6Ghz", 
                "Sólo compatible con sus placas base basadas en chipset de la serie 300, el procesador Intel Core i7-9700K 12M cache, hasta 4.90 GHz está diseñado para juegos, creación y productividad.",
                305.70
            ],
            [
                "https://thumb.pccomponentes.com/w-530-530/articles/17/173595/1539027947000-1435919.jpg",
                "Intel Core i5-9600K 3.7Ghz ", 
                "Sólo compatible con sus placas base basadas en chipset de la serie 300, el procesador Intel Core i5-9600K 3.7 GHz Six-Core LGA 1151 está diseñado para juegos, creación y productividad.",
                198.26
            ],
            [
                "https://thumb.pccomponentes.com/w-530-530/articles/18/182356/e000661.jpg",
                "Intel Core i5-9400F 2.9GHz", 
                "Con la potencia y la capacidad de respuesta de la tecnología Intel® Turbo Boost 2.01 2 puede pasar más tiempo haciendo cosas y menos esperando. Cree, edite y comparta contenido 4K con facilidad y disfrute de experiencias absorbentes en 360 grados a pantalla completa 4K.",
                123.81
            ]
        ];

        var amd = [
            [
                "https://thumb.pccomponentes.com/w-530-530/articles/15/157400/7.jpg",
                "AMD Ryzen 7 2700X 3.7 Ghz", 
                "El nuevo AMD Ryzen 7 2700X pertenece a la nueva serie de procesadores Ryzen 2000, las CPU más potentes y actuales la compañía que suponen un nuevo paso adelante en la magnífica línea iniciada hace un año con la familia Ryzen de procesadores AMD.",
                148.67
            ],
            [
                "https://thumb.pccomponentes.com/w-530-530/articles/25/258261/amd-ryzen-5-1600-stepping-af-36ghz-box-d7ae5624-e0fe-46fc-84bc-7b1ad599b45d.jpg",
                "AMD Ryzen 5 1600 Stepping AF 3.6GHz BOX", 
                "Los AMD Ryzen 1600 con stepping AF se han desarrollado bajo la arquitectura ZEN+, la misma que la de la serie 2000 de AMD Ryzen y bajo un proceso de fabricación de 12nm vs los 14nm de la serie 1000 habitual.",
                82.64
            ],
            [
                "https://thumb.pccomponentes.com/w-530-530/articles/21/213019/5-3.jpg",
                "AMD Ryzen 5 3600 3.6GHz BOXz", 
                "Fabricados para rendir. Diseñados para ganar. Más velocidad. Más memoria. Mayor ancho de banda. Exígelos al máximo, exprime hasta la última gota de rendimiento, llévalos al límite.",
                152.81
            ]
        ];

        // CONPROBEM SI LES MARQUES ESTAN CHECKED
        var seleccionaIntel = document.getElementById("intel").checked;
        var seleccionaAMD = document.getElementById("amd").checked;



        // 2 - CONPROBEM QUINA DE LES 2 OPCIONS L'USUARI HA SEL·LECCIONAT
        if (seleccionaIntel == true){

            console.log("1 - Sel·lecciona Intel");
            marca = intel;
        }
        if (seleccionaAMD == true){

            console.log("1 - Sel·lecciona AMD");
            marca = amd;
        }
        
        // AGAFEM LA POSICCIÓ DEL APARTAT 'PROCESSADOR'
        var posicio = document.getElementById("processador");

        // ELIMINEM TOTS ELS NODES
        posicio.innerHTML = "";

        for (var i = 0; i < marca.length; i++){

            var imatge = marca[i][0];
            var model = marca[i][1];
            var descripcio = marca[i][2];
            var preu = marca[i][3];

            imprimirProductes("processador",imatge, model, descripcio, preu, i);            
        }
    }
        

    // 2 - PLAQUES BASE
    // ARRAY PLAQUES BASE
    var plaquesBase = [
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/16/168112/a1.jpg",
            "Gigabyte B450M DS3H", 
            "Las placas base GIGABYTE serie 400 maximizan el potencial de su PC con la tecnología AMD StoreMI. StoreMI acelera los dispositivos de almacenamiento tradicionales para reducir los tiempos de arranque y mejorar la experiencia general del usuario.",
            59.50
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/17/172635/product-6-20181008102018-5bbabee2dfad1.jpg",
            "MSI Z390-A PRO", 
            "La placa gaming MSI Z390-A PRO tiene socket Intel 1151 y soporta procesadores Intel de 8ª y 9ª generación.",
            99.92
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/23/232059/1.jpg",
            "MSI B450M Mortar Max", 
            "Estilo militar con diseño de disipador térmico extendido para una mejor solución térmica, DDR4 Boost, Core Boost, Turbo M.2 y conector USB 3.2 Gen2",
            78.50
        ]
    ];
    for (var i = 0; i < plaquesBase.length; i++){

        var imatge = plaquesBase[i][0];
        var model = plaquesBase[i][1];
        var descripcio = plaquesBase[i][2];
        var preu = plaquesBase[i][3];

        imprimirProductes("placaBase",imatge, model, descripcio, preu, i);            
    }


    // 3 - RAM
    // ARRAY RAM
    var ram = [
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/10/100309/corsair-vengeance-lpx-ddr4-3000mhz-pc-24000-8gb-2x4-black.jpg",
            "Corsair Vengeance LPX DDR4 3000 PC4-24000 16GB 2x8GB CL15", 
            "La memoria Vengeance LPX se ha diseñado para overclocking de alto rendimiento. El disipador de calor, fabricado en aluminio puro, permite una disipación térmica más rápida.",
            74.38
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/23/234076/hyperx-fury-ddr4-1-front.jpg",
            "Kingston HyperX Fury Black 8GB DDR4 2666Mhz PC-21300 CL16", 
            "HyperX® FURY DDR4 hace overclocking automáticamente para llegar a la máxima frecuencia publicada (hasta 3466 MHz*), lo que proporciona un impulso Plug and Play para los juegos, la edición de vídeo y la renderización.",
            33.88
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/11/114077/1140771.jpg",
            "G.Skill Trident Z RGB DDR4 3200 PC4-25600 16GB 2x8GB CL16", 
            "La nueva gama de memorias RAM G.Skill Trident Z RGB ofrece soluciones para un rendimiento increíble.",
            96.69
        ]
    ];
    for (var i = 0; i < ram.length; i++){

        var imatge = ram[i][0];
        var model = ram[i][1];
        var descripcio = ram[i][2];
        var preu = ram[i][3];

        imprimirProductes("ram",imatge, model, descripcio, preu, i);            
    }


    // 4 - CPU
    // ARRAY CPU
    var cpu = [
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/10/108730/1.jpg",
            "Nfortec Vela KX CPU Cooler", 
            "La familia de disipadores de Nfortec está compuesta por dos modelos que, a pesar de lo contenido de su precio, ofrecen unas prestaciones difícilmente igualables.",
            24.11
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/19/190576/b1.jpg",
            "Nfortec Centaurus RGB", 
            "Para que nuestros componentes funcionen de forma correcta y obtengamos su máximo rendimiento es fundamental tener una refrigeración capaz de mantenerlos a una temperatura óptima.",
            28.88
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/17/175855/1.jpg",
            "Cooler Master Hyper 212 RGB Black Edition", 
            "La nueva gama de memorias RAM G.Skill Trident Z RGB ofrece soluciones para un rendimiento increíble.",
            33.05
        ]
    ];
    for (var i = 0; i < cpu.length; i++){

        var imatge = cpu[i][0];
        var model = cpu[i][1];
        var descripcio = cpu[i][2];
        var preu = cpu[i][3];

        imprimirProductes("ventiladorsCPU",imatge, model, descripcio, preu, i);            
    }


    // 5 - Disc Dur
    // ARRAY discDurs
    var discDurs = [
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/11/111412/new111412.jpg",
            "Seagate BarraCuda 3.5 1TB SATA3", 
            "Versátiles. Rápidos. Fiables. La unidad de disco duro más increíble que haya conocido.",
            31.40
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/14/144765/a3.jpg",
            "Toshiba OCZ TR200 SSD 240GB SATA3", 
            "Actualizar desde una unidad de disco duro (HDD) debería ser fácil y asequible y es ahí donde entran las SSD OCZ TR200. ",
            37.19
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/18/182592/37656306-31219234200.jpg",
            "Seagate BarraCuda 3.5 2TB SATA 3", 
            "Impresionante versatilidad. Fiabilidad inigualable. Seagate incorpora más de 20 años de rendimiento y fiabilidad dignos de confianza a las unidades de",
            46.69
        ]
    ];
    for (var i = 0; i < discDurs.length; i++){

        var imatge = discDurs[i][0];
        var model = discDurs[i][1];
        var descripcio = discDurs[i][2];
        var preu = discDurs[i][3];

        imprimirProductes("discDur",imatge, model, descripcio, preu, i);            
    }


    // 6 - Torre
    // ARRAY torres
    var torres = [
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/25/251991/spook-1.jpg",
            "Tempest Spook RGB USB 3.0 con Ventana Negro", 
            "Siempre a la vanguardia del gaming Tempest amplía su familia de torres, lanzando una nueva torre, que viene a revolucionar el catálogo.",
            24.78
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/10/101871/owlotech-evo-usb-3-0-1.jpg",
            "Owlotech EVO USB 3.0 500W", 
            "Te presentamos la EVO de Owlotech, una torre en formato ATX que no te dejará impasible.",
            33.05
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/21/217047/nfortec-draco-v2-white.jpg",
            "Nfortec Draco V2 Cristal Templado Blanco", 
            "El diseño de la nueva Draco V2 parte de su estilo inconfundible para llevar a un nuevo nivel de excelencia todas sus prestaciones.",
            57.81
        ]
    ];
    for (var i = 0; i < torres.length; i++){

        var imatge = torres[i][0];
        var model = torres[i][1];
        var descripcio = torres[i][2];
        var preu = torres[i][3];

        imprimirProductes("torre",imatge, model, descripcio, preu, i);            
    }


    // 7 - FONT ALIMENTACIÓ
    // ARRAY torres
    var fontsAlimentacio = [
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/20/204502/tempestg650-4.jpg",
            "Tempest Gaming GPSU 650W", 
            "Os presentamos el nuevo modelo de nuestra conocida fuente de alimentación.",
            33.05
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/14/140446/6.jpg",
            "Nox Urano VX 750W 80+ Bronze 140MM", 
            "Nuestras exitosas fuentes Urano evolucionan por dentro y por fuera. Nuevas líneas y nuevo aspecto para contener la evolución de una fuente que mejora rendimiento,",
            45.45
        ],
        [
            "https://thumb.pccomponentes.com/w-530-530/articles/10/108738/ghm.jpg",
            "Nfortec Scutum PSU 650W 80 Plus", 
            "No sólo de chasis y disipadores vive Nfortec sino que, como no podía ser menos, las fuentes de alimentación forman una parte muy importante de su catálogo.",
            49.55
        ]
    ];
    for (var i = 0; i < fontsAlimentacio.length; i++){

        var imatge = fontsAlimentacio[i][0];
        var model = fontsAlimentacio[i][1];
        var descripcio = fontsAlimentacio[i][2];
        var preu = fontsAlimentacio[i][3];

        imprimirProductes("fontAlimentacio",imatge, model, descripcio, preu, i);            
    }
        

    function imprimirProductes(tipo, imatge, model, descripcio, preu, i){

        // 1 - CREEM L'ESTRUCTURA DEL PARÀGRAF
        var div = document.createElement("div");
            var br = document.createElement("br");
            

            var divRow = document.createElement("div");
            divRow.setAttribute("class", "row");

                var div1 = document.createElement("div");
                div1.setAttribute("class", "col-12 col-sm-12 col-md-2 text-center");
                var img = document.createElement("img");
                img.setAttribute("class", "img-responsive");
                img.setAttribute("src", imatge);
                img.setAttribute("alt", "preview");
                img.setAttribute("width", 120);
                img.setAttribute("height", 80);
                div1.appendChild(img);

                var div2 = document.createElement("div");
                div2.setAttribute("class", "col-12 text-sm-center col-sm-12 text-md-left col-md-6");
                var h41 = document.createElement("h4");
                    h41.setAttribute("class", "product-name");
                    var strong = document.createElement("strong");
                    var text_h41 = document.createTextNode(model);
                    strong.appendChild(text_h41);
                    h41.appendChild(strong);
                div2.appendChild(h41);
                var h42 = document.createElement("h4");
                    var small = document.createElement("small");
                    var text_h42 = document.createTextNode(descripcio);
                    small.appendChild(text_h42);
                    h42.appendChild(small);
                div2.appendChild(h42);

                var div3 = document.createElement("div");
                div3.setAttribute("class", "col-12 col-sm-12 text-sm-center col-md-4 text-md-right row");
                    var div3_1 = document.createElement("div");
                    div3_1.setAttribute("class", "col-3 col-sm-3 col-md-6 text-md-right");
                    div3_1.setAttribute("style", "padding-top: 5px");

                        var h6 = document.createElement("h6");
                            var h6strong = document.createElement("strong");
                            var text_h6 = document.createTextNode(preu + "€");
                            h6strong.appendChild(text_h6);
                            h6.appendChild(h6strong);
                    div3_1.appendChild(h6);
                    
                    var div3_2 = document.createElement("div");
                    div3_2.setAttribute("class", "col-4 col-sm-4 col-md-4");
                    
                        var input = document.createElement("input");
                            input.setAttribute("type", "number");
                            input.setAttribute("max", 5);
                            input.setAttribute("min", 1);
                            input.setAttribute("size", 4);
                            input.setAttribute("value", 1);
                    div3_2.appendChild(input);

                    var div3_3 = document.createElement("div");
                    div3_3.setAttribute("class", "col-2 col-sm-2 col-md-2 text-right");
                    
                        var inputCheck = document.createElement("input");
                            inputCheck.setAttribute("type", "checkbox");
                            inputCheck.setAttribute("id", "check_"+tipo+"_"+i);
                            inputCheck.setAttribute("onclick", "afegirProducte(id, '"+model+"', '"+descripcio+"', '"+preu+"')");
                    div3_3.appendChild(inputCheck);

                div3.appendChild(div3_1);
                div3.appendChild(div3_2);
                div3.appendChild(div3_3);
    
            divRow.appendChild(div1);
            divRow.appendChild(div2);
            divRow.appendChild(div3);

            var hr = document.createElement("hr");
        div.appendChild(br);
        div.appendChild(divRow);
        div.appendChild(hr);

        // 2 - AGAFEM LA POSICCIÓ
        var posicioInserir = document.getElementById(tipo);

        // 3 - HO IMPRIMIM AL HTML
        posicioInserir.appendChild(div);
    } 
  }

  function afegirProducte(id, nomProducte, descripProducte, preuProducte){

        // 1 - CONPROBEM EL ESTAT (TRUE/FALSE)
        var checkBox = document.getElementById(id).checked;

        console.log("El " + id + " ha entrat estant " + checkBox);

        // 2 - DEPENENT DEL SEU ESTAT, AFEGIM O ELIMINEM UN PRODUCTE
        if (checkBox == true){

            // 1 - CREEM L'ESTRUCTURA DEL PRODUCTE AFEGIT
            var li = document.createElement("li");
            li.setAttribute("class", "list-group-item d-flex justify-content-between lh-condensed");
            li.setAttribute("name", nomProducte);
                var div = document.createElement("div");
                    var h6 = document.createElement("h6");
                        h6.setAttribute("class", "my-0");
                        var text_h6 = document.createTextNode(nomProducte);
                        h6.appendChild(text_h6);
                    var small = document.createElement("small");
                        small.setAttribute("class", "text-muted");
                        var text_small = document.createTextNode(descripProducte.slice(0,30) + "...");
                        small.appendChild(text_small);
                    div.appendChild(h6);
                    div.appendChild(small);
                var span = document.createElement("span");
                    span.setAttribute("class", "text-muted");
                    var text_span = document.createTextNode(preuProducte + "€");
                    span.appendChild(text_span);
            li.appendChild(div);
            li.appendChild(span);

            // 2 - AGAFEM LA POSICCIÓ
            var posicioInserir = document.getElementById("cabasCompra");

            // 3 - HO IMPRIMIM AL HTML
            posicioInserir.appendChild(li);

            // 4 - SUMEM +1 AL CONTADOR DEL CABÀS DE COMPRA
            var posicioInserirContador = document.getElementById("contadorCabasCompra");
            var contador = posicioInserirContador.textContent;
            contador++;
            var textnode = document.createTextNode(contador);
            posicioInserirContador.replaceChild(textnode, posicioInserirContador.childNodes[0]);

            // 5 - FEM LA SUMA TOTAL SENSE IVA
            var posicioInserirTotalSense = document.getElementById("totalSense");
            var totalSense = posicioInserirTotalSense.textContent;

            totalSense.slice(0, -1);

            totalSense = parseFloat(totalSense);
            preuProducte = parseFloat(preuProducte);

            totalSense = totalSense + preuProducte;
            totalSense = totalSense.toFixed(2);
            
            var textnodeTS = document.createTextNode(totalSense + "€");
            posicioInserirTotalSense.replaceChild(textnodeTS, posicioInserirTotalSense.childNodes[0]);


            // 6 - FEM LA SUMA TOTAL AMB IVA
            var posicioInserirTotalAmb = document.getElementById("totalAmb");
            var totalAmb = posicioInserirTotalAmb.textContent;

            totalAmb.slice(0, -1);

            totalAmb = parseFloat(totalAmb);
            preuProducte = parseFloat(preuProducte);

            totalAmb = totalAmb + preuProducte;
            totalAmb = (preuProducte * 0.21) + totalAmb;
            totalAmb = totalAmb.toFixed(2);
            
            var textnodeTA = document.createTextNode(totalAmb + "€");
            posicioInserirTotalAmb.replaceChild(textnodeTA, posicioInserirTotalAmb.childNodes[0]);

        }
        else{

            // 1 - AGAFEM LA POSICCIÓ DEL PRODUCTE A ELIMINAR
            var posicioEliminar = document.getElementsByName(nomProducte)[0];

            // 2 - HO ELIMINEM DEL HTML
            posicioEliminar.outerHTML = "";

            // 3 - RESTEM -1 AL CONTADOR DEL CABÀS DE COMPRA
            var posicioInserirContador = document.getElementById("contadorCabasCompra");
            var contador = posicioInserirContador.textContent;
            contador--;
            var textnode = document.createTextNode(contador);
            posicioInserirContador.replaceChild(textnode, posicioInserirContador.childNodes[0]);

            // 4 - FEM LA SUMA TOTAL SENSE IVA
            var posicioInserirTotalSense = document.getElementById("totalSense");
            var totalSense = posicioInserirTotalSense.textContent;

            totalSense.slice(0, -1);

            totalSense = parseFloat(totalSense);
            preuProducte = parseFloat(preuProducte);

            totalSense = totalSense - preuProducte;
            totalSense = totalSense.toFixed(2);
            
            var textnodeTS = document.createTextNode(totalSense + "€");
            posicioInserirTotalSense.replaceChild(textnodeTS, posicioInserirTotalSense.childNodes[0]);


            // 5 - FEM LA SUMA TOTAL AMB IVA
            var posicioInserirTotalAmb = document.getElementById("totalAmb");
            var totalAmb = posicioInserirTotalAmb.textContent;

            totalAmb.slice(0, -1);

            totalAmb = parseFloat(totalAmb);
            preuProducte = parseFloat(preuProducte);

            console.log(totalAmb);
            totalAmb = totalAmb - (preuProducte * 0.21 + preuProducte);
            console.log(totalAmb);
            totalAmb = totalAmb.toFixed(2);

            // Per si queden decimes perdudes en el 0 (degut a les operacions)
            if (~~totalAmb == 0){
                totalAmb = 0;
                console.log("Ha sigut 0 coma hi algo")
            }
            
            var textnodeTA = document.createTextNode(totalAmb + "€");
            posicioInserirTotalAmb.replaceChild(textnodeTA, posicioInserirTotalAmb.childNodes[0]);
        }
    }
  //---------------------------------------EXECUTAR_EL_CODI-----------------------------------//
  window.onload=obrir;