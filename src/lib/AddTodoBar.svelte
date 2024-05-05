<script lang="ts">
    import {addTodo} from "$lib/utils/Utils.svelte";

    let value: HTMLInputElement;


</script>

<div class="w-full relative mb-4">
  <form onsubmit={()=>{ addTodo(value.value);
    value.value = ''}
    }>
    <input bind:this={value} class="w-full rounded-2xl p-4 bg-[#454463] border-0 outline-[#2D2C41]"
           placeholder="Add Todo" type="text"/>
    <button type="submit" class="h-8 w-16 rounded-lg absolute
    right-3 top-3 text-2xl bg-[#2D2C41] cursor-pointer">+</button>
  </form>
</div>
