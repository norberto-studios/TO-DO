<script>
    import '../app.css'
    import Footer from "$lib/Footer.svelte";
</script>
<svelte:head>
  <title>NSTUDIOS TO-DO App</title>
</svelte:head>

<main>
  <div class="flex flex-1 flex-col h-lvh justify-between p-6">
  <slot />
  <Footer/>
  </div>
</main>

<style>
    :global(html, body) {
        height: 100%;

    }

    :global(body) {
        font-family: 'Geliat ExtraLight','Manrope Variable', sans-serif;
        color: hsl(220 10% 98%);
        background-color: hsl(243 19% 22%);
    }
</style>
