<template>
    <main
        class="min-h-screen relative mx-auto px-4 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-black pb-20 lg:pb-0"
    >
        <Hero />
        <Contacts />
        <ProjectsSection />
        <EducationSection />
    </main>
</template>

<script setup lang="ts">
import Hero from '../components/hero/Hero.vue';
import Contacts from '../components/contacts/Contacts.vue';
import ProjectsSection from '../components/projects/ProjectsSection.vue';
import EducationSection from '../components/education/EducationSection.vue';
</script>

<style lang="sass">
.size18
  font-size: 18px
.text-shadow
  text-shadow: 0 1px 2px rgba(0,0,0,0.25), 0 1px 8px rgba(0,0,0,0.15)
</style>
