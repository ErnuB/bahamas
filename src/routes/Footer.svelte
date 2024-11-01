<script>
    import { onMount, onDestroy } from 'svelte';
    import { tick } from 'svelte';

    let showFooter = false;
    let lastScrollY = 0;

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            const screenHeight = window.innerHeight;

            if (currentScrollY > screenHeight / 2) {
                // Show footer if scrolling down
                showFooter = currentScrollY > lastScrollY;
            } else {
                // Hide footer if above half the screen height
                showFooter = false;
            }

            lastScrollY = currentScrollY;
            tick(); // Ensure Svelte updates the DOM
        }
    };

    onMount(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
        }
    });

    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('scroll', handleScroll);
        }
    });
</script>

<style>
    .show {
        transform: translateY(0);
    }
    .hide {
        transform: translateY(100%);
    }
</style>

<footer class="fixed bottom-0 left-0 transition-all duration-300 w-full py-2 bg-white flex flex-col items-center shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" class:show={showFooter} class:hide={!showFooter}>
    <div class="flex items-center justify-around gap-1 px-2">
        <a href="https://maps.app.goo.gl/yXXpExdsLiGichGg6" class="flex px-1 max-w-[75%] items-center" target="_blank"><i class="bx bxs-map text-4xl text-red-600"></i><p class="text-center text-pretty">&thinsp; Blvd. Mario López Valdez, 80058 Culiacán</p></a>
        <a href="https://www.facebook.com/profile.php?id=61561536253104" target="_top"><i class='bx bxl-facebook-square text-blue-800 text-5xl'></i></a>
        <!-- <a href="https://www.tiktok.com/@ensousushi" target="_blank"><i class="text-2xl [text-shadow:_0_1px_0_rgb(255_0_0_/_100%)] fa-brands fa-tiktok"></i></a> -->
        <a href="https://www.instagram.com/bahamas.mx/" target="_blank"><i class="text-5xl bx bxl-instagram bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text"></i></a>
        <a href="tel:+526679419082"><i class="text-5xl bx bxs-phone"></i></a>
    </div>
    <!-- <div class="w-4/5">
        <a href="https://maps.app.goo.gl/H8Naw99hamR1ALRg7" class="flex px-2 items-center" target="_blank"><i class="fa fa-location-dot text-3xl text-red-600"></i><p class="text-center text-pretty font-museosans">&thinsp; Valle de los Lirios, 80050 Culiacán Rosales, Sin.</p></a>
    </div> -->
</footer>