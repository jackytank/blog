<script setup lang="ts">
const allPosts = await queryCollection("myblog")
    .where("published", "=", true)
    .order("date", "DESC")
    .all();

useHead({
    title: 'Blogs Archive',
    meta: [
        {
            name: 'description',
            content: 'This is the place where you can find all the blog posts I have written & published on this site.',
        },
    ],
});
</script>

<template>
    <div>

        <div>
            <!-- List of blog posts -->
            <ol>
                <li v-for="post in allPosts" :key="post.id">
                    <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
                    <p class="text-gray-500 text-xs">{{ post.description }}</p>
                    <p class="text-gray-500 text-xs">{{ post.path }}</p>
                </li>
            </ol>
        </div>
    </div>
</template>

<style scoped>
/* holder */
</style>
