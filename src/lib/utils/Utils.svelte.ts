import type {TodoTypes} from "$lib/utils/Todo.svelte";

type FiltersTypes = 'all' | 'active' | 'completed'

let todos = $state<TodoTypes[]>([])
let filter = $state<FiltersTypes>('all')
let filteredTodos = $derived(filterTodos())

export function getFilteredTodos() {
    return filteredTodos
}

export function getTodos() {
    return todos
}

export function setTodos(todosData: TodoTypes[]) {
    todos = todosData
}

export function addTodo(text: string) {
    if(text.length <1) return
    const created = new Date().toISOString()
    todos = [...todos, {
        id: generateRandomId(),
        text,
        done: false,
        editedAt: created,
        createdAt: created
    }
    ]
}

export function editTodo(event: Event) {
    const inputEl = event.target as HTMLInputElement
    const index = +inputEl.dataset.index!
    const updatedTodos = [...todos]
    updatedTodos[index] = {
        ...updatedTodos[index],
        text: inputEl.value,
        editedAt: new Date().toISOString()
    };
    setTodos(updatedTodos);
}

function generateRandomId() {
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0];
}

export function toggleTodo(id: number) {
    const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            return {
                ...todo,
                done: !todo.done
            };
        }
        return todo;
    });
    setTodos(updatedTodos);
}

export const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
}

export function setFilter(newFilter: FiltersTypes) {
    filter = newFilter
}

export function getFilter() {
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

