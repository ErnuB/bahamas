<script>
    import Footer from './Footer.svelte'
    import Navbar from './Navbar.svelte'
    import Modal from './Modal.svelte'
	import GotoTop from './GotoTop.svelte'
    import Paralax from './Paralax.svelte';
	import Carrusel from './Carrusel.svelte';

    let menu = false;

    const handleMenuToggle = (event) => {
    menu = event.detail.menu;

    if (typeof window !== 'undefined') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}


    let seccion = [
        {id: 'entradas', nombre:'Entradas', descripcion:""},
        {id: 'fritos', nombre:'Para compartir', descripcion:""},
        {id: 'tostadas', nombre:'Tostadas', descripcion:""},
        {id: 'fria', nombre:'Barra Fría', descripcion:""},
        {id: 'ensaladas', nombre:'Ensaladas', descripcion:""},
        {id: 'tacos', nombre:'Tacos', descripcion:""},
        {id: 'especialidades', nombre:'Especialidades', descripcion:""},
        {id: 'parrilla', nombre:'A la Parrilla', descripcion:""},
        {id: 'pastas', nombre:'Pastas', descripcion:""},
        {id: 'arroz-frito', nombre:'Arroz Frito', descripcion:""},
        {id: 'sushi', nombre:'Sushi', descripcion:""},
        {id: 'kids', nombre:'Menú Kids', descripcion:""},
        {id: 'postres', nombre:'Postres', descripcion:""},
    ];

    let seccionBebidas = [
        {id:'mock-tails', nombre:'Mock-tails', descripcion:""},
        {id:'cervezas', nombre:'Cervezas', descripcion:""},
        {id:'bebidas', nombre:'Bebidas', descripcion:""},
        {id:'mixologia', nombre:'Coctelería de la casa', descripcion:""},
        {id:'cocteleria', nombre:'Coctelería Tradicional Tiki', descripcion:""},
        {id:'cafe', nombre:'Café', descripcion:""},
        {id:'digestivos', nombre:'Digestivos', descripcion:""},
        {id:'destilados', nombre:'Destilados', descripcion:""},
        {id:'destilados-botellas', nombre:'Botellas', descripcion:""},
    ]

    let platillos = [
        {categoria: "entradas", nombre: "Nigiris", descripcion: "(4 piezas) Camarón, atún, salmón, pulpo.", precio: "$200", imagen: "/img/nigiri.webp"},
        {categoria: "entradas", nombre: "Curricanes.", descripcion: "(4 piezas) De atún y salmón rellenas de tampico, aguacate, pepino y mango bañados en salsa rayú y ponzu coronados de cebollín y germinados.", precio: "$200", imagen: "/img/curricanes.jpg"},
        {categoria: "entradas", nombre: "Tiradito de Atún", descripcion: "Láminas de atún bañadas en salsa soya preparada, acompañada de aguacate, cebolla morada,chile serrano y cebollín.", precio: "$220", imagen: "/img/tiradito-atun.webp"},
        {categoria: "entradas", nombre: "Shot de mariscos", descripcion: "Camarón crudo, pulpo y pepino", precio: "$60", imagen: "/img/shot-marisco.jpg"},
        {categoria: "entradas", nombre: "Paté de camarón o marlin", descripcion: "Acompañado de totopos o galletas.", precio: "$150", imagen: "/img/pate-camaron.jpg"},
        {categoria: "entradas", nombre: "Esferas Nassau de atún y salmón", descripcion: "(4 piezas) Rellenas de tampico y philadelphia.", precio: "$220", imagen: "/img/esferas.webp"},
        {categoria: "entradas", nombre: "Tuna beats", descripcion: "(3 piezas) Bocadillos de atún spicy sobre galletas de arroz empanizado.", precio: "$220", imagen: "/img/tuna-beats.jpg"},
        // {categoria: "entradas", nombre: "Sashimi callo de hacha", descripcion: "100 gr. preguntar por diponibilidad y precio según temporada.", precio: "", imagen: ""},
        {categoria: "entradas", nombre: "Queso fundido", descripcion: "Natural, chilorio o chorizo.", precio: "$180", imagen: ""},
        {categoria: "entradas", nombre: "Bahamian Rolls", descripcion: "Rollitos crujientes rellenos de camarón y queso crema acompañados de aderezo mango/chipotle.", precio: "$190", imagen: "/img/bahamians.webp"},
        {categoria: "fritos", nombre: "Chicharrón de calamar", descripcion: "Calamar crujiente salteado en aceite de ajonjolí y chile de árbol.", precio: "$250", imagen: "/img/chicharron-calamar.jpg"},
        {categoria: "fritos", nombre: "Chicharrón de atún", descripcion: "Tiras de atún crujientes salteadas en un aceite de ajonjolí y chile chiltepín.", precio: "$250", imagen: "/img/chicharron-atun.webp"},
        {categoria: "fritos", nombre: "Chicharrón de Rib Eye", descripcion: "Montado sobre cama de guacamole.", precio: "$280", imagen: "/img/chicharron-rib-eye.jpg"},
        {categoria: "fritos", nombre: "Camarones roca", descripcion: "Camarones tempura bañados en salsa especial de la casa", precio: "$290", imagen: "/img/camaron-roca.jpg"},
        {categoria: "fritos", nombre: "Camarones Long Island", descripcion: "Bañados en crema poblana, al gratín.", precio: "$240", imagen: "/img/camaron-long-island.webp"},
        {categoria: "fritos", nombre: "Camarones sweety", descripcion: "Camarones crujientes marinados en crema caramelizada.", precio: "$220", imagen: "/img/camaron-sweety.jpg"},
        {categoria: "fritos", nombre: "Camarones al coco", descripcion: "Tradicionales camarones al coco acompañados con salsa agridulce de mango.", precio: "$220", imagen: "/img/camaron-coco.webp"},
        {categoria: "fritos", nombre: "Buñuelos de camarón", descripcion: "7 Búñuelos dulces de camarón con punto de queso crema bañados con la salsa de la casa.", precio: "$240", imagen: "/img/bunuelos.jpg"},
        {categoria: "fritos", nombre: "Coliflor Roca", descripcion: "Trozos de coliflor capeada sobre una ensalada, con un toque de aderezo roca..", precio: "$240", imagen: "/img/coliflor.jpg"},
        {categoria: "tostadas", nombre: "Pink sands", descripcion: "Tostado con atún marinado en salsa ponzu aguacate ajonjolí y germinado.", precio: "$110", imagen: "/img/pink-sands.jpg"},
        {categoria: "tostadas", nombre: "Mariana", descripcion: "Tostada de camarón, pulpo y kanikama con tiras de pepino, bañada en clamato picoso de la casa.", precio: "$130", imagen: "/img/mariana.jpg"},
        {categoria: "tostadas", nombre: "Atún crunch", descripcion: "Tostada de atún marinado, aguacate y un crunch de surimi, acompañado con salsa ponzú.", precio: "$125", imagen: "/img/atun-crunch.jpg"},
        {categoria: "tostadas", nombre: "Atlantis", descripcion: "Atún o camarón con mango y un salseado especial.", precio: "$110", imagen: "/img/atlantis-atun.jpg"},
        {categoria: "tostadas", nombre: "Paradise", descripcion: "Aguachile de camarón con un toque especial del chef.", precio: "$115", imagen: "/img/tostada-paradise.jpg"},
        {categoria: "tostadas", nombre: "Queen's", descripcion: "Ceviche de sierra.", precio: "$110", imagen: "/img/tostada-queens.jpg"},
        {categoria: "fria", nombre: "Barrita de ceviches", descripcion: "Tres ceviches: Rojo: camarón cocido con pepino y cebolla morada; Verde: camarón crudo en salsa verde con aguacate y cebollín; Negro: camarón crudo en salsa negra con cebolla y pepino.", precio: "$300", imagen: "/img/barrita.webp"},
        {categoria: "fria", nombre: "Ceviche Bahamas Crab", descripcion: "Ceviche de surimi, kanikama y camarón, con pepino en cubos, en mix de salsa especial acompañado de togarashi.", precio: "$240", imagen: "/img/bahamas-crab.jpg"},
        {categoria: "fria", nombre: "Ceviche Sidney", descripcion: "Mix de mariscos camarón crudo, cocido y pulpo, mezclado con una combinación de coco, jícama, zanahoria y pepino sobre una base de frituras de maíz.", precio: "$280", imagen: "/img/ceviche-sidney.jpg"},
        {categoria: "fria", nombre: "Aguachile Rojo", descripcion: "Camarón crudo o cocido bañado en salsa de chile de árbol.", precio: "$250", imagen: "/img/aguachile-rojo.jpg"},
        {categoria: "fria", nombre: "Aguachile Verde", descripcion: "Camarón crudo o cocido bañado en salsa de chile serrano.", precio: "$250", imagen: "/img/aguachile-verde.jpg"},
        {categoria: "fria", nombre: "Aguachile Negro", descripcion: "Camarón crudo o cocido bañado en salsa tatemada,pepino,aguacate y cama de cebolla.", precio: "$260", imagen: "/img/aguachile-negro.jpg"},
        {categoria: "fria", nombre: "Aguachile Mango-Habanero", descripcion: "Camarón crudo o cocido bañado en salsa mango y habanero.", precio: "$280", imagen: "/img/aguachile-mango-habanero.jpg"},
        {categoria: "fria", nombre: "Mariscada Bahamas", descripcion: "Surtido de mariscos bañados en nuestra SALSA REY ESPECIAL.", precio: "$450", imagen: "/img/mariscada.jpg"},
        {categoria: "fria", nombre: "Coctail de camarón", descripcion: "Fresco cóctel de camarón cocido con cebolla morada y pepino, en jugo de camarón.", precio: "$250", imagen: "/img/coctel.webp"},
        {categoria: "fria", nombre: "Coctail de Pulpo", descripcion: "Cóctel de pulpo con cebolla morada pepino y jugo de camarón.", precio: "$250", imagen: "/img/coctel.webp"},
        {categoria: "ensaladas", nombre: "Cesar", descripcion: "Mix de lechugas, parmesano fresco, aceituna negra, crotones, pollo a la plancha y su tradicional aderezo cesar.", precio: "$200", imagen: "/img/ensalada-cesar.webp"},
        {categoria: "ensaladas", nombre: "Cabbage beach", descripcion: "Espinaca baby, queso de cabra, arándanos secos, fresa y nuez, bañada en miel mostaza.", precio: "$195", imagen: "/img/cabbage-beach.jpg"},
        {categoria: "ensaladas", nombre: "Berry island", descripcion: "Mix de lechugas pepino tomate cherry aguacate aceituna negra y 100 gramos de camarón a la al mojo de ajo con un toque de chimichurri.", precio: "$195", imagen: "/img/berry-island.jpg"},
        {categoria: "tacos", nombre: "Gobernador", descripcion: "", precio: "$110", imagen: "/img/taco-gobernador.jpg"},
        {categoria: "tacos", nombre: "Costra camarón", descripcion: "", precio: "$125", imagen: "/img/costra-camaron.jpg"},
        {categoria: "tacos", nombre: "Costra rib eye", descripcion: "", precio: "$140", imagen: "/img/costra-ribeye.jpg"},
        {categoria: "tacos", nombre: "Costra arrachera", descripcion: "", precio: "$125", imagen: "/img/costra-arrachera.jpg"},
        {categoria: "tacos", nombre: "Bahamas", descripcion: "Atún o salmón en salsa macha.", precio: "$135", imagen: "/img/taco-bahamas.jpg"},
        {categoria: "tacos", nombre: "Vampiro mar y tierra", descripcion: "Camarón y rib eye.", precio: "$140", imagen: "/img/vampiro.jpg"},
        {categoria: "tacos", nombre: "Tacos novillo", descripcion: "(3 pz) chamberete cocinado a fuego lento sobre tortillas echas a mano con cebollita, cilantro y aguacate.", precio: "$295", imagen: "/img/tacos-novillo.jpg"},
        {categoria: "tacos", nombre: "Tacos de la calle", descripcion: "(3 piezas) Mezcla de 3 carnes costilla, chistorra y chorizo al grill, acompañados con cebolla curtida y guacamole, coronados con fritura pulverizada.", precio: "$260", imagen: "/img/tacos-calle.jpg"},
        {categoria: "tacos", nombre: "Sopes de vacío", descripcion: "(4 piezas) Vacío asado, montado sobre los sopes con asientos, coronados con frijol, guacamole y cebolla curtida.", precio: "$300", imagen: "/img/sopes-vacio.jpg"},
        {categoria: "especialidades", nombre: "Pechuga rellena", descripcion: "Pechuga rellena de jamón y queso envuelta en tocino, puré de papa y salsa especial de tamarindo..", precio: "$295", imagen: "/img/pechuga-rellena.jpg"},
        {categoria: "especialidades", nombre: "Rib eye al mojo de ajo y romero", descripcion: "(420 gr) Rib eye montado sobre un cebolla asada espárragos y tomate cherry bañados al ajo y romero.", precio: "$780", imagen: "/img/rib-eye-romero.jpg"},
        {categoria: "especialidades", nombre: "Pulpo al ajillo", descripcion: "Pulpo entero cocinado al ajillo acompañado de arroz y calabaza frita montado en espinaca y morron.", precio: "$340", imagen: "/img/pulpo-ajillo.jpg"},
        {categoria: "especialidades", nombre: "Salmón Rose Island", descripcion: "Salmón sobre un guiso de morrones y mango bañado en salsa especial de tamarindo coronado con germinado.", precio: "$360", imagen: "/img/salmon-rose-island.jpg"},
        {categoria: "especialidades", nombre: "Costillas pig beach", descripcion: "(500 gr.) BBQ, búfalo, chilpetín-parmesano.", precio: "$350", imagen: "/img/costillas.jpg"},
        {categoria: "especialidades", nombre: "Aguachile Bahamas", descripcion: "(420 gr) de rib eye bañado con una salsa martajada de vegetales especiales acompañada con lechuga italiana y calabaza al grill con un toque de queso parmesano.", precio: "$780", imagen: "/img/aguachile-bahamas.jpg"},
        {categoria: "especialidades", nombre: "Salmón en crema de hinojo", descripcion: "Acompañado de salteado de espárragos, espinaca, champiñones y tomate cherry.", precio: "$360", imagen: "/img/salmon-hinojo.jpg"},
        {categoria: "especialidades", nombre: "Coliflor zarandeada", descripcion: "Coliflor bañada en adobo, coronada con chile quebrado, morrón y col morada.", precio: "$290", imagen: "/img/coliflor-zarandeada.jpg"},
        {categoria: "parrilla", nombre: "Brochetas punta sur", descripcion: "4 piezas mixtas de res y camarón.", precio: "$350", imagen: "/img/brochetas.webp"},
        {categoria: "parrilla", nombre: "Corte rib eye (calidad gold prime)", descripcion: "450 gr. acompañado de espárragos con tocino, tomates al chimichurri y papa al horno.", precio: "$880", imagen: "/img/rib-eye-prime.webp"},
        {categoria: "parrilla", nombre: "Arrachera", descripcion: "(400gr)Arrachera al grill con un frijol charro, guacamole y salsa bandera.", precio: "$550", imagen: "/img/arrachera.webp"},
        {categoria: "parrilla", nombre: "Vacío", descripcion: "Corte vacío en una cama de puré de papa, acompañado de una reducción de vino tinto y un mix de espinaca, betabel y esparragos asados.", precio: "$750", imagen: "/img/vacio.jpg"},
        {categoria: "parrilla", nombre: "Hamburguesa de sirloin", descripcion: "Molida de sirloin premium en pan brioche acompañada de papas.", precio: "$265", imagen: "/img/hamburguesa-srloin.webp"},
        {categoria: "parrilla", nombre: "Atún al Grill", descripcion: "Atún al grill bañado de salsa ciruela, sobre un puré de papa. Acompañado de una ensalada tropical.", precio: "$290", imagen: "/img/atun-grill.jpg"},
        {categoria: "pastas", nombre: "Fetuccini Alfredo", descripcion: "Con pollo o camarón.", precio: "$220", imagen: "/img/fetuccini-alfredo.jpg"},
        {categoria: "pastas", nombre: "Princess Cay", descripcion: "Camarón y pulpo bechamel y chipotle.", precio: "$250", imagen: "/img/princess-cay.jpg"},
        {categoria: "pastas", nombre: "Pasta poblana", descripcion: "Pollo o camarón.", precio: "$220", imagen: "/img/pasta-poblana.jpg"},
        {categoria: "arroz-frito", nombre: "Arroz Bahamas", descripcion: "Nuestro delicioso arroz especial preparado con camarón y pulpo", precio: "$340", imagen: "/img/arroz-bahamas.jpg"},
        {categoria: "arroz-frito", nombre: "Arroz Lucaya", descripcion: "Cama de arroz oriental con pollo en salsa tai.", precio: "$300", imagen: "/img/lucaya.jpg"},
        {categoria: "sushi", nombre: "Atlántico", descripcion: "Rollo natural relleno de camarón, pepino y philadelphia, forrado de aguacate, trozos de camarón empanizado y anguila, acompañado de tampico.", precio: "$280", imagen: "/img/atlantico.jpg"},
        {categoria: "sushi", nombre: "Nassau roll", descripcion: "Rollo natural relleno de pepino y kanikama, cubierto con kanikama, encima aguacate, philadelphia y trozos de camarón empanizado, coronado con togarashi, cebollín y anguila.", precio: "$280", imagen: "/img/nassau.jpg"},
        {categoria: "sushi", nombre: "Samaná", descripcion: "Rollo natural relleno de philadelphia, tocino, aguacate, camarón, cubierto de salmón flameado, coronado con srirasha y ajonjolí.", precio: "$270", imagen: "/img/samana.jpg"},
        {categoria: "sushi", nombre: "Big Major", descripcion: "Rollo natural relleno de salmón, pepino y aguacate, alga por fuera, encima sashimi de atún, con espejo de salsa ponzú y coronado con germinado.", precio: "$240", imagen: "/img/big-mayor.jpg"},
        {categoria: "sushi", nombre: "Elbow roll", descripcion: "Camarón pepino Filadelfia aguacate por dentro y tampico con lámina de aguacate, por fuera topping de kanikama con mango, salsa de anguila y ajonjolí.", precio: "$250", imagen: "/img/elbow.jpg"},
        {categoria: "sushi", nombre: "Cococay", descripcion: "Rollo empanizado relleno de tampico, aguacate y pepino, cubierto de spicy, encima camarones roca, cebollín y anguila.", precio: "$280", imagen: "/img/cococay.jpg"},
        {categoria: "sushi", nombre: "Exuma", descripcion: "Rollo empanizado relleno de pollo, res, chile caribe, aguacate y philadelphia, gratinado con queso gouda y coronado con tocino y salsa anguila.", precio: "$280", imagen: "/img/exuma.jpg"},
        {categoria: "sushi", nombre: "Pig Beach", descripcion: "Rollo empanizado relleno de aguacate,pollo,res y tocino coronado de chile serrano y philadelphia sobre espejo de aderezo de cilantro.", precio: "$230", imagen: "/img/pig-beach.jpg"},
        {categoria: "sushi", nombre: "Jukanoo", descripcion: "Rollo horneado relleno de philadelphia, aguacate, surimi empanizado, encima topping de salmón spicy y sweet chilli, cubierto de ajonjolí.", precio: "$270", imagen: "/img/jukano.jpg"},
        {categoria: "sushi", nombre: "Flamingo roll", descripcion: "Sushi sin arroz envuelto en atún coronado con nuestro delicioso topping de kanikama,camarón y trozos frescos de mango.", precio: "$290", imagen: "/img/flamingo-roll.jpg"},
        {categoria: "sushi", nombre: "Minerva roll", descripcion: "Rollo sin arroz, Por fuera pepino relleno de Philadelphia tampico, camarón y aguacate con topping de camarón empanizado y sriracha", precio: "$250", imagen: "/img/minerva-roll.webp"},
        {categoria: "sushi", nombre: "Harbour roll", descripcion: "Rollo horneado relleno de pepino y aguacate forrado de camarón gratinado con un aderezo spicy dulce y rallado de anguila.", precio: "$240", imagen: ""},
        {categoria: "sushi", nombre: "Crooked roll", descripcion: " Rollo empanizado relleno de arrachera, aguacate, pepino y Phila, gratinado con cebollín fresco. Coronado con nuestro topping especial de camarón empanizado bañado en aderezos de la casa. Anguila y ajonjolí.", precio: "$270", imagen: "/img/crooked-roll.webp"},
        {categoria: "kids", nombre: "Cajita feliz kids", descripcion: "Cheese burger o mini sushi (incluye juguete).", precio: "$220", imagen: ""},
        {categoria: "kids", nombre: "Cajita feliz kids (nuggets)", descripcion: "Deliciosos nuggets de pollo acompañados de papas a la francesa (incluye juguete).", precio: "$220", imagen: "/img/nuggets.jpg"},
        // {categoria: "kids", nombre: "Cajita feliz kids", descripcion: "Cheese burger, incluyen un juguete.", precio: "$200", imagen: ""},
        // {categoria: "kids", nombre: "Cajita feliz kids", descripcion: "Mini-sushi kids, incluyen un juguete.", precio: "$200", imagen: ""},
        // {categoria: "postres", nombre: "Cheesecake \"cococay\"", descripcion: "Base de lotus con coco.", precio: "", imagen: ""},
        // {categoria: "postres", nombre: "Apple's struddel", descripcion: "Acompañado de helado vainilla.", precio: "$180", imagen: "/img/struddel.jpg"},
        {categoria: "postres", nombre: "Rocking cake", descripcion: "Pastel de helado con caramelo y hojaldre.", precio: "$200", imagen: "/img/rocking-cake.jpg"},
        {categoria: "postres", nombre: "Lotus Strawberry Cheesecake", descripcion: ".", precio: "$250", imagen: "/img/lotus.jpg"},
        {categoria: "postres", nombre: "Chocolate Lover", descripcion: "Pastel de chocolate coronado de chocolate en trozos hoja de oro y fresa acompañado de nieve (sabor a elegir) polvo de lotus y cajeta.", precio: "$250", imagen: "/img/chocolate-lover.jpg"},
        {categoria: "postres", nombre: "Sampler de helados", descripcion: "Degustación de nieve artesanal en cono waffle.", precio: "$180", imagen: ""},
        // {categoria: "postres", nombre: "Flan napolitano", descripcion: "", precio: "", imagen: ""},
    ]

    let bebidas = [
        {categoria: "mock-tails", nombre: "Bahamas Berries", descripcion: "Frutos rojos macerados con té de frutos rojos, lima, azucar y refresco de jengibre.", precio: "$110", imagen: ""},
        {categoria: "mock-tails", nombre: "Tropical Passionfruit", descripcion: "Sirope de maracuyá, azucar, lima, jugo de piña. Narural o mineral.", precio: "$110", imagen: "/img/tropical-passionfruit.jpg"},
        // {categoria: "mock-tails", nombre: "Sunrise Bahamas", descripcion: "Mermelada de fresa, albaca, jugo de naranja, jugo de toronja y jugo de limón", precio: "$110", imagen: ""},
        {categoria: "mock-tails", nombre: "Purple cherry", descripcion: "Almibar de cereza, limón, menta, refresco de lima, butterfly pea flower tea.", precio: "$110", imagen: "/img/purple-cherry.jpg"},
        {categoria: "cervezas", nombre: "Corona Extra", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Corona Light", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Corona Golden Light", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Modelo especial", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Modelo negra", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Pacífico clara", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Pacífico suave", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Pacífico light", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Tekate roja", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Tekate light", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Michelob ultra", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Amstel ultra", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "cervezas", nombre: "Rifadita", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "bebidas", nombre: "Limonada", descripcion: "", precio: "$65", imagen: ""},
        {categoria: "bebidas", nombre: "Limonada Minreal", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "bebidas", nombre: "Naranjada", descripcion: "", precio: "$65", imagen: ""},
        {categoria: "bebidas", nombre: "Naranjada Minreal", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "bebidas", nombre: "Agua natural Leven", descripcion: "", precio: "$55", imagen: ""},
        {categoria: "bebidas", nombre: "Agua natural Fiji", descripcion: "", precio: "$70", imagen: ""},
        {categoria: "bebidas", nombre: "Topo Chico", descripcion: "", precio: "$60", imagen: ""},
        {categoria: "bebidas", nombre: "Agua de piedra mineral", descripcion: "", precio: "$90", imagen: ""},
        {categoria: "bebidas", nombre: "Perrier", descripcion: "", precio: "$85", imagen: ""},
        {categoria: "bebidas", nombre: "Agua Tónica", descripcion: "", precio: "$60", imagen: ""},
        {categoria: "bebidas", nombre: "Refrescos", descripcion: "", precio: "$60", imagen: ""},
        {categoria: "bebidas", nombre: "Redbull", descripcion: "", precio: "$95", imagen: ""},
        {categoria: "bebidas", nombre: "Boost", descripcion: "", precio: "$75", imagen: ""},
        {categoria: "mixologia", nombre: "Sweet pineapple", descripcion: "Mezcla de ron de frambuesa, jarabe de piña casero, jugo de lima y refresco de jengibre.", precio: "$220", imagen: "/img/sweet-pineapple.webp"},
        {categoria: "mixologia", nombre: "Flamingo", descripcion: "Bebida estilo martini a base de cordial de frambuesa, vodka, jugo de lima y arándano.", precio: "$210", imagen: "/img/flamingo.webp"},
        // {categoria: "mixologia", nombre: "Guanaba Bahia", descripcion: "Ron, puré de guanábana, sirope de almendras y mermelada de fresa o mango.", precio: "$200", imagen: "/img/guanabana-bahia.jpg"},
        // {categoria: "mixologia", nombre: "Citrus frangola", descripcion: "Mermelada de fresa, jugo de limón real, jugo de toronja, jugo de naranja", precio: "$200", imagen: ""},
        {categoria: "mixologia", nombre: "Nassau", descripcion: "Whisky, compota de lychee, gugo de lima, butterfly pea tea.", precio: "$210", imagen: "/img/nassau.webp"},
        {categoria: "mixologia", nombre: "Luciérnaga", descripcion: "Frambuesa y hojas de menta maceradas con ron y tequila reposado, jugo de arándano y sirope de anís.", precio: "$230", imagen: "/img/luciernaga.jpg"},
        // {categoria: "mixologia", nombre: "Mangorita smoked", descripcion: "Tequila reposado, licor de chile ancho, compota de mango y miel de agave.", precio: "$235", imagen: "/img/margarita-smoked.jpg"},
        {categoria: "mixologia", nombre: "Mezcalita", descripcion: "De jamaica, maracuyá, frutos rojos, piña o fresa.", precio: "$190", imagen: "/img/mezcalita.webp"},
        {categoria: "mixologia", nombre: "Rosa Bimini", descripcion: "Infusión de vino rosado y frutos rojos, jugo de arándano, limón y refresco de jengibre.", precio: "$210", imagen: "/img/rosa-bimini.webp"},
        {categoria: "mixologia", nombre: "Red Storm", descripcion: "Vodka, aperol, jugo de piña, jugo de naranja. Decorado con rayadura de naranja con sal, una ramita de perejil chino y división de aperol.", precio: "$200", imagen: "/img/red-storm.webp"},
        {categoria: "mixologia", nombre: "Flame Aperol", descripcion: "Aperol, gin tanqueray, top de fanta de naranja, sirope de sandia. Decorado con láminas de pepino y una fresa en flor.", precio: "$200", imagen: "/img/flame-aperol.webp"},
        {categoria: "mixologia", nombre: "Saint Passion", descripcion: "Fresa macerada, Hpnotiq y Saint Germain con un toque de arandano y cereza.", precio: "$220", imagen: "/img/santa-pasion.webp"},
        {categoria: "cocteleria", nombre: "Avión de Shots", descripcion: "", precio: "$1,000", imagen: ""},
        {categoria: "cocteleria", nombre: "Happy Birthday", descripcion: "", precio: "$800", imagen: ""},
        {categoria: "cocteleria", nombre: "Piña Colada", descripcion: "Ron Malibú, crema de coco, leche evaporada y jugo de piña", precio: "$160", imagen: "/img/pina-colada.webp"},
        {categoria: "cocteleria", nombre: "Mai Tai", descripcion: "Ron blanco, azul de curacao, sirope de almendras y jugo de limón.", precio: "$155", imagen: "/img/mai-tai.webp"},
        {categoria: "cocteleria", nombre: "Cosmopólitan", descripcion: "Vodka de mandarina, licor de naranja y jugo de arándano.", precio: "$160", imagen: ""},
        {categoria: "cocteleria", nombre: "Long Island Ice Tea", descripcion: "Ron blanco, ginebra, vodka, tequila blanco, licor de naranja y coca-cola.", precio: "$160", imagen: ""},
        {categoria: "cocteleria", nombre: "Hawaii Blue", descripcion: "Ron Malibú, azul de curacao, crema de coco, leche evaporada y jugo de piña.", precio: "$165", imagen: "/img/hawaiian-blue.webp"},
        {categoria: "cocteleria", nombre: "Mojito", descripcion: "Ron, limón, azucar y menta (Tradicional, frutos rojos, mango, fresa, lychee o maracuyá.).", precio: "$140", imagen: "/img/mojito-frutos.webp"},
        {categoria: "cocteleria", nombre: "Martinis", descripcion: "Martini frutos rojos, Martini seco.", precio: "$160", imagen: ""},
        {categoria: "cocteleria", nombre: "Martini de lychee", descripcion: ".", precio: "$160", imagen: "/img/martini-lichie.webp"},
        {categoria: "cocteleria", nombre: "Negroni", descripcion: "Ginebra, Campari y Vermouth blanco", precio: "$150", imagen: ""},
        {categoria: "cocteleria", nombre: "Margarita", descripcion: "De limón, fresa, maracuya, fresa o frutos rojos.", precio: "$150", imagen: ""},
        {categoria: "cocteleria", nombre: "Sangría", descripcion: "Vino tinto, refersco de manzana y fruta", precio: "$160", imagen: "/img/claricot.jpg"},
        {categoria: "cocteleria", nombre: "Clericot", descripcion: "Vino (Tinto, Rosado o Blanco), soda y fruta.", precio: "$160", imagen: "/img/clericot.webp"},
        {categoria: "cafe", nombre: "Café", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "cafe", nombre: "Americano", descripcion: "", precio: "$60", imagen: ""},
        {categoria: "cafe", nombre: "Espresso", descripcion: "", precio: "$60", imagen: ""},
        {categoria: "cafe", nombre: "Café Latte", descripcion: "", precio: "$80", imagen: ""},
        {categoria: "cafe", nombre: "Vainilla Latte", descripcion: "", precio: "$75", imagen: ""},
        {categoria: "digestivos", nombre: "Digestivos", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo", descripcion: "", precio: "$130", imagen: "/img/carajillo.webp"},
        {categoria: "digestivos", nombre: "Carajillo Bahamas", descripcion: "Con crema de coco, miel de agave, canela y leche evaporada.", precio: "$190", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo Baileys", descripcion: "", precio: "$190", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo Affogato", descripcion: "", precio: "$230", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo Mazapán", descripcion: "", precio: "$230", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo Ferrero", descripcion: "", precio: "$250", imagen: "/img/carajillo-ferrero.webp"},
        {categoria: "digestivos", nombre: "Strega", descripcion: "", precio: "$140", imagen: ""},
        {categoria: "digestivos", nombre: "Baileys", descripcion: "", precio: "$140", imagen: ""},
        {categoria: "digestivos", nombre: "kahlúa", descripcion: "", precio: "$110", imagen: ""},
        {categoria: "digestivos", nombre: "Frangelico", descripcion: "", precio: "$130", imagen: ""},
        {categoria: "digestivos", nombre: "Licor 43", descripcion: "", precio: "$110/$1,600", imagen: ""},
        {categoria: "digestivos", nombre: "Disaronno Amaretto", descripcion: "", precio: "$130", imagen: ""},
        {categoria: "digestivos", nombre: "Vacari", descripcion: "", precio: "$130", imagen: ""},
        {categoria: "destilados", nombre: "Ron", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Bacardí Blanco", descripcion: "", precio: "$100", imagen: ""},
        {categoria: "destilados", nombre: "Bacardí Añejo", descripcion: "", precio: "$110", imagen: ""},
        {categoria: "destilados", nombre: "Captain Morgan", descripcion: "", precio: "$110", imagen: ""},
        {categoria: "destilados", nombre: "Malibú", descripcion: "", precio: "$130", imagen: ""},
        {categoria: "destilados", nombre: "Matusalem Gran Reserva", descripcion: "", precio: "$140", imagen: ""},
        {categoria: "destilados", nombre: "Reserva Zacapa 23", descripcion: "", precio: "$190", imagen: ""},
        {categoria: "destilados", nombre: "Whisky", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Chivas Regal 12", descripcion: "", precio: "$170", imagen: ""},
        {categoria: "destilados", nombre: "Old Parr", descripcion: "", precio: "$170", imagen: ""},
        {categoria: "destilados", nombre: "Buchanan's 12", descripcion: "", precio: "$180", imagen: ""},
        {categoria: "destilados", nombre: "Buchanan's 18", descripcion: "", precio: "$280", imagen: ""},
        {categoria: "destilados", nombre: "Etiqueta Negra", descripcion: "", precio: "$180", imagen: ""},
        {categoria: "destilados", nombre: "Etiqueta Dorada", descripcion: "", precio: "$240", imagen: ""},
        {categoria: "destilados", nombre: "Etiqueta Azúl", descripcion: "", precio: "$650", imagen: ""},
        {categoria: "destilados", nombre: "Macallan 12", descripcion: "", precio: "$360", imagen: ""},
        {categoria: "destilados", nombre: "Vodka & Ginebra", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Absolute Azúl", descripcion: "", precio: "$100", imagen: ""},
        {categoria: "destilados", nombre: "Absolute Mandarin", descripcion: "", precio: "$110", imagen: ""},
        {categoria: "destilados", nombre: "Absolute Raspberry", descripcion: "", precio: "$110", imagen: ""},
        {categoria: "destilados", nombre: "Stolichnaya", descripcion: "", precio: "$140", imagen: ""},
        {categoria: "destilados", nombre: "Beefeater", descripcion: "", precio: "$150", imagen: ""},
        {categoria: "destilados", nombre: "Bombay Sapphire", descripcion: "", precio: "$160", imagen: ""},
        {categoria: "destilados", nombre: "Tanqueray", descripcion: "", precio: "$190", imagen: ""},
        {categoria: "destilados", nombre: "Hendrick's", descripcion: "", precio: "$190", imagen: ""},
        {categoria: "destilados", nombre: "Gin Mom", descripcion: "", precio: "$190", imagen: ""},
        {categoria: "destilados", nombre: "Tequila & Mezcal", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "José Cuervo Reposado", descripcion: "", precio: "$120", imagen: ""},
        {categoria: "destilados", nombre: "José Cuervo Plata", descripcion: "", precio: "$120", imagen: ""},
        {categoria: "destilados", nombre: "Don Julio Blanco", descripcion: "", precio: "$150", imagen: ""},
        {categoria: "destilados", nombre: "Don Julio Reposado", descripcion: "", precio: "$190", imagen: ""},
        {categoria: "destilados", nombre: "Don Julio Añejo", descripcion: "", precio: "$155", imagen: ""},
        {categoria: "destilados", nombre: "Don Julio 70", descripcion: "", precio: "$200", imagen: ""},
        {categoria: "destilados", nombre: "Maestro Dobel", descripcion: "", precio: "$200", imagen: ""},
        {categoria: "destilados", nombre: "400 Conejos", descripcion: "", precio: "$180", imagen: ""},
        {categoria: "destilados", nombre: "Mezcal Bahamas Social", descripcion: "", precio: "$165", imagen: ""},
        {categoria: "destilados", nombre: "Vinos de casa", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Tintos", descripcion: "subtitulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Casa Madero 3V", descripcion: "", precio: "$280/$1,100", imagen: ""},
        {categoria: "destilados", nombre: "L.A. Cetto Merlot", descripcion: "", precio: "$190/$900", imagen: ""},
        {categoria: "destilados", nombre: "Los Árboles Malbec", descripcion: "", precio: "$230/$1,000", imagen: ""},
        {categoria: "destilados", nombre: "Rosados", descripcion: "subtitulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Casa Madero V", descripcion: "", precio: "$200/$1,300", imagen: ""},
        {categoria: "destilados", nombre: "Beringer White Zinfandel", descripcion: "", precio: "$180/$800", imagen: ""},
        {categoria: "destilados", nombre: "L.A. Cetto Blanc de Zinfandel", descripcion: "", precio: "$180/$600", imagen: ""},
        {categoria: "destilados", nombre: "Blancos", descripcion: "subtitulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Casa Madero 2V", descripcion: "", precio: "$210/$1,200", imagen: ""},
        {categoria: "destilados", nombre: "Stella Moscato", descripcion: "", precio: "$190/$1,300", imagen: ""},
        {categoria: "destilados", nombre: "L.A. Cetto Blanco", descripcion: "", precio: "$180/$900", imagen: ""},
        {categoria: "destilados", nombre: "Champagne", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Moët & Chandon Brutt", descripcion: "", precio: "$2,900", imagen: ""},
        {categoria: "destilados", nombre: "Moët & Chandon Ice", descripcion: "", precio: "$3,600", imagen: ""},
        {categoria: "destilados", nombre: "Moët & Chandon Ice Rose", descripcion: "", precio: "$4,000", imagen: ""},
        {categoria: "destilados", nombre: "Dom Perignon", descripcion: "", precio: "$14,500", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Ron", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Bacardí Blanco", descripcion: "", precio: "$800", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Bacardí Añejo", descripcion: "", precio: "$1,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Captain Morgan", descripcion: "", precio: "$800", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Whisky", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Old Parr", descripcion: "", precio: "$2,100", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Etiqueta Negra", descripcion: "", precio: "$2,200", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Etiqueta Dorada", descripcion: "", precio: "$2,800", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Etiqueta Azul", descripcion: "", precio: "$10,500", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Buchanan's 12", descripcion: "", precio: "$2,200", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Buchanan's 18", descripcion: "", precio: "$3,800", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Mcallan 12", descripcion: "", precio: "$4,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Cognac", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Hennessey VSOP", descripcion: "", precio: "$3,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Martell VSOP", descripcion: "", precio: "$3,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Remy Martin VSOP", descripcion: "", precio: "$2,800", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Tequila & Mezcal", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados-botellas", nombre: "José Cuervo Reposado", descripcion: "", precio: "$900", imagen: ""},
        {categoria: "destilados-botellas", nombre: "José Cuervo Plata", descripcion: "", precio: "$1,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Don Julio Blanco", descripcion: "", precio: "$1,400", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Don Julio Reposado", descripcion: "", precio: "$1,500", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Don Julio Añejo", descripcion: "", precio: "$1,600", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Don Julio 70", descripcion: "", precio: "$2,600", imagen: ""},
        {categoria: "destilados-botellas", nombre: "1800 cristalino", descripcion: "", precio: "$3,400", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Casa Dragones", descripcion: "", precio: "$4,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Clase Azul", descripcion: "", precio: "$6,500", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Maestro Dobel", descripcion: "", precio: "$2,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Maestro Dobel Atelier", descripcion: "", precio: "$9,500", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Tequila 30-30 Blanco", descripcion: "", precio: "$1,100", imagen: "/img/3030-blanco.jpg"},
        {categoria: "destilados-botellas", nombre: "Tequila 30-30 Reposado", descripcion: "", precio: "$1,200", imagen: "/img/3030-reposado.jpg"},
        {categoria: "destilados-botellas", nombre: "Tequila 30-30 Cristalino", descripcion: "", precio: "$2,300", imagen: "/img/3030-cristalino.jpg"},
        {categoria: "destilados-botellas", nombre: "Tequila 30-30 Añejo", descripcion: "", precio: "$2,200", imagen: "/img/3030-anejo.jpg"},
        {categoria: "destilados-botellas", nombre: "Contraluz", descripcion: "", precio: "$2,300", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Mezcal Social Bahamas", descripcion: "", precio: "$1,200", imagen: ""},
        {categoria: "destilados-botellas", nombre: "400 Conejos", descripcion: "", precio: "$1,800", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Gran Malo de horchata", descripcion: "", precio: "$1,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Arte Azul Rosa Reposado", descripcion: "", precio: "$4,500", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Vodka & Ginebra", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Absolute Mandarin", descripcion: "", precio: "$900", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Absolute Raspberry", descripcion: "", precio: "$900", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Stolichnaya", descripcion: "", precio: "$1,000", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Beefeater", descripcion: "", precio: "$1,600", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Beefeater", descripcion: "", precio: "$1,600", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Beefeater", descripcion: "", precio: "$1,600", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Tanqueray", descripcion: "", precio: "$1,500", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Bombay Sapphire", descripcion: "", precio: "$1,800", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Hendrick's", descripcion: "", precio: "$2,400", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Gin Mom", descripcion: "", precio: "$2,100", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Licores", descripcion: "titulo", precio: "", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Hipnotiq", descripcion: "", precio: "$1,700", imagen: ""},
        {categoria: "destilados-botellas", nombre: "Servicios", descripcion: "Todas las botella incluyen 4 botellas 355 ml. a escoger entre agua mineral, natural y refrescos.", precio: "", imagen: "titulo"},
    ]

    let parallaxImages = [
        { src: '/img/palma-izq.png', alt: '', speed: 1 },
        { src: '/img/palma-der.png', alt: '', speed: 1 },
    ];

    let isModalOpen = false;
    let selectedImageUrl = '';
    let selectedNombrePlatillo = '';

    function openModal(imageUrl, nombrePlatillo) {
        selectedImageUrl = imageUrl;
        selectedNombrePlatillo = nombrePlatillo;
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
    }

    function filterPlatillos(categoria) {
        return platillos.filter(platillo => platillo.categoria === categoria);
    }

    function filterBebidas(categoria) {
        return bebidas.filter(bebida => bebida.categoria === categoria);
    }

</script>

<img class="px-4 bg-white" src="/img/bahamas-logo.jpg" alt="Bahamas">
<div class="text-center text-verde-bahamas font-montserrat uppercase font-medium">
    <p class="py-2 text-4xl">Menú</p>
</div>

<Carrusel />
<Navbar {menu} on:menuToggle= {handleMenuToggle}/>
<Paralax images={parallaxImages} />
{#if menu === false}
    {#each seccion as lot}
        <section id="{lot.id}" class="mx-2 mt-16 scroll-mt-14">
            <div class="font-bold font-montserrat text-4xl bg-gradient-to-t from-gold-light via-gold to-gold-dark text-transparent bg-clip-text [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">{lot.nombre}</div>
            {#each filterPlatillos(lot.id) as platillo}
            <div class="m-3 text-verde-bahamas font-montserrat">
                <div class="flex">
                    {#if platillo.imagen === ""}
                    <span class="text-lg font-semibold">{platillo.nombre}</span>
                    {:else}
                    <button class="text-left max-w-[75%] text-lg flex items-center font-semibold" on:click={() => openModal(platillo.imagen, platillo.nombre)}>{platillo.nombre}&thinsp;<span class="material-symbols-outlined">
                        photo_camera
                        </span></button>
                    {/if}
                    <span class="grow"></span>
                    <span>{platillo.precio}</span>
                </div>
                <div>{platillo.descripcion}</div>
            </div>
            {/each}
        </section>
    {/each}
{:else}
    {#each seccionBebidas as lotBebidas}
    <section id="{lotBebidas.id}" class="mx-2 mt-16 scroll-mt-14">
        <div class="font-bold font-montserrat text-4xl bg-gradient-to-t from-gold-light via-gold to-gold-dark text-transparent bg-clip-text [text-shadow:_0_1px_0_rgb(0_0_0_/_20%)]">{lotBebidas.nombre}</div>
        {#each filterBebidas(lotBebidas.id) as bebida}
        {#if bebida.descripcion === "titulo"}
        <div class="m-3 text-verde-bahamas font-montserrat">
            <div class="flex justify-center items-center flex-col">
                <div class="text-2xl font-bold">{bebida.nombre}</div>
                <div class="border-t-2 border-verde-bahamas w-full"></div>
            </div>
        </div>
        {:else if bebida.imagen === "titulo"}
        <div class="m-3 text-verde-bahamas font-montserrat">
            <div class="flex justify-center items-center flex-col">
                <div class="text-2xl font-bold">{bebida.nombre}</div>
                <div class="border-t-2 border-verde-bahamas w-full"></div>
            </div>
            <div class="text-lg text-pretty text-center">{bebida.descripcion}</div>
        </div>
        {:else}
        <div class="m-3 text-verde-bahamas font-montserrat">
            <div class="flex">
                {#if bebida.imagen === ""}
                <span class="text-lg font-semibold">{bebida.nombre}</span>
                {:else}
                <button class="text-right text-lg flex items-center font-semibold" on:click={() => openModal(bebida.imagen, bebida.nombre)}>{bebida.nombre}&thinsp;<span class="material-symbols-outlined">
                    photo_camera
                    </span></button>
                {/if}
                <span class="grow"></span>
                <span>{bebida.precio}</span>
            </div>
            <div>{bebida.descripcion}</div>
        </div>
        {/if}
        {/each}
    </section>
    {/each}
{/if}
<div class="m-20">
    .
</div>
<GotoTop />
<Footer />
{#if isModalOpen}
    <Modal imageUrl={selectedImageUrl} nombrePlatillo={selectedNombrePlatillo} closeModal={closeModal} />
{/if}  