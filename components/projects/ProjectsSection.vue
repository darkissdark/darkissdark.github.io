<template>
    <section class="py-4">
        <h2 class="text-3xl font-extrabold mb-8 text-gray-800 dark:text-gray-200">Projects</h2>
        <ProjectTagsFilter
            :projectCountsByTag="projectCountsByTag"
            :selectedTag="selectedTag"
            @update:selectedTag="selectedTag = $event as Tag"
        />
        <ProjectsCarousel :projects="filteredProjects" />
    </section>
</template>

<script setup lang="ts">
import ProjectTagsFilter from './ProjectTagsFilter.vue';
import ProjectsCarousel from './ProjectsCarousel.vue';
import profile from '../../data/profile.json';
import { ref, computed } from 'vue';
import type { Project } from '../../types/project';

const projects = profile.projects.filter((p: Project) => !p.viewDisabled);

const tagsToView = ['Vue', 'React', 'HTML', 'All'];
type Tag = (typeof tagsToView)[number];

const selectedTag = ref<Tag | null>(null);

const projectCountsByTag = computed<Record<Tag, number>>(() => {
    return tagsToView.reduce(
        (acc, tag) => {
            acc[tag] =
                tag === 'All'
                    ? projects.length
                    : projects.filter((p: Project) => p.tags.includes(tag)).length;
            return acc;
        },
        {} as Record<Tag, number>
    );
});

const filteredProjects = computed<Project[]>(() => {
    if (!selectedTag.value) return projects;
    return projects.filter((p: Project) => p.tags.includes(selectedTag.value!));
});
</script>
