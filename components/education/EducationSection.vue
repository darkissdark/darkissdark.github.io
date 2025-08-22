<template>
    <section
        class="bg-bg/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 animate-fadeIn dark:bg-bg-dark/80 dark:border-gray-700"
    >
        <h2
            class="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-100"
        >
            <EducationIcon />
            Education & certifications
        </h2>
        <ul class="flex flex-col gap-6">
            <li
                v-for="(item, index) in educationData"
                :key="index"
                class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 rounded-xl border border-blue-100 bg-blue-50/40 dark:border-blue-900 dark:bg-blue-900/40"
            >
                <div class="flex-1">
                    <div class="font-semibold text-lg text-blue-900 dark:text-blue-100">
                        {{ item.institution }}
                        <span class="text-gray-700 text-base dark:text-gray-300">
                            {{ item.year }}</span
                        >
                    </div>

                    <div v-if="item.description" class="text-gray-600 text-base dark:text-gray-400">
                        {{ item.description }}
                    </div>
                    <a
                        v-if="item.link"
                        :href="item.link"
                        target="_blank"
                        class="text-blue-600 hover:underline text-base dark:text-blue-400"
                    >
                        {{ item.linkText }}
                    </a>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import EducationIcon from '../../icons/EducationIcon.vue';
import profile from '../../data/profile.json';

const educationData = profile.education;
</script>
