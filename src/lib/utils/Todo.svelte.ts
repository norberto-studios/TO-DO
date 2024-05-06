export type TodoTypes = {
    id: number
    text: string
    done: boolean
    createdAt: string
    editedAt: string
}

export default class Todo {
    id = $state()
    text = $state()
    done = $state()
    createdAt = $state()
    editedAt = $state()

    constructor({id, text, done, createdAt, editedAt}: TodoTypes) {
        this.id = id
        this.text = text
        this.done = done
        this.createdAt = createdAt
        this.editedAt = editedAt
    }
}
