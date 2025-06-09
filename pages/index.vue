<script setup lang="ts">
const { data: allPosts } = await useAsyncData("allPosts", () => {
    return queryCollection("myblog")
        .where("published", "=", true)
        .order("date", "DESC")
        .all();
});
</script>

<template>
    <li v-for="post in allPosts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
        <p class="text-gray-500 text-xs">{{ post.description }}</p>
    </li>
</template>

<style scoped>
/* holder */
</style>
