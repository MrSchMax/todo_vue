<template>
  <div class="todo-item">
    <label class="checkbox-container">
      <input
          type="checkbox"
          :checked="completed"
      >
      <span class="checkbox"> </span>
    </label>
    <p :class="{ completed }"> {{ text }} </p>
    <button @click="removeById(id)" class="delete-button"> X </button>
  </div>
</template>

<script setup>
defineProps({
  id: {
    required: true
  },
  text: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }

})
</script>

<style scoped>

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