<script setup lang="ts">
const allPosts = await useAsyncData('allPosts', () => queryCollection('content').path('/blog').order('date', 'DESC').all());

</script>

<template>
    
</template>

<style scoped>
/* holder */
</style>