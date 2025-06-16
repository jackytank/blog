<script setup lang="ts">

</script>

<template>
    <div :class="`
        min-h-screen bg-white dark:bg-gray-900 
        transition-colors duration-300
    `">
        <!-- Header -->
        <header :class="`
            bg-white dark:bg-gray-800 shadow-sm 
            border-b border-gray-200 dark:border-gray-700 
            sticky top-0 z-50
        `">
            <div :class="`
                max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
            `">
                <div :class="`
                    flex justify-between items-center h-16
                `">
                    <!-- Logo/brand -->
                    <div :class="`
                        flex-shrink-0
                    `">
                        <NuxtLink to="/" :class="`
                            text-xl font-bold text-gray-900 
                            dark:text-white hover:text-blue-600 
                            dark:hover:text-blue-400 transition-colors    
                        `">
                            Tri To Blog
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </header>
    </div>
    <!-- <slot /> -->
</template>

<style scoped></style>
