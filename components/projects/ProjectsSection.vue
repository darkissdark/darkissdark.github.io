<template>
    <section class="py-4">
        <h2 class="text-3xl font-extrabold mb-8 text-gray-800">Projects</h2>
        <ProjectTagsFilter
            :allTags="allTags"
            :selectedTag="selectedTag"
            @update:selectedTag="selectedTag = $event"
        />
        <ClientOnly>
            <ProjectsCarousel :projects="filteredProjects" />
        </ClientOnly>
    </section>
</template>

<script setup lang="ts">
import ProjectTagsFilter from './ProjectTagsFilter.vue';
import ProjectsCarousel from './ProjectsCarousel.vue';
import profile from '../../data/profile.json';
import { ref, computed } from 'vue';

const projects = profile.projects;
// const allTags = Array.from(new Set(projects.flatMap((p: any) => p.tags)));
const allTags = ['Vue', 'React', 'HTML', 'All'];
const selectedTag = ref<null | string>(null);
const filteredProjects = computed(() => {
    if (!selectedTag.value) return projects;
    return projects.filter((p: any) => p.tags.includes(selectedTag.value));
});
</script>
