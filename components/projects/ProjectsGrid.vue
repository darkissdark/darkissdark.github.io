<template>
    <section class="py-4">
        <h2 class="text-3xl font-extrabold text-center mb-8 text-gray-800">Projects</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
                v-for="project in projects"
                :key="project.title"
                class="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow duration-300"
            >
                <NuxtImg
                    v-if="project.image"
                    :src="project.image"
                    :alt="`Preview image for ${project.title}`"
                    class="rounded-xl w-full object-cover mb-2 max-h-40"
                    width="600"
                    height="240"
                    format="webp"
                    loading="lazy"
                    sizes="xs:200px md:300px lg:600px"
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
                        :href="project.visit"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="`Visit ${project.title}`"
                        class="flex items-center justify-center bg-[#488aec] text-white font-bold text-base cursor-pointer text-center uppercase align-middle user-select-none shadow-lg border-none px-3 py-1 rounded-lg gap-2 transition duration-300 hover:bg-[#306cc6]"
                    >
                        <VisitIcon width="24" height="24" /> VISIT
                    </a>
                    <a
                        :href="project.source"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="`Source code for ${project.title}`"
                        class="flex items-center justify-center bg-[#488aec] text-white font-bold text-base cursor-pointer text-center uppercase align-middle user-select-none shadow-lg border-none px-3 p-1 rounded-lg gap-2 transition duration-300 hover:bg-[#306cc6]"
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
import { NuxtImg } from '#components';

interface Project {
    title: string;
    description: string;
    tags: string[];
    visit: string;
    source: string;
    image: string;
}

const projects: Project[] = [
    {
        title: 'Portfolio',
        description:
            'Personal portfolio website built with Nuxt 3 and Tailwind CSS. Responsive, fast, and beautiful.',
        tags: ['Nuxt3', 'Vue', 'TailwindCSS', 'TypeScript'],
        visit: 'https://darkissdark.github.io',
        source: 'https://github.com/darkissdark/darkissdark.github.io',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    },
    {
        title: 'Trello-like Application',
        description:
            'Features include creating and managing boards, adding and organizing tasks, responsive design, user authentication, custom board backgrounds, and drag & drop functionality for cards and lists.',
        tags: ['React', 'Redux', 'TypeScript', 'SCSS'],
        visit: 'https://darkissdark.github.io/my-trello/',
        source: 'https://github.com/darkissdark/my-trello/',
        image: '/images/projects/trello-like.webp',
    },
    {
        title: 'DiGi - Digital Agency',
        description:
            'A training project for the frontend course at School of Programming «Shpp», showcasing modern web development practices.',
        tags: ['HTML', 'CSS', 'JavaScript'],
        visit: 'https://darkissdark.github.io/di-gi/',
        source: 'https://github.com/darkissdark/di-gi',
        image: '/images/projects/di-gi.webp',
    },
];
</script>
