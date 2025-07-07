<template>
    <div class="h-full flex flex-col rounded-xl shadow-lg border border-gray-200 bg-white">
        <!-- Browser tab imitation -->
        <div class="flex items-center px-4 py-2 bg-gray-100 border-b border-gray-200">
            <div class="flex space-x-2">
                <span
                    v-for="color in trafficLights"
                    :key="color"
                    :class="['w-3 h-3 rounded-full', color]"
                ></span>
            </div>
            <span class="ml-4 text-gray-700 text-xs select-none">Employees.vue</span>
        </div>

        <!-- Code block -->
        <div class="flex-1 bg-gray-50 p-4 sm:p-6 font-mono text-sm text-left rounded-b-xl">
            <div>
                <span class="text-blue-600">const</span>
                <span class="text-blue-800"> employee </span>
                <span class="text-blue-600">= </span>
                <span class="text-gray-700">&#123;</span>
            </div>

            <div
                v-for="(value, key) in developer"
                :key="key"
                :class="{
                    'flex flex-wrap':
                        Array.isArray(value) && value.every((item) => typeof item !== 'object'),
                }"
                class="pl-4 sm:pl-8"
            >
                <span :class="keysStyle">{{ key }}: </span>

                <!-- Arrays of Objects -->
                <template
                    v-if="Array.isArray(value) && value.every((item) => typeof item === 'object')"
                >
                    <span class="text-pink-600">[<br /></span>
                    <template v-for="(item, i) in value" :key="i">
                        <span class="text-gray-700 ml-4 inline-block">&#123;</span>
                        <template v-for="(subValue, subKey, idx) in item" :key="subKey">
                            <span class="text-blue-900">{{ subKey }}</span
                            >:
                            <span :class="getValueStyle(subValue)">
                                {{ formatValue(subValue) }}
                            </span>
                            <span v-if="idx < Object.keys(item).length - 1" class="text-gray-400"
                                >,
                            </span>
                        </template>
                        <span class="text-gray-700">&#125;</span>
                        <span v-if="i < value.length - 1" class="text-gray-400">,<br /></span>
                    </template>
                    <span class="text-pink-600">]</span>
                </template>

                <!-- Simple Arrays -->
                <span class="ml-4" v-else-if="Array.isArray(value)">
                    <template v-for="(v, index) in value" :key="index">
                        <span v-if="index === 0" class="text-pink-600">[</span>
                        <span :class="valueStyle.array">'{{ v }}'</span>
                        <span v-if="index < value.length - 1" class="text-gray-400">, </span>
                        <span v-if="index === value.length - 1" class="text-pink-600"
                            >]<span class="text-gray-400">, </span></span
                        >
                    </template>
                </span>

                <!-- Primitives -->
                <template v-else>
                    <span :class="getValueStyle(value)">
                        {{ formatValue(value) }}
                    </span>
                </template>

                <template
                    v-if="Array.isArray(value) && value.every((item) => typeof item !== 'object')"
                ></template>
                <span v-else class="text-gray-400">,</span>
            </div>

            <div><span class="text-gray-700">&#125;;</span></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import lastUpdate from '../../lastUpdate.js';

const developer = {
    company: null,
    hireable: true,
    lastUpdate,
    languages: [
        { language: 'English', level: 'A2' },
        { language: 'Ukrainian', level: 'Fluent' },
    ],
    location: 'Split, Croatia',
    name: 'Viktor Medvid',
    skills: ['Vue', 'Nuxt', 'React', 'JS', 'CSS', 'SASS'],
    tools: ['Git', 'Figma', 'Webpack', 'Vite', 'Trello', 'Jira'],
};

const trafficLights = ['bg-red-400', 'bg-yellow-400', 'bg-green-400'];
const keysStyle = 'text-blue-900';
const valueStyle = {
    null: 'text-amber-700',
    boolean: 'text-purple-600',
    string: 'text-green-700',
    array: 'text-green-700',
    number: 'text-orange-600',
};

const getValueStyle = (value: unknown): string => {
    if (value === null) return valueStyle.null;
    if (typeof value === 'boolean') return valueStyle.boolean;
    if (typeof value === 'number') return valueStyle.number;
    if (typeof value === 'string') return valueStyle.string;
    return 'text-gray-600';
};

const formatValue = (value: unknown): string => {
    if (value === null) return 'null';
    if (typeof value === 'string') return `'${value}'`;
    return String(value);
};
</script>
