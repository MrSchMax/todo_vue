<template>
  <input
      autofocus
      class="add-task"
      :placeholder="placeholder"
      v-model="value"
      @keyup.enter="$emit('input-enter', value)"
  >
</template>

<script setup>
import {ref} from "vue";

const value = ref('');
const clear = () => value.value = '';

// defineEmits(['input-enter']);
defineProps({
  placeholder: String
})
defineExpose({clear})
</script>

<style scoped>
  .add-task {
    padding: 8px;
    font-size: 14px;
    width: 100%;
    background-color: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: white;
    margin: 8px 0px;
  }
  .add-task::placeholder {
    font-size: 14px;
  }
  .add-task:focus {
    border: 1px solid white;
  }
</style>