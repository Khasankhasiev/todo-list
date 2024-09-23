<template>
    <ul>
        <TodoItem v-for="todo in todoStore.todos" :key="todo.id" :todo="todo" />
    </ul>
</template>

<script lang="ts" setup>
import { useTodoStore } from '../stores/todoStore';
import TodoItem from './TodoItem.vue';

const todoStore = useTodoStore();
</script>

<style scoped>
ul {
    padding: 0;
    list-style: none;
}
</style>
