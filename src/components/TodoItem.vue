<template>
    <li>
        <input type="checkbox" :checked="todo.completed" @change="toggleTask" />
        <span :class="{ completed: todo.completed }" @dblclick="startEditing">
            <span v-if="!isEditing">{{ todo.text }}</span>
            <input
                v-else
                v-model="editText"
                @keyup.enter="saveEdit"
                @blur="saveEdit"
            />
        </span>
        <button @click="deleteTask">Delete</button>
    </li>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const props = defineProps<{ todo: Todo }>();
const todoStore = useTodoStore();

const isEditing = ref(false);
const editText = ref(props.todo.text);

const toggleTask = () => {
    todoStore.toggleComplete(props.todo.id);
};

const deleteTask = () => {
    todoStore.deleteTodo(props.todo.id);
};

const startEditing = () => {
    isEditing.value = true;
    editText.value = props.todo.text;
};

const saveEdit = () => {
    if (editText.value.trim()) {
        todoStore.editTodo(props.todo.id, editText.value.trim());
        isEditing.value = false;
    }
};
</script>

<style scoped>
li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
}

li:hover {
    background-color: #f1f1f1;
}

input[type='checkbox'] {
    margin-right: 0.5rem;
    accent-color: #4caf50;
}

span {
    flex: 1;
    margin-right: 0.5rem;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

button {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.3rem 0.7rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #e53935;
}

input[type='text'] {
    padding: 0.3rem;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    flex: 1;
}
</style>
