<script>
    export let showAtPixel = 1000;
  
    let scrollHeight = 0;
  
    const gotoTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
    };
  
    $: showGotoTop = scrollHeight > showAtPixel;
  </script>
  
  {#if showGotoTop}
    <button on:click={gotoTop} class="fixed right-8 bottom-24 rounded-md z-50 bg-slate-300 text-verde-bahamas p-1 duration-300" title="Go to top">
      <span class="material-symbols-outlined">
        keyboard_double_arrow_up
      </span>
    </button>
  {/if}
  
  <svelte:window bind:scrollY={scrollHeight} />