<script setup>
    import {ref} from "vue";
    import Input from "@/Input.vue";
    import {useTodoStore} from "@/stores/todos";
    import {storeToRefs} from "pinia";
    import ToggleTextButton from "@/ToggleTextButton.vue";
    import Todo from "@/Todo.vue";

    const showAll = ref(false);

    const inputRef = ref(null);
    const store = useTodoStore();
    const { todos, incompleteTodos, incompleteTodosCount } = storeToRefs(store);
    const { removeById } = store;

    const add = (value) => {
      store.add(value);
      inputRef.value.clear();
    };
</script>

<template>
  <div class="menu">
    <p class="tasks-left-text"> {{ incompleteTodosCount}} task(s) left! </p>
    <toggle-text-button
        @click="showAll = !showAll"
        :value="showAll"
        positive-value="Hide Completed"
        negative-value="Show All"
    />
  </div>

  <Input
      @input-enter="add"
      placeholder="Add a new task!!!"
      ref="inputRef"
  />
<!--  <template v-for="todo in (showAll ? todos : incompleteTodos)" :key="todo.id">-->
<!--    <todo :id="todo.id" :text="todo.task" :completed="todo.completed"/>-->
<!--  </template>-->
  <div v-for="todo in (showAll ? todos : incompleteTodos)" :key="todo.id" class="todo-item">
    <label class="checkbox-container">
      <input
          type="checkbox"
          v-model="todo.completed"
      >
      <span class="checkbox"> </span>
    </label>
    <p :class="{ completed: todo.completed }"> {{ todo.task }} </p>
    <button @click="removeById(todo.id)" class="delete-button"> X </button>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.tasks-left-text {
  color: white;
  text-align: left;
  margin-bottom: 6px;
}

/*wdfafasfsdfd*/
.todo-item {
  display: flex;
  justify-content: space-between;
  border: 2px solid rgb(57, 57, 57);
  background-color: rgb(20, 20, 20);
  padding: 16px;
  color: white;
}
/* Customising checkbox guide https://www.w3schools.com/howto/howto_css_custom_checkbox.asp */

/* Customise checkbox container */
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
/* Hide default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkbox {
  height: 25px;
  width: 25px;
  background-color: rgb(80, 80, 80);
  position: absolute;
  top: 0;
  left: 0;
}
.checkbox-container:hover input ~ .checkbox {
  background-color: rgb(65, 65, 65);
}
.checkbox-container input:checked ~ .checkbox {
  background-color: rgb(55, 55, 55);
}
.checkbox:after {
  content: "";
  position: absolute;
  display: none;
}
/* Show the checkbox when checked */
.checkbox-container input:checked ~ .checkbox:after {
  display: block;
}
/* Style the checkbox */
.checkbox-container .checkbox:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.completed {
  text-decoration: line-through;
  text-decoration-thickness: 3px;
  color: #ccc;
}
.delete-button {
  border: none;
  font-weight: bold;
  background-color: rgb(20, 20, 20);
  color: white;
  font-size: 18px;
}
</style>