<script>
  export let images = [
    { path: "/img/carrusel/img05.jpg", description: "Bahamas Grill" },
    { path: "/img/carrusel/img01.jpg", description: "Bahamas Grill" },
    { path: "/img/carrusel/img02.jpg", description: "Bahamas Grill" },
    { path: "/img/carrusel/img06.jpg", description: "Bahamas Grill" },
    { path: "/img/carrusel/img03.jpg", description: "Bahamas Grill" },
    { path: "/img/carrusel/img04.jpg", description: "Bahamas Grill" },
    { path: "/img/carrusel/img07.jpg", description: "Bahamas Grill" },
    { path: "/img/carrusel/img08.jpg", description: "Bahamas Grill" },
  ];

  import { onMount, createEventDispatcher } from "svelte";

  let currentIndex = 0;
  const dispatch = createEventDispatcher();

  onMount(() => {
    const transitionInterval = setInterval(() => {
      handleSwipe("left");
    }, 4000);

    return () => clearInterval(transitionInterval);
  });

  function handleSwipe(direction) {
    const totalImages = images.length;
    let newIndex;

    if (direction === "left") {
      newIndex = (currentIndex + 1) % totalImages;
    } else if (direction === "right") {
      newIndex = (currentIndex - 1 + totalImages) % totalImages;
    }

    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      dispatch("imageChanged", currentIndex);
    }
  }
</script>

<style>
  .carrousel {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 14rem;
    overflow: hidden;
    position: relative;
    touch-action: pan-y;
  }

  .carrousel img {
    width: 100%;
    object-fit: cover;
    height: auto;
    transition: transform 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: transform;
  }

  .current {
    transform: translateX(0%);
    z-index: 2;
  }

  .next {
    transform: translateX(100%);
    z-index: 1;
    transition-delay: 0.5s;
  }

  .previous {
    transform: translateX(-100%);
    z-index: 3;
    transition-delay: 0.5s;
  }
</style>

<div class="carrousel shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]" on:swipeleft={() => handleSwipe("left")} on:swiperight={() => handleSwipe("right")}>
  {#each images as image, index}
    <img
      src={image.path}
      alt={image.description}
      class:current={index === currentIndex}
      class:next={index === (currentIndex + 1) % images.length}
      class:previous={index === (currentIndex - 1 + images.length) % images.length}
    />
  {/each}
</div>