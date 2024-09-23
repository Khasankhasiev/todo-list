<template>
    <div class="todo-input">
        <input v-model="newTodo" placeholder="Add a new task" />
        <button @click="addTask">Add</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

const todoStore = useTodoStore();
const newTodo = ref('');

const addTask = () => {
    if (newTodo.value.trim()) {
        todoStore.addTodo(newTodo.value.trim());
        newTodo.value = '';
    }
};
</script>

<style scoped>
.todo-input {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

input {
    flex: 1;
    padding: 0.5rem;
    border: 2px solid #dcdcdc;
    border-radius: 4px;
    outline: none;
}

input:focus {
    border-color: #4caf50;
}

button {
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #45a049;
}
</style>
