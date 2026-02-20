<template>
    <div class="text-foreground min-h-screen transition-colors duration-300 pb-4">
        <div class="fixed top-1 right-1 z-50">
            <ClientOnly fallback-tag="div" fallback-class="p-2 rounded-full w-10 h-10">
                <ThemeSwitcher />
            </ClientOnly>
        </div>
        <NuxtRouteAnnouncer />
        <NuxtPage />
    </div>
</template>

<script setup>
import ThemeSwitcher from '@/components/common/ThemeSwitcher.vue';
import '@/assets/theme.css';
</script>
