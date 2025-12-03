<template>
    <section
        class="bg-bg/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 animate-fadeIn dark:bg-bg-dark/80 dark:border-gray-700 mb-8"
    >
        <h2
            class="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-gray-100"
        >
            <WorkIcon />
            Work Experience
        </h2>
        <ul class="flex flex-col gap-6">
            <li
                v-for="(item, index) in experienceData"
                :key="index"
                class="flex flex-col gap-4 p-4 rounded-xl border border-blue-100 bg-blue-50/40 dark:border-blue-900 dark:bg-blue-900/40"
            >
                <div class="flex-1">
                    <div class="font-semibold text-lg text-blue-900 dark:text-blue-100">
                        {{ item.position }}
                        <span class="text-gray-700 text-base dark:text-gray-300">
                            {{ item.period }}</span
                        >
                    </div>
                    <div class="font-medium text-base text-blue-800 dark:text-blue-200 mt-1">
                        {{ item.company }}
                    </div>

                    <div v-if="item.description" class="text-gray-600 text-base dark:text-gray-400 mt-2">
                        {{ item.description }}
                    </div>

                    <div v-if="item.technologies && item.technologies.length" class="mt-3">
                        <div class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Technologies:
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="(tech, techIndex) in item.technologies"
                                :key="techIndex"
                                class="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                    <div v-if="item.methodologies && item.methodologies.length" class="mt-3">
                        <div class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Methodologies:
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="(method, methodIndex) in item.methodologies"
                                :key="methodIndex"
                                class="px-2 py-1 text-xs rounded-md bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                            >
                                {{ method }}
                            </span>
                        </div>
                    </div>

                    <div v-if="item.tools && item.tools.length" class="mt-3">
                        <div class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Tools:
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <span
                                v-for="(tool, toolIndex) in item.tools"
                                :key="toolIndex"
                                class="px-2 py-1 text-xs rounded-md bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
                            >
                                {{ tool }}
                            </span>
                        </div>
                    </div>

                    <div v-if="item.responsibilities && item.responsibilities.length" class="mt-3">
                        <div class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Responsibilities:
                        </div>
                        <ul class="list-disc list-inside space-y-1 text-gray-600 text-sm dark:text-gray-400">
                            <li v-for="(resp, respIndex) in item.responsibilities" :key="respIndex">
                                {{ resp }}
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import WorkIcon from '../../icons/WorkIcon.vue';
import profile from '../../data/profile.json';
import type { Experience } from '../../types/experience';

const experienceData = profile.experience as Experience[];
</script>

