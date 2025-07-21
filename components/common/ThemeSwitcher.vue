<template>
    <button
        @click="toggleTheme"
        aria-label="Theme switcher"
        class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
        <MoonIcon v-if="colorMode.value === 'light'" />
        <SunIcon v-else />
    </button>
</template>

<script setup>
import MoonIcon from '../../icons/MoonIcon.vue';
import SunIcon from '../../icons/SunIcon.vue';

const colorMode = useColorMode();
const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>
