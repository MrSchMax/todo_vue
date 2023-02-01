<template>
  <button class="determine-todos">
    {{ value ? positiveValue : negativeValue }}
  </button>
</template>

<script setup>
  import {ref} from "vue";

  const showAll = ref(false);
  defineProps({
    positiveValue: {
      type: String,
      required: true
    },
    negativeValue:  {
      type: String,
      required: true
    },
    value:  {
      type: Boolean,
      required: true
    },
  })
</script>

<style scoped>
  .determine-todos {
    font-family: Verdana, sans-serif;
    align-self: center;
    border: solid grey;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    background-color: rgb(100, 100, 100);
    padding: 4px 8px;
  }
</style>