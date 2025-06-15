<script setup lang="ts">
useHead({
    title: "Home",
    meta: [
        {
            name: "description",
            content:
                "Welcome Tri To Blog, a place to share knowledge and insights on various topics.",
        },
    ],
});
</script>

<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold text-center text-gray-800 mb-4">
                Tailwind CSS v4 + Nuxt 3
            </h1>
            <p class="text-gray-600 text-center">
                Your Tailwind CSS v4 is successfully installed in your Nuxt 3 project!
            </p>
            <div class="mt-6">
                <button class="btn-primary w-full text-red-700">
                    Custom Component with Tailwind
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* holder */
</style>
