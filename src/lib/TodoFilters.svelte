<script>
  import { setFilter } from "$lib/utils/Utils.svelte";
</script>

<div class="flex gap-4 mb-6">
  <button class="rounded-xl px-6 py-1 bg-[#454463] cursor-pointer" onclick={() => setFilter('all')}>All</button>
  <button class="rounded-xl px-6 py-1 bg-[#454463] cursor-pointer" onclick={() => setFilter('active')}>Active</button>
  <button class="rounded-xl px-6 py-1 bg-[#454463] cursor-pointer" onclick={() => setFilter('completed')}>Completed</button>
</div>
