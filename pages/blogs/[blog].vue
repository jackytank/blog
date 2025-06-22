<script setup lang="ts">
const route = useRoute();
console.log(route.path);
const { data: foundPost } = await useAsyncData(`blog-post-${route.path}`, () => {
    return queryCollection("myblog").path(route.path).first();
});
</script>
<template>
    <div>
        <template v-if="foundPost">
            <ContentRenderer :value="foundPost" />
        </template>
        <template v-else>
            <div class="empty-page">
                <h1>Page Not Found</h1>
                <NuxtLink to="/">Go back home</NuxtLink>
            </div>
        </template>
    </div>
</template>

<style scoped>
/* holder */
</style>
