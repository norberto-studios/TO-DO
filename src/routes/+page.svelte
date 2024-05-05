<script lang="ts">
import TodosList from "../lib/TodosList.svelte";
import AddTodoBar from "$lib/AddTodoBar.svelte";
import TodoFilters from "$lib/TodoFilters.svelte";
import Header from "$lib/Header.svelte";
import SubHeading from "$lib/SubHeading.svelte";
import Footer from "$lib/Footer.svelte";
</script>

<div class="flex flex-1 flex-col h-lvh justify-between p-6">
  <div class="">
    <Header title="TO-DO"/>
    <SubHeading/>
    <AddTodoBar/>
    <TodoFilters/>
    <TodosList/>
  </div>
  <Footer/>
</div>


