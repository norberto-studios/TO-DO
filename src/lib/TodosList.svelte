<script lang="ts" >
    import {getFilteredTodos, getTodos, editTodo, toggleTodo, setTodos, deleteTodo} from "$lib/utils/Utils.svelte";
    import { SortableList } from '$lib/index';
    import x from '$lib/assets/x-mark.svg'
    import moveDots from "$lib/assets/ellipsis-horizontal.svg";
    import check from "$lib/assets/check.svg";
    $effect(() => {
        const savedTodos = localStorage.getItem('todos')
        savedTodos && (setTodos(JSON.parse(savedTodos)))
    })

    $effect(() => {
        localStorage.setItem('todos', JSON.stringify(getTodos()))
    })

</script>

<SortableList class="list-group col grid gap-2 mb-4 select-none" handle=".cursor-grab" animation={150}>
  {#each getFilteredTodos() as todo, i}
    <div class="flex bg-[#222231] rounded-lg p-2 group {todo.done ? 'opacity-50' : ''}">
      <div class="flex items-center pl-2">
        <input class="relative peer shrink-0 cursor-pointer
        appearance-none h-8 w-8 bg-[#454463] rounded
        border-transparent focus:ring-2
        checked:bg-[#44634E]
        focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
        disabled:border-steel-400 disabled:bg-steel-400
        " onchange={toggleTodo} data-index={todo.id} checked={todo.done} type="checkbox" />
        <img class="absolute w-4 h-4 ml-2
        hidden peer-checked:block pointer-events-none" src={check} alt="Delete icon">
      </div>
      <div class="flex flex-1">
        <input class="w-full h-full p-2 flex flex-wrap mx-2 border-0 text-lg"
         oninput={editTodo}
               data-index={i} value={todo.text} type="text" />
      </div>
      <div class="flex">
        <div class="flex items-center ">
          <button onclick={deleteTodo} class="px-3 cursor-pointer opacity-0
          group-hover:opacity-50 hover:!opacity-100">
            <img data-index={todo.id} src={x} alt="Delete icon"></button>
        </div>
        <div class="cursor-grab flex items-center pr-3">
          <img src={moveDots} alt="Move icon"> </div>
      </div>
    </div>
  {/each}
</SortableList>


