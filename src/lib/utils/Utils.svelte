<script lang="ts" context="module">
    type Todo = {
        id: number
        text: string
        done: boolean
        createdAt: string
        editedAt: string
    }
    export type Filters = 'all' | 'active' | 'completed'


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
        const created = new Date().toISOString()
        todos = [...todos, { id, text, done, createdAt: created, editedAt: created }]
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
        todos[index].editedAt = new Date().toISOString()
    }

    export function toggleTodo(id: number) {
        todos.filter(todo => {
            if (todo.id === id){
              return todo.done = !todo.done
            }
        } )
    }

    export const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    export function setFilter(newFilter: Filters) {
        filter = newFilter
    }

    export function getFilter(){
        return filter
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
