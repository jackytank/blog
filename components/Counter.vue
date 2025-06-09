<script setup lang="ts">
const props = defineProps<{
  initial?: number;
}>();
const count = ref(props.initial || 0);
</script>

<template>
  <div class="border rounded p-4 mb-4">
    <p class="mb-2">Counter: {{ count }}</p>
    <a-button @click="count++">Increment</a-button>
  </div>
</template>


<style scoped>

</style>