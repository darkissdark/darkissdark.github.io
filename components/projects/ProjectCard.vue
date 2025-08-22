<template>
    <article
        class="bg-bg rounded-3xl shadow-lg border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700"
    >
        <img
            v-if="project.image"
            :src="project.image"
            :alt="`Preview image for ${project.title}`"
            class="rounded-xl w-full object-cover mb-2 max-h-90 md:max-h-60 lg:max-h-80"
            loading="lazy"
        />

        <h3 class="font-bold text-xl md:text-2xl text-gray-900 dark:text-gray-100">
            {{ project.title }}
        </h3>

        <p class="text-gray-600 text-base md:text-lg dark:text-gray-300">
            {{ project.description }}
        </p>

        <ul class="flex flex-wrap gap-2">
            <li
                v-for="tag in project.tags"
                :key="tag"
                class="bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-lg text-sm dark:bg-blue-900 dark:text-blue-300"
            >
                {{ tag }}
            </li>
        </ul>

        <div class="flex gap-3 mt-auto">
            <a
                v-if="!project.disabled"
                :href="project.visit"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Visit ${project.title}`"
                class="flex items-center justify-center bg-[#488aec] text-white font-bold text-base px-3 py-1 rounded-lg gap-2 transition hover:bg-[#306cc6] dark:bg-[#306cc6] dark:hover:bg-[#488aec]"
            >
                <VisitIcon width="24" height="24" /> VISIT
            </a>
            <a
                :href="project.source"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`Source code for ${project.title}`"
                class="flex items-center justify-center bg-[#488aec] text-white font-bold text-base px-3 py-1 rounded-lg gap-2 transition hover:bg-[#306cc6] dark:bg-[#306cc6] dark:hover:bg-[#488aec]"
            >
                <GithubIcon width="24" height="24" /> SOURCE
            </a>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { Project } from '../../types/project';
import VisitIcon from '../../icons/VisitIcon.vue';
import GithubIcon from '../../icons/GithubIcon.vue';

defineProps<{ project: Project }>();
</script>
