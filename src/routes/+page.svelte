<script>
    import Footer from './Footer.svelte'
    import Navbar from './Navbar.svelte'
    import Modal from './Modal.svelte'
	import GotoTop from './GotoTop.svelte';

    let menu = false;

    const handleMenuToggle = (event) => {
        menu = event.detail.menu
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    let seccion = [
        {id: 'entradas', nombre:'Entradas', descripcion:""},
        {id: 'fritos', nombre:'Fritos', descripcion:""},
        {id: 'kids', nombre:'Menú Kids', descripcion:""},
        {id: 'tostadas', nombre:'Tostadas', descripcion:""},
        {id: 'fria', nombre:'Barra Fría', descripcion:""},
        {id: 'aguachiles', nombre:'Aguachiles', descripcion:""},
        {id: 'ensaladas', nombre:'Ensaladas', descripcion:""},
        {id: 'tacos', nombre:'Tacos', descripcion:""},
        {id: 'especialidades', nombre:'Especialidades', descripcion:""},
        {id: 'parrilla', nombre:'A la Parrilla', descripcion:""},
        {id: 'pastas', nombre:'Pastas', descripcion:""},
        {id: 'arroz-frito', nombre:'Arroz Frito', descripcion:""},
        {id: 'sushi', nombre:'Sushi', descripcion:""},
        {id: 'postres', nombre:'Postres', descripcion:""},
    ];

    let seccionBebidas = [
        {id:'mock-tails', nombre:'Mock-tails', descripcion:""},
        {id:'cervezas', nombre:'Cervezas', descripcion:""},
        {id:'bebidas', nombre:'Bebidas', descripcion:""},
        {id:'mixologia', nombre:'Mixología Bahamas', descripcion:""},
        {id:'cocteleria', nombre:'Coctelería Clásica', descripcion:""},
        {id:'digestivos', nombre:'Digestivos & Café', descripcion:""},
        {id:'destilados', nombre:'Destilados', descripcion:""},
    ]

    let platillos = [
        {categoria: "entradas", nombre: "Nigiris (4 piezas)", descripcion: "Camarón, atún, salmón, pulpo.", precio: "$200", imagen: "/img/niguiris.jpg"},
        {categoria: "entradas", nombre: "Curricanes.", descripcion: "De atún y salmón, rellenos de mango, tampico, pepino y aguacate, bañados en rayúy salsa ponzú, coronado con ajonjolí, cebollín, serrano y germinado.", precio: "$200", imagen: ""},
        {categoria: "entradas", nombre: "Tiraditos", descripcion: "(150 gr.) Atún o salmón salseado con el toque especial del chef.", precio: "$220", imagen: "/img/tiradito-salmon.jpg"},
        {categoria: "entradas", nombre: "Shot de mariscos", descripcion: "Camarón crudo, cocido y pulpo", precio: "$50", imagen: "/img/shot-marisco.jpg"},
        {categoria: "entradas", nombre: "Paté de camarón o marlin", descripcion: "(200 gr.) camarón con pulpo", precio: "$180", imagen: "/img/pate-camaron.jpg"},
        {categoria: "entradas", nombre: "Esferas Nasáu de atún y salmón", descripcion: "Rellenas de tampico y philadelphia.", precio: "$220", imagen: ""},
        {categoria: "entradas", nombre: "Sashimi callo de hacha", descripcion: "100 gr.", precio: "$250", imagen: ""},
        {categoria: "entradas", nombre: "Queso fundido", descripcion: "(250 gr.) Natural, chilorio o chorizo.", precio: "", imagen: ""},
        {categoria: "fritos", nombre: "Chicharrón de calamar", descripcion: "(150 gr.) Al árbol.", precio: "$190", imagen: "/img/chicharron-calamar.jpg"},
        {categoria: "fritos", nombre: "Chicharrón de atún", descripcion: "(200 gr.) Chiltepín", precio: "$190", imagen: "/img/chicarron-atun.jpg"},
        {categoria: "fritos", nombre: "Guacamole", descripcion: "Con chicharrón de rib-eye o botete (150 gr.)", precio: "$210", imagen: "/img/chicharron-rib-eye.jpg"},
        {categoria: "fritos", nombre: "Camarones roca", descripcion: "(200 gr.) ", precio: "$190", imagen: "/img/camaron-roca.jpg"},
        {categoria: "fritos", nombre: "Camrones Long Island", descripcion: "(200 gr.) Gratinados en crema poblana.", precio: "$200", imagen: ""},
        {categoria: "fritos", nombre: "Camarones sweety", descripcion: "(200 gr.) ", precio: "$220", imagen: ""},
        {categoria: "kids", nombre: "Cajita feliz kids", descripcion: "Nuggets, cheese burger", precio: "$200", imagen: ""},
        {categoria: "tostadas", nombre: "Pink sands", descripcion: "100 gr. de atún maridano, aguacate, cebollín, ajonjolí y germinado, acomparñado con salsa ponzú.", precio: "$110", imagen: "/img/pink-sands.jpg"},
        {categoria: "tostadas", nombre: "Atún crunch", descripcion: "100 gr. de atún marinado, aguacate y un crunch de surimi, acompañado con salsa ponzú.", precio: "$110", imagen: "/img/atun-crunch.jpg"},
        {categoria: "tostadas", nombre: "Atlantis", descripcion: "100 gr. de atún o camarón con mango y un salseado especial.", precio: "$110", imagen: "/img/atlantis-atun.jpg"},
        {categoria: "tostadas", nombre: "Paradise", descripcion: "100 gr. de aguachile de camarón con un toque especial del chef.", precio: "$115", imagen: "/img/tostada-paradise.jpg"},
        {categoria: "tostadas", nombre: "Queen's", descripcion: "150 gr. de ceviche de sierra.", precio: "$95", imagen: "/img/tostada-queens.jpg"},
        {categoria: "fria", nombre: "Barrita de ceviches", descripcion: "(100 gr. de c/u) Sierra, árbol y verde.", precio: "$285", imagen: ""},
        {categoria: "aguachiles", nombre: "Rojo", descripcion: "100 gr.", precio: "$250", imagen: "/img/aguachile-rojo.jpg"},
        {categoria: "aguachiles", nombre: "Verde", descripcion: "100 gr.", precio: "$250", imagen: "/img/aguachile-verde.jpg"},
        {categoria: "aguachiles", nombre: "Negro", descripcion: "100 gr.", precio: "$260", imagen: "/img/aguachile-negro.jpg"},
        {categoria: "aguachiles", nombre: "Mango-habanero", descripcion: "100 gr.", precio: "", imagen: ""},
        {categoria: "ensaladas", nombre: "Cesar", descripcion: "Mix de lechugas, parmesano fresco, eceituna negra, crotones, 150 gr. de pollo a la plancha y su tradicional aderezo cesar.", precio: "$200", imagen: ""},
        {categoria: "ensaladas", nombre: "Cabbage beach", descripcion: "Espinaca baby, queso de cabra, arándanos secos, fresa y nuez, bañada en miel mostaza.", precio: "$195", imagen: ""},
        {categoria: "ensaladas", nombre: "Berry island", descripcion: "Mix de lechugas, pepino, tomate cherry, aguacate y 100 gr. de camarones al mojo de ajo con un toque de vinagre balsámico, chimichurri blueberry fresca.", precio: "$195", imagen: ""},
        {categoria: "tacos", nombre: "Al gobernador", descripcion: "100 gr.", precio: "$95", imagen: ""},
        {categoria: "tacos", nombre: "Costra rib eye", descripcion: "100 gr.", precio: "$125", imagen: ""},
        {categoria: "tacos", nombre: "Costra camarón", descripcion: "", precio: "$120", imagen: ""},
        {categoria: "tacos", nombre: "Bahamas", descripcion: "100 gr. Atún y salmón", precio: "$120", imagen: ""},
        {categoria: "tacos", nombre: "Vampiro mar y tierra", descripcion: "50 gr. de camarón y 50 gr. de rib eye.", precio: "$140", imagen: ""},
        {categoria: "especialidades", nombre: "Pechuga de pollo", descripcion: "Rellena de queso y tocino sobre cama de puré de papa.", precio: "$230", imagen: ""},
        {categoria: "especialidades", nombre: "Rib eye al ajo y romero", descripcion: "(150 gr.) Con cebollita asada, espárragos y tomate cherry.", precio: "$650", imagen: "/img/rib-eye-romero.jpg"},
        {categoria: "especialidades", nombre: "Pulpo al ajillo", descripcion: "(300 gr.) Pulpo entero en cama de arroz frito.", precio: "", imagen: ""},
        {categoria: "especialidades", nombre: "Salmón Rose Island", descripcion: "(240 gr.) Sobre guiso de mango, morrones, tomillo y echalote, bañado en salsa tamarindo spicy.", precio: "", imagen: "/img/salmon-rose-island.jpg"},
        {categoria: "especialidades", nombre: "Costillas pig pig", descripcion: "(500 gr.) BBQ, búfalo, chilpetín-parmesano.", precio: "", imagen: ""},
        {categoria: "especialidades", nombre: "Aguacate Bahamas", descripcion: "Con 400 gr. de rib eye.", precio: "", imagen: ""},
        {categoria: "especialidades", nombre: "Salmón en crema de hinojo", descripcion: "(240 gr.) Acompañado de salteado de espárragos, espinaca, champiñones y tomate cherry.", precio: "", imagen: "/img/salmon-hinojo.jpg"},
        {categoria: "parrilla", nombre: "Brochetas punta sur", descripcion: "(300 gr.) 4 puezas mixtas de res y camarón.", precio: "", imagen: ""},
        {categoria: "parrilla", nombre: "Corte rib eye (calidad gold prime)", descripcion: "350 gr, 400 gr, 500 gr, acompañado de espárragos con tocino, nopal asado, tomates al chimichurri y papa al horno.", precio: "", imagen: ""},
        {categoria: "parrilla", nombre: "Arrachera", descripcion: "(300 gr.) Con cebollita asada y frijoles charros.", precio: "", imagen: ""},
        {categoria: "parrilla", nombre: "Hamburguesa de sirloin", descripcion: "En pan brioche y papas gajo.", precio: "", imagen: ""},
        {categoria: "pastas", nombre: "Fetuccini Alfredo", descripcion: "150 gr. de pollo y 100 gr. de camarón.", precio: "", imagen: "/img/fetuccini-alfredo.jpg"},
        {categoria: "pastas", nombre: "Princess Cay", descripcion: "100 gr. de camarón y 50 gr. de pulpo.", precio: "", imagen: "/img/princess-cay.jpg"},
        {categoria: "pastas", nombre: "Pasta poblana", descripcion: "100 gr. de Pollo o camarón.", precio: "", imagen: "/img/pasta-poblana.jpg"},
        {categoria: "arroz-frito", nombre: "Arroz Bahamas", descripcion: "100 gr. de camarón y 50 gr. de pulpo", precio: "", imagen: ""},
        {categoria: "arroz-frito", nombre: "Arroz Lucaya", descripcion: "Cama de arroz oriental cno 150 gr. de pollo en salsa tai.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Exuma", descripcion: "Rollo empanizado relleno de pollo, res, chile caribe, aguacate y phila delphia, gratinado con queso gouda y coronado con tocino y salsa anguila.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Atlántico", descripcion: "Rollo natural relleno de camarón, pepino y philadelphia, forrado de aguacate, trozos de camarón empanizado y anguila, acompañado de tampico.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Nasáu roll", descripcion: "Rollo natural relleno de pepino y kanikama, cubierto con kanidaka, encima aguacate, philadelphia y trozos de camarón empanizado, coronado con togarashi, cebollín y anguila.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Flamenco", descripcion: "Rollo natural relleno de philadelphia, tocino, aguacate, camarón, cubierto de salmón flameado, coronado con srirasha y ajonjolí.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Cococay", descripcion: "Rollo empanizado relleno de tampico, aguacate y pepino, cubierto de spicy, encima camarones roca, cebollín y anguila.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Jukanoo", descripcion: "Rollo horneado relleno de philadelphia, aguacate, surimi empanizado, encima topping de salmón spicy y sweet chilli, cubierto de ajonjolí.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Big Major", descripcion: "Rollo natural relleno de salmón, pepino y aguacate, alga por fuera, ecima sashimi de atún, con espejo de salsa ponzú y coronado con germinado.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Pig Beach", descripcion: "Rollo empanizado relleno de aguacate, pollo, res y tocino, encima philadelphia y chile serrano, sobre espejo de aderezo de cilantro y coronado con salsa de anguila.", precio: "", imagen: ""},
        {categoria: "sushi", nombre: "Flamingo roll", descripcion: "Sushi sin arroz, de atún relleno de tampico, aguacate y philadelphia.", precio: "", imagen: ""},
        {categoria: "postres", nombre: "Cheesecake \"cococay\"", descripcion: "Base de lotus con coco.", precio: "", imagen: ""},
        {categoria: "postres", nombre: "Apple's struddel", descripcion: "Acompañado de helado vainilla.", precio: "", imagen: ""},
        {categoria: "postres", nombre: "Rocking cake", descripcion: "Pastel de helado con caramelo y hojaldre.", precio: "", imagen: ""},
        {categoria: "postres", nombre: "Flan napolitano", descripcion: "", precio: "", imagen: ""},
    ]

    let bebidas = [
        {categoria: "mock-tails", nombre: "Berries", descripcion: "Frutos rojos macerados con té de frutos rojos, lima, jarabe narural y refresco de lima.", precio: "", imagen: "/img/bahamas-berries.jpg"},
        {categoria: "mock-tails", nombre: "Tropical Passionfruit", descripcion: "Passionfrut syrup, jugo de piña, jugo de limón, menta y agua natural o mineral.", precio: "", imagen: "/img/tropical-passionfruit.jpg"},
        {categoria: "mock-tails", nombre: "Sunrise Bahamas", descripcion: "Fresa macerada con azúcar, albaca, jugo de naranja, jugo de toronja y jugo de limón", precio: "", imagen: ""},
        {categoria: "mock-tails", nombre: "Purple cherry", descripcion: "Almibar de cereza, limón, menta, refresco de lima, butterfly pea flower tea.", precio: "", imagen: "/img/purple-cherry.jpg"},
        {categoria: "cervezas", nombre: "Michelob ultra", descripcion: "", precio: "", imagen: ""},
        {categoria: "cervezas", nombre: "Modelo especial", descripcion: "", precio: "", imagen: ""},
        {categoria: "cervezas", nombre: "Modelo negra", descripcion: "", precio: "", imagen: ""},
        {categoria: "cervezas", nombre: "Pacífico suave", descripcion: "", precio: "", imagen: ""},
        {categoria: "cervezas", nombre: "Pacífico light", descripcion: "", precio: "", imagen: ""},
        {categoria: "bebidas", nombre: "Limonada", descripcion: "", precio: "", imagen: ""},
        {categoria: "bebidas", nombre: "Naranjada", descripcion: "", precio: "", imagen: ""},
        {categoria: "bebidas", nombre: "Agua natural / mineral", descripcion: "", precio: "", imagen: ""},
        {categoria: "bebidas", nombre: "Refrescos", descripcion: "", precio: "", imagen: ""},
        {categoria: "bebidas", nombre: "Perrier", descripcion: "", precio: "", imagen: ""},
        {categoria: "mixologia", nombre: "Sweet pineapple", descripcion: "Tequila blanco, licor de narajanja, miel de agave, jugo de piña y jugo de limón real.", precio: "", imagen: "/img/sweet-pineapple.jpg"},
        {categoria: "mixologia", nombre: "Flamingo", descripcion: "Volda, licor strega, cordial de frutos rojos y pimineta rosa.", precio: "", imagen: "/img/flamingo.jpg"},
        {categoria: "mixologia", nombre: "Guanaba Bahia", descripcion: "Puré de guanabana, mango syrup, jugo de lima y soda", precio: "", imagen: "/img/guanabana.jpg"},
        {categoria: "mixologia", nombre: "Citrus frangola", descripcion: "Mermelada de fresa, jugo de limón real, jugo de toronja, jugo de naranja", precio: "", imagen: ""},
        {categoria: "mixologia", nombre: "Nassau", descripcion: "Compota de lychee, limón real, butterfly pea flower, etiqueta negra", precio: "", imagen: "/img/nassau.jpg"},
        {categoria: "mixologia", nombre: "Margarita smoked", descripcion: "Tequila blanco, licor de chile ancho reyes, compota de mango, miel de agave, paleta de hielo.", precio: "", imagen: "/img/margarita-smoked.jpg"},
        {categoria: "cocteleria", nombre: "Piña Colada", descripcion: "Ron blanco, crema de coco, jarabe, jugo de piña", precio: "", imagen: "/img/pina-colada.jpg"},
        {categoria: "cocteleria", nombre: "Mai Tai", descripcion: "Ron añejo, orgeat, jugo de limón, menta, curacao azul.", precio: "", imagen: "/img/mai-tai.jpg"},
        {categoria: "cocteleria", nombre: "Long Island ice tea", descripcion: "Ron blanco, ginebra, vodka, tequila blanco, licor de naranja y coca-cola.", precio: "", imagen: ""},
        {categoria: "cocteleria", nombre: "Cosmopolitan", descripcion: "Vodka de naranja, licor de naranja, jugo de arandano y limón.", precio: "", imagen: ""},
        {categoria: "cocteleria", nombre: "Hawaii Blue", descripcion: "Ron blanco, curacao azul, crema de cocoy jugo de piña.", precio: "", imagen: "/img/hawaiian-blue.jpg"},
        {categoria: "cocteleria", nombre: "Mojito", descripcion: "Ron blanco, limón, hiervabuena y azúcar.", precio: "", imagen: "/img/mojito.jpg"},
        {categoria: "cocteleria", nombre: "Margarita", descripcion: "Tequila blanco, licor de naranja, limón y sal.", precio: "", imagen: ""},
        {categoria: "cocteleria", nombre: "Clericot Tinto/Rosado/Blanco", descripcion: "Vino, soda y fruta.", precio: "", imagen: "/img/claricot.jpg"},
        {categoria: "cocteleria", nombre: "Martinis", descripcion: "Vesper martini, pornstar martini, martini frutos, martini de lychee, martini seco, martini sucio", precio: "", imagen: "/img/martini-lychee.jpg"},
        {categoria: "digestivos", nombre: "Americano", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Frangelico", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Espresso", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Espresso doble", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Sheridan's", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Spiked Affogato", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Vacari Sambuca / Nero", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Disaronno Amaretto", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Affogato", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo Affogato", descripcion: "", precio: "", imagen: ""},
        {categoria: "digestivos", nombre: "Carajillo Baileys", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Cognac", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Hennessey", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Ginebra", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Beefeater", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Bombay Sapphire", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Hendrick's", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Monkey 47", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Mezcal", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "400 Conejos", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Doble Cobre", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Whisky", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Bucha's 12", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Bucha's 18", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Bucha's Master", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Chivas Regal 12", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "JW Etiqueta Roja", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "JW Etiqueta Negra", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "JW Etiqueta Double Black", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "JW Etiqueta Verde", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "JW Etiqueta Dorada", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Old Parr", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Macallan Double Cask 12", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Tequila", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "José Cuervo Tradicional", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Don Julio Blanco", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Don Julio Reposado", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Don Julio 70", descripcion: "", precio: "", imagen: ""},
        {categoria: "destilados", nombre: "Maestro Dobel Diamante", descripcion: "", precio: "", imagen: ""},
    ]

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

<div class="p-12">
    <img class="" src="/img/bahamas-logo.jpg" alt="Bahamas">
    <div class="text-center text-verde-bahamas font-montserrat uppercase font-medium">
        <p class="text-4xl">Menú</p>
    </div>
</div>
<Navbar {menu} on:menuToggle= {handleMenuToggle}/>
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
                    <button class="text-right text-lg flex items-center font-semibold" on:click={() => openModal(platillo.imagen, platillo.nombre)}>{platillo.nombre}&thinsp;<span class="material-symbols-outlined">
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
        <div class="m-3 text-verde-bahamas font-montserrat">
            <div class="flex">{#if bebida.imagen === ""}
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