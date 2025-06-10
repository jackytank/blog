<script setup lang="ts">
import { theme } from "ant-design-vue";

const colorMode = useColorMode();
const route = useRoute();
const selectedKeys = computed(() => {
    const path = route.path;
    if (path.startsWith("/blogs")) return ["blogs"];
    if (path.startsWith("/about")) return ["about"];
    return [];
});

const onClick = (val: string) => {
    colorMode.preference = val;
};
</script>

<template>
    <a-config-provider
        :theme="{
            algorithm: colorMode.value === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }"
    >
        <!-- white layout -->
        <a-layout class="min-h-screen">
            <!-- Header -->
            <a-layout-header
                class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700"
            >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <!-- Logo/title -->
                        <div class="flex-shrink-0">
                            <NuxtLink
                                to="/"
                                class="text-xl font-bold text-gray-900 dark:text-white"
                            >
                                Tri To Blog
                            </NuxtLink>
                        </div>

                        <!-- Navigation -->
                        <div class="hidden md:block">
                            <a-menu
                                mode="horizontal"
                                :selectedKeys="selectedKeys"
                                class="border-none bg-transparent"
                            >
                                <a-menu-item key="blogs">
                                    <NuxtLink to="/blogs">Blogs</NuxtLink>
                                </a-menu-item>
                                <a-menu-item key="about">
                                    <NuxtLink to="/about">About me</NuxtLink>
                                </a-menu-item>
                            </a-menu>
                        </div>

                        <!-- dark mode toggle -->
                        <div class="flex items-center space-x-4">
                            <a-switch
                                class="flex items-center justify-center"
                                :checked="colorMode.value === 'dark'"
                                @change="(checked, e) => onClick(checked ? 'dark' : 'light')"
                            >
                                <template #checkedChildren><check-outlined /></template>
                                <template #unCheckedChildren><close-outlined /></template>
                            </a-switch>
                        </div>
                    </div>
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
                class="text-center bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 transition-colors border-t border-gray-200 dark:border-gray-700"
            >
                Tri To Blog ©{{ new Date().getFullYear() }} Created with Nuxt 3 & Ant Design Vue
            </a-layout-footer>
        </a-layout>
    </a-config-provider>
</template>

<style scoped></style>
