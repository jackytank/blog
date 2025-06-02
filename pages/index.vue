<script setup lang="ts">
const allPosts = await queryCollection('content').order('date', 'DESC').all();

</script>

<template>
</template>

<style scoped>
/* holder */
</style>