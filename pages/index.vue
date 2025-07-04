<template>
    <main
        class="min-h-screen relative mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-black pb-20 lg:pb-0"
    >
        <Hero />
        <Contacts />
        <ProjectsGrid />
    </main>
</template>

<script setup lang="ts">
import Hero from '../components/hero/Hero.vue';
import Contacts from '../components/contacts/Contacts.vue';
import ProjectsGrid from '~/components/projects/ProjectsGrid.vue';
</script>
