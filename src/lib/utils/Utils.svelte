<script lang="ts" context="module">
    type Todo = {
        id: number
        text: string
        done: boolean
    }
    type Filters = 'all' | 'active' | 'completed'

    let todos = $state<Todo[]>([])
    let filter = $state<Filters>('all')
    let filteredTodos = $derived(filterTodos())

    export function getFilteredTodos() {
        return filteredTodos
    }
    export function getTodos() {
        return todos
    }
    export function setTodos(todosData: Todo[]) {
        todos = todosData
    }

    export function addTodo(text: string) {
        const id = generateRandomId()
        const done = false
        todos = [...todos, { id, text, done }]
    }

    function generateRandomId() {
        let array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0];
    }

    export function editTodo(event: Event) {
        const inputEl = event.target as HTMLInputElement
        const index = +inputEl.dataset.index!
        todos[index].text = inputEl.value
    }

    export function toggleTodo(event: Event) {
        const inputEl = event.target as HTMLInputElement
        const index = +inputEl.dataset.index!
        todos[index].done = !todos[index].done
    }

    export const deleteTodo = (event: Event) => {
        const btnEl = event.target as HTMLButtonElement
        const index = +btnEl.dataset.index!
        setTodos(getTodos().filter(todo => todo.id !== index));
    }

    export function setFilter(newFilter: Filters) {
        filter = newFilter
    }

    export function filterTodos() {
        switch (filter) {
            case 'all':
                return todos
            case 'active':
                return todos.filter((todo) => !todo.done)
            case 'completed':
                return todos.filter((todo) => todo.done)
        }
    }

    export const remaining = () => {
        return todos.filter((todo) => !todo.done).length
    }

</script>
