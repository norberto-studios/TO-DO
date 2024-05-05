<script lang="ts">
  import FilterButton from "$lib/components/FilterButton.svelte";
</script>

<div class="flex gap-4 mb-6">
  <FilterButton name="all"/>
  <FilterButton name="active"/>
  <FilterButton name="completed"/>
</div>
