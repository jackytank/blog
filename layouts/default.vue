<script setup lang="ts">

</script>

<template>
    <div class="min-h-screen bg-white dark:bg-gray-900 
        transition-colors duration-300">
        <!-- Header -->
        <header class="bg-white dark:bg-gray-800 shadow-sm border-b 
            border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo/brand -->
                    <div class="flex-shrink-0">
                        <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white 
                            hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Tri To Blog
                        </NuxtLink>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav class="hidden md:flex space-x-8">
                        <NuxtLink to="/blogs" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 
                            dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                            Blogs
                        </NuxtLink>
                        <NuxtLink to="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 
                            dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                            About
                        </NuxtLink>
                    </nav>

                    <!-- Dark mode toggle & Menu memu buttion -->
                    <div class="flex items-center space-x-4">
                        <!-- Dark mode toggle -->
                        <button class="p-2 rounded-lg">
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <slot />
    </div>
</template>

<style scoped>
/* holder */
</style>
