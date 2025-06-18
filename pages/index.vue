<script setup lang="ts">
const appCfg = useAppConfig();
useHead({
    title: "Home",
    meta: [
        {
            name: "description",
            content:
                `Welcome to ${appCfg.myConst.layout.header.title} website, a place to share knowledge and insights on various topics.`,
        },
    ],
});
</script>

<template>
    <div class="min-h-screen flex items-start justify-center">
        <div class="max-w-xl w-full p-6 bg-white rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-4">
                Hi, I am sure you're asking yourself: Can I afford to trust this author and read his blog?
            </h1>
            <p class="text-gray-600 text-center">
                But the true question you must ask is...Can I afford not to?
            </p>
            <div class="mt-6">
                <button class="btn-primary w-full text-gray-500 hover:text-blue-500 underline underline-offset-4">
                    <NuxtLink to="/blogs">👉 Read now before it too late! 👈</NuxtLink>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* holder */
</style>
