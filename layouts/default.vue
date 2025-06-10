<script setup lang="ts">
const colorMode = useColorMode();

const onClick = (val: string) => {
    colorMode.preference = val;
};

const route = useRoute();
function isActive(path: string) {
    return route.path.startsWith(path);
}
</script>

<template>
    <a-layout class="min-h-screen">
        <!-- Header -->
        <a-layout-header class="bg-white shadow-md p-0 dark:bg-gray-800">
            <div class="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
                <h1 class="text-2xl font-bold m-0 text-blue-500 dark:text-blue-400">
                    <NuxtLink to="/" :class="{ underline: route.path === '/' }">
                        Tri To Blog
                    </NuxtLink>
                </h1>
                <a-menu mode="horizontal" :style="{ lineHeight: '64px', backgroundColor: 'transparent', border: 'none' }"
                    class="flex-1 justify-center dark:text-white">
                    <a-menu-item key="1" class="dark:text-white">
                        <NuxtLink to="/blogs">Blogs</NuxtLink>
                    </a-menu-item>
                    <a-menu-item key="2" class="dark:text-white">
                        <NuxtLink to="/about">About me</NuxtLink>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a-switch class="text-lg" :checked="colorMode.value === 'dark'" @change="(checked, e) => onClick(checked ? 'dark' : 'light')">
                            <template #checkedChildren><check-outlined /></template>
                            <template #unCheckedChildren><close-outlined /></template>
                        </a-switch>
                        <!-- <ClientOnly>
                    </ClientOnly> -->
                    </a-menu-item>
                </a-menu>
            </div>
        </a-layout-header>

        <!-- Main Content -->
        <a-layout-content class="bg-gray-50 dark:bg-gray-900 transition-colors">
            <div class="max-w-6xl mx-auto px-6 py-6">
                <div class="min-h-[calc(100vh-250px)]">
                    <slot />
                </div>
            </div>
        </a-layout-content>
        <a-layout-footer
            class="text-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 transition-colors border-t border-gray-200 dark:border-gray-700">
            Tri To Blog ©{{ new Date().getFullYear() }} Created with Nuxt 3 & Ant Design Vue
        </a-layout-footer>
    </a-layout>
</template>

<style scoped></style>