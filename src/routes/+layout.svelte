<script>
    import '../app.css'
</script>
<svelte:head>
  <title>Svelte 5 Todo App</title>
</svelte:head>

<main>
  <slot />
</main>

<style>
    :global(html, body) {
        height: 100%;

    }

    :global(body) {
        display: grid;
        /*margin: 24px;*/
        /*place-content: center;*/
        font-family: 'Manrope Variable', sans-serif;
        color: hsl(220 10% 98%);
        background-color: hsl(243 19% 22%);
    }
</style>
