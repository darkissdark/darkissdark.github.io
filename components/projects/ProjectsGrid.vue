<template>
    <section class="py-4">
        <h2 class="text-3xl font-extrabold mb-8 text-gray-800">Projects</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
                v-for="project in projects"
                :key="project.title"
                class="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300"
            >
                <img
                    v-if="project.image"
                    :src="project.image"
                    :alt="`Preview image for ${project.title}`"
                    class="rounded-xl w-full object-cover mb-2 max-h-40"
                    loading="lazy"
                />

                <h3 class="font-bold text-1xl md:text-2xl text-gray-900">
                    {{ project.title }}
                </h3>

                <p class="text-gray-600 text-base md:text-lg">{{ project.description }}</p>

                <ul class="flex flex-wrap gap-2">
                    <li
                        v-for="tag in project.tags"
                        :key="tag"
                        class="bg-blue-50 text-blue-600 font-semibold px-3 py-1 rounded-lg text-sm"
                    >
                        {{ tag }}
                    </li>
                </ul>

                <div class="flex gap-3 mt-auto">
                    <a
                        :href="project.disabled ? '#' : project.visit"
                        v-if="!project.disabled"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="`Visit ${project.title}`"
                        class="flex items-center justify-center bg-[#488aec] text-white text-shadow text-18 font-bold text-base cursor-pointer text-center uppercase align-middle user-select-none shadow-lg border-none px-3 p-1 rounded-lg gap-2 transition duration-300 hover:bg-[#306cc6] size18"
                    >
                        <VisitIcon width="24" height="24" /> VISIT
                    </a>
                    <a
                        :href="project.source"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="`Source code for ${project.title}`"
                        class="flex items-center justify-center bg-[#488aec] text-white text-shadow text-18 font-bold text-base cursor-pointer text-center uppercase align-middle user-select-none shadow-lg border-none px-3 p-1 rounded-lg gap-2 transition duration-300 hover:bg-[#306cc6] size18"
                    >
                        <GithubIcon width="24" height="24" /> SOURCE
                    </a>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup lang="ts">
import GithubIcon from '../../icons/GithubIcon.vue';
import VisitIcon from '../../icons/VisitIcon.vue';
import profile from '../../data/profile.json';

const projects = profile.projects;
</script>
