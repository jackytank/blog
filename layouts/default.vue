<script setup lang="ts">
const colorMode = useColorMode();
const mobileMenuOpen = ref(false);
const route = useRoute();
const appCfg = useAppConfig();

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};

const isActive = (path: string) => {
    return route.path?.startsWith(path);
};

// Close mobile menu when route change
watch(
    () => route.path,
    () => {
        mobileMenuOpen.value = false;
    },
);
</script>

<template>

    <body class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <!-- Header -->
        <header
            class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div class="max-w-4xl mx-auto pl-6 sm:pl-4 lg:pl-6">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo/brand -->
                    <div class="flex-shrink-0">
                        <NuxtLink to="/"
                            class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {{ appCfg.cfg.layout.header.title }}
                        </NuxtLink>
                    </div>

                    <!-- Desktop Navigation -->
                    <nav class="hidden md:flex space-x-8" aria-label="Primary navigation">
                        <NuxtLink v-for="(vTitle, kTo) in appCfg.cfg.layout.header.navItems" :key="kTo" :to="kTo"
                            :class="{ underline: isActive(kTo) }"
                            class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                            {{ vTitle }}
                        </NuxtLink>
                    </nav>

                    <!-- Dark mode toggle & Menu memu buttion -->
                    <div class="flex items-center space-x-4">
                        <ClientOnly>
                            <!-- Dark mode toggle -->
                            <button @click="
                                colorMode.preference =
                                colorMode.preference === 'dark' ? 'light' : 'dark'
                                " class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4">
                                <!-- icon light -->
                                <svg class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    v-show="colorMode.preference === 'dark'" xmlns="http://www.w3.org/2000/svg"
                                    :size="appCfg.cfg.iconSizes.default" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81zM1 13h3v-2H1m12 9h-2v3h2" />
                                </svg>
                                <!-- icon dark -->
                                <svg class="hover:text-gray-500 dark:hover:text-gray-900"
                                    v-show="colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg"
                                    :size="appCfg.cfg.iconSizes.default" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M2 12a10 10 0 0 0 13 9.54a10 10 0 0 1 0-19.08A10 10 0 0 0 2 12" />
                                </svg>
                            </button>
                            <template #fallback>
                                <!-- this will be rendered on server side -->
                                <button type="button" class="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4">
                                    (*.*)
                                </button>
                            </template>
                        </ClientOnly>

                        <!-- Mobile menu button -->
                        <button @click="toggleMobileMenu"
                            class="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Mobile Menu Overlay -->
        <div v-if="mobileMenuOpen" @click="closeMobileMenu"
            class="fixed inset-0 bg-gray-100 dark:bg-gray-800 bg-opacity-5 z-40 md:hidden">
        </div>

        <!-- Mobile Menu -->
        <Transition enter-active-class="transition-transform ease-in-out duration-300"
            leave-active-class="transition-transform ease-in-out duration-300" enter-from-class="translate-x-full"
            enter-to-class="translate-x-0" leave-from-class="translate-x-0" leave-to-class="translate-x-full">
            <div v-if="mobileMenuOpen"
                class="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg z-50 md:hidden">
                <div class="px-5 py-6">
                    <div class="flex justify-end mb-4">
                        <button @click="closeMobileMenu"
                            class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                            <!-- Icon Close -->
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <nav class="flex flex-col space-y-4" aria-label="Mobile navigation">
                        <!-- Mobile Vertical Navigation -->
                        <NuxtLink v-for="(vTitle, kTo) in appCfg.cfg.layout.header.navItems" :key="kTo" :to="kTo"
                            @click="closeMobileMenu" :class="{ 'bg-gray-100 dark:bg-gray-700': isActive(kTo) }"
                            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {{ vTitle }}
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </Transition>

        <!-- Main content -->
        <main class="flex-1">
            <div
                class="min-h-screen max-w-4xl mx-auto px-2 sm:px-4 lg:px-6 py-8 dark:text-gray-100 border-x border-gray-200 dark:border-gray-100">
                <slot />
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div class="text-center">
                    <p class="text-gray-600 dark:text-gray-400 text-sm">
                        © {{ new Date().getFullYear() }}
                        {{ appCfg.cfg.layout.header.title }}. All rights reserved. Who cares? I stole other people's code anyway! Or did I? Hmm...
                    </p>
                </div>
            </div>
        </footer>
    </body>
</template>

<style scoped>
/* holder */
</style>
