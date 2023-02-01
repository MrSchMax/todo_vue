import {defineStore} from "pinia";
import {computed, ref, watch} from "vue";

export const useTodoStore = defineStore('todos', () => {
    const id = ref(JSON.parse(localStorage.getItem("id") || 0))

    const todos = ref(JSON.parse(localStorage.getItem("todos") || '[]'));
    const incompleteTodos = computed(() => todos.value.filter((t) => !t.completed));
    const incompleteTodosCount = computed(() => incompleteTodos.value.length);

    const add = (value) =>
        todos.value.push({
            id: id.value++,
            task: value,
            completed: false,
        });
    const removeById =  (id)  => todos.value = todos.value.filter(it => it.id !== id);

    watch(todos, (cur) => {
        if (todos.value.length === 0) {
            id.value = 0;
        }
        localStorage.setItem("todos", JSON.stringify(cur));
    }, {deep: true});
    watch(id, (cur) => localStorage.setItem("id", cur));

    return { todos, incompleteTodos, incompleteTodosCount, add, removeById }
})