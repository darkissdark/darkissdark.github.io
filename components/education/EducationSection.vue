<template>
    <section
        class="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 mb-4 animate-fadeIn"
    >
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-2">
            <EducationIcon />
            Education & certifications
        </h2>
        <ul class="flex flex-col gap-6">
            <li
                v-for="(item, index) in educationData"
                :key="index"
                class="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 rounded-xl border border-blue-100 bg-blue-50/40"
            >
                <div class="flex-1">
                    <div class="font-semibold text-lg text-blue-900">
                        {{ item.institution }}
                        <span class="text-gray-700 text-base"> {{ item.year }}</span>
                    </div>

                    <div v-if="item.description" class="text-gray-600 text-base">
                        {{ item.description }}
                    </div>
                    <a
                        v-if="item.link"
                        :href="item.link"
                        target="_blank"
                        class="text-blue-600 hover:underline text-base"
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

interface EducationItem {
    institution: string;
    year: string;
    description?: string;
    link?: string;
    linkText?: string;
}

const educationData: EducationItem[] = [
    {
        institution: 'School of Programming «Shpp»',
        year: '2025',
        link: 'https://diploma.programming.org.ua/en/d/ojM7n5vrkRO6DpdG1aebVW8Z43Y0yaEL',
        linkText: 'Computer Science Basics',
    },
    {
        institution: 'Vinnytsia National Technical University',
        year: '2008 – 2013',
        description: 'Institute of Civil Engineering, Thermal Power Engineering and Gas Supply',
    },
    {
        institution: 'Vinnytsia Technical Lyceum',
        year: '2004 – 2008',
        description: 'Specialization in Informatics and Computer Technology',
    },
];
</script>
