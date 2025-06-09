<script setup lang="ts">
const route = useRoute();
const { data: foundPost } = await useAsyncData(
    `blog-post-${route.path}`,
    () => {
        return queryCollection("myblog").path(route.path).first();
    },
);
</script>
<template>
    <div>
        <ContentRenderer v-if="foundPost" :value="foundPost" />
    </div>
</template>

<style scoped></style>
