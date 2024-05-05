<script>
    import '../app.css'
</script>
<svelte:head>
  <title>NSTUDIOS TO-DO App</title>
</svelte:head>

<main>
  <slot />
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
