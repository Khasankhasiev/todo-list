import { defineStore } from 'pinia';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: JSON.parse(localStorage.getItem('todos') || '[]') as Todo[],
    }),
    actions: {
        addTodo(text: string) {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false,
            };
            this.todos.push(newTodo);
            this.saveTodos();
        },
        deleteTodo(id: number) {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.saveTodos();
        },
        toggleComplete(id: number) {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.completed = !todo.completed;
                this.saveTodos();
            }
        },
        editTodo(id: number, newText: string) {
            const todo = this.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = newText;
                this.saveTodos();
            }
        },
        saveTodos() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
    },
});
