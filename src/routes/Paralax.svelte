<script>
    export let images = [];
    let offsets = [];
    let scrollInterval;

    function initializeOffsets() {
        offsets = images.map((image, index) => {
            return Array.from({ length: 3 }, (_, i) => ({
                ...image,
                offset: i * scrollInterval,
                originalOffset: i * scrollInterval,
                position: index === 0 ? '-left-3' : '-right-3'
            }));
        }).flat(); // Flatten the array to get a single list of images
    }

    function handleScroll() {
        const scrollY = window.scrollY;
        offsets = offsets.map(image => {
            let newOffset = image.originalOffset - (scrollY * image.speed * 0.1);
            if (newOffset < -window.innerHeight) {
                newOffset += 3 * scrollInterval;
            }
            return { ...image, offset: newOffset };
        });
    }

    import { onMount, onDestroy } from 'svelte';

    onMount(() => {
        if (typeof window !== 'undefined') {
            scrollInterval = window.innerHeight * 0.75;
            initializeOffsets();
            window.addEventListener('scroll', handleScroll);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<div class="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1] opacity-30">
    {#each offsets as image (image.src + image.offset)}
        <img 
            src={image.src} 
            alt={image.alt} 
            class="absolute w-1/3 {image.position}" 
            style="top: {image.offset}px;" 
        />
    {/each}
</div>







