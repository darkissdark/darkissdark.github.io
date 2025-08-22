<template>
    <button
        @click="toggleTheme"
        aria-label="Theme switcher"
        class="p-2 rounded-full transition"
        :class="{
            'hover:bg-gray-200': colorMode.value === 'light',
            'hover:bg-gray-700': colorMode.value === 'dark',
        }"
    >
        <MoonIcon v-if="colorMode.value === 'light'" />
        <SunIcon class="text-txt" v-else />
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
