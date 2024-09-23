<template>
    <div class="todo-app">
        <h1>To-Do List</h1>
        <TodoInput />
        <TodoList />
    </div>
</template>

<script lang="ts" setup>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<style scoped>
.todo-app {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
}
</style>
