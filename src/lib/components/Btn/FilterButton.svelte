<script lang="ts">
    import {setFilter, getFilter, type FiltersTypes} from "$lib/utils/Utils.svelte.js";
    let filter = $state('all')
    let { name }: {name: FiltersTypes} = $props()

    $effect(() => {
        filter = getFilter()
    })
    let displayName = name.charAt(0).toUpperCase() + name.slice(1)
</script>

<button class="rounded-xl px-6 py-1 cursor-pointer hover:bg-[#36354D]
        { filter === name ? 'bg-[#36354D]': 'bg-[#454463]'  }"
        onclick={() => setFilter(name)}>{displayName}</button>
