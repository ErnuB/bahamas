<script>
    import { createEventDispatcher,onMount } from 'svelte';
    export let menu = false;

    let seccion = [
        {id: 'entradas', nombre:'Entradas', descripcion:""},
        {id: 'fritos', nombre:'Fritos', descripcion:""},
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
    ]

    let seccionBebidas = [
        {id:'mock-tails', nombre:'Mock-tails', descripcion:""},
        {id:'cervezas', nombre:'Cervezas', descripcion:""},
        {id:'bebidas', nombre:'Bebidas', descripcion:""},
        {id:'mixologia', nombre:'Coctelería de la casa', descripcion:""},
        {id:'cocteleria', nombre:'Coctelería Tradicional Tiki', descripcion:""},
        {id:'digestivos', nombre:'Digestivos & Café', descripcion:""},
        {id:'destilados', nombre:'Destilados', descripcion:""},
        {id:'destilados-botellas', nombre:'Botellas', descripcion:""},
    ]
    
    const dispatch = createEventDispatcher();

    let toggleMenu = () => {
    menu = !menu;
    dispatch('menuToggle',{menu});
  };

    let isNavOpen = false;

    let toggleNav = () => {
    isNavOpen = !isNavOpen;
    updateAriaExpanded();
  };

  const closeNav = () => {
    isNavOpen = false;
    updateAriaExpanded();
  };

  const updateAriaExpanded = () => {
    const navBar = document.getElementById('nav-bar');
    if (navBar) {
      navBar.setAttribute('aria-expanded', isNavOpen.toString());
    }
  };

  onMount(() => {
    updateAriaExpanded();
  });

</script>

{#if menu === false}
  <section class="sticky top-0 flex py-1 h-16 flex-col z-30 bg-white w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div class="flex items-center justify-around mx-4">
        <a href="/">
          <img src="/img/bahamas-logo.png" alt="Bahamas" class="max-w-8">
        </a>
        <div class="rounded-full border-2 border-verde-bahamas px-4 py-1">
          <button on:click={toggleMenu} class="text-verde-bahamas font-montserrat uppercase">Bebidas</button>
        </div>
        <div class="text-verde-bahamas">
          <button aria-expanded="{isNavOpen}" aria-controls="nav-bar" on:click={toggleNav}><span class="text-lg uppercase">Menú</span>&thinsp;<i class="fa-solid text-xl fa-bars"></i></button>
        </div>
      </div>
  {#if isNavOpen}
      <nav id="nav-bar" class="flex flex-col py-3 bg-slate-200 border-x-2 border-b-2 border-verde-bahamas">
          {#each seccion as seccionItem}
              <a href="#{seccionItem.id}" class="px-4 text-verde-bahamas py-1 w-full drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)] text-xl font-semibold uppercase" on:click={closeNav}>{seccionItem.nombre}</a>
          {/each}
      </nav>
  {/if}
  </section>
{:else}
  <section class="sticky top-0 flex py-1 h-16 flex-col z-30 bg-white w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <div class="flex items-center justify-around mx-4">
        <a href="/" class="px-4">
          <img src="/img/bahamas-logo.png" alt="Bahamas" class="max-h-14">
        </a>
        <div class="rounded-full border-2 border-verde-bahamas px-4 py-1">
          <button on:click={toggleMenu} class="text-verde-bahamas font-montserrat uppercase">Alimentos</button>
        </div>
        <div class="text-verde-bahamas">
          <button class="pr-6" aria-expanded="{isNavOpen}" aria-controls="nav-bar" on:click={toggleNav}><span class="text-lg uppercase">Menú</span>&thinsp;<i class="fa-solid text-xl fa-bars"></i></button>
        </div>
      </div>
  {#if isNavOpen}
      <nav id="nav-bar" class="flex flex-col py-3 bg-slate-200 border-x-2 border-b-2 border-verde-bahamas">
          {#each seccionBebidas as seccionItemBebidas}
              <a href="#{seccionItemBebidas.id}" class="px-4 text-verde-bahamas py-1 w-full drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,1)] text-xl font-semibold uppercase" on:click={closeNav}>{seccionItemBebidas.nombre}</a>
          {/each}
      </nav>
  {/if}
  </section>
{/if}
