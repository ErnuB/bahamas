<script>
    export let imageUrl;
    export let nombrePlatillo
    export let closeModal;
  </script>
  
  <div class="fixed inset-0 flex items-center justify-center z-40">
    <button class="fixed inset-0 bg-black opacity-80" on:click={closeModal}></button>
    <div class="relative">
      <button class="absolute top-2 right-4 text-4xl text-red-500" on:click={closeModal}>
        <i class="fa-solid fa-times"></i>
      </button>
        <img class="w-[95%] w m-auto" src={imageUrl} alt={nombrePlatillo} />
    </div>
  </div>