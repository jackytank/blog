<script setup lang="ts">
const route = useRoute();
</script>

<template>
    <a-layout class="layout">
        <a-layout-header>
            <div class="logo">Tri To Blog</div>
            <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
                <a-menu-item key="1">
                    <NuxtLink to="/">Home</NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                    <NuxtLink to="/tags">Tags</NuxtLink>
                </a-menu-item>
                <!-- Add more nav items if needed -->
            </a-menu>
        </a-layout-header>
        <a-layout-content style="padding: 0 24px; margin-top: 24px;">
            <a-breadcrumb style="margin: 16px 0;">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <!-- dynamically generated breadcrumbs
                example of path: /blogs/microservices-architecture -->
                <a-breadcrumb-item v-for="(crumb, index) in route.path.split('/').filter(Boolean)" :key="index">
                    {{ crumb }}
                </a-breadcrumb-item>

            </a-breadcrumb>
            <div :style="{ background: '#fff', padding: '24px', minHeight: 'calc(100vh - 250px)' }">
                <slot />
            </div>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Tri To Blog ©{{ new Date().getFullYear() }} Created with Nuxt 3 & Ant Design Vue
        </a-layout-footer>
    </a-layout>
</template>

<style scoped>
.logo {
    width: 120px;
    height: 31px;
    float: left;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
}

.ant-menu-item a {
    color: inherit;
    /* Make NuxtLink inherit color from menu item */
    text-decoration: none;
}
</style>