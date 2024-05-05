<script lang="ts">
    import {setFilter, getFilter, type Filters} from "$lib/utils/Utils.svelte";
    let filter = $state('all')
    let { name }: {name: Filters} = $props()

    $effect(() => {
        filter = getFilter()
    })
    let displayName = name.charAt(0).toUpperCase() + name.slice(1)
</script>

<button class="rounded-xl px-6 py-1 cursor-pointer { filter === name ? 'bg-[#36354D]': 'bg-[#454463]'  }"
        onclick={() => setFilter(name)}>{displayName}</button>
