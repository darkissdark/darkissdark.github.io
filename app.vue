<template>
    <div class="bg-bg text-foreground min-h-screen transition-colors duration-300">
        <!-- <div class="fixed top-4 right-4 z-50">
            <ThemeSwitcher />
        </div> -->
        <NuxtRouteAnnouncer />
        <NuxtPage />
    </div>
</template>

<script setup>
// import ThemeSwitcher from '@/components/common/ThemeSwitcher.vue';
import '@/assets/theme.css';
</script>
