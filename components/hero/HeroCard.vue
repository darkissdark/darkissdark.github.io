<template>
    <div class="h-full flex flex-col rounded-xl shadow-lg border border-bdr bg-bg text-txt">
        <!-- Browser tab imitation -->
        <div
            class="flex items-center px-4 py-2 bg-gray-100 dark:bg-comp border-b rounded-t-xl border-bdr"
        >
            <div class="flex space-x-2">
                <span
                    v-for="color in trafficLights"
                    :key="color"
                    :class="['w-3 h-3 rounded-full', color]"
                ></span>
            </div>
            <span class="ml-4 text-gray-700 dark:text-gray-400 text-xs select-none"
                >Employees.vue</span
            >
        </div>

        <!-- Code block -->
        <div class="flex-1 bg-comp-hover p-4 sm:p-6 font-mono text-sm text-left rounded-b-xl">
            <div>
                <span class="text-[#0000FF] dark:text-[#569CD6]">const</span>
                <span class="text-[#001080] dark:text-[#9CDCFE]"> employee </span>
                <span class="text-black dark:text-gray-300">= </span>
                <span class="text-black dark:text-amber-300">&#123;</span>
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
                    <span class="text-[#0000FF] dark:text-[#569CD6]">[<br /></span>
                    <template v-for="(item, i) in value" :key="i">
                        <span class="text-black dark:text-amber-300 ml-4 inline-block">&#123;</span>
                        <template v-for="(subValue, subKey, idx) in item" :key="subKey">
                            <span class="dark:text-[#9CDCFE] text-blue-900">{{ subKey }}</span
                            >:
                            <span :class="getValueStyle(subValue)">
                                {{ formatValue(subValue) }}
                            </span>
                            <span
                                v-if="idx < Object.keys(item).length - 1"
                                class="text-black dark:text-gray-300"
                                >,
                            </span>
                        </template>
                        <span class="text-black dark:text-amber-300">&#125;</span>
                        <span v-if="i < value.length - 1" class="text-black dark:text-gray-300"
                            >,<br
                        /></span>
                    </template>
                    <span class="text-[#0000FF] dark:text-[#569CD6]">]</span>
                </template>

                <!-- Simple Arrays -->
                <span class="ml-4" v-else-if="Array.isArray(value)">
                    <template v-for="(v, index) in value" :key="index">
                        <span v-if="index === 0" class="text-[#0000FF] dark:text-[#569CD6]">[</span>
                        <span :class="valueStyle.array">'{{ v }}'</span>
                        <span v-if="index < value.length - 1" class="text-black dark:text-gray-300"
                            >,
                        </span>
                        <span
                            v-if="index === value.length - 1"
                            class="text-[#0000FF] dark:text-[#569CD6]"
                            >]<span class="text-black dark:text-gray-300">, </span></span
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
                <span v-else class="text-black dark:text-gray-300">,</span>
            </div>

            <div>
                <span class="text-black dark:text-amber-300">&#125;</span
                ><span class="text-black dark:text-gray-300">;</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import lastUpdate from '../../lastUpdate';
import profile from '../../data/profile.json';

const { name, location, skills, tools, languages } = profile;

const developer = {
    company: null,
    hireable: true,
    lastUpdate,
    name,
    location,
    skills,
    tools,
    languages,
};

const trafficLights = ['bg-red-400', 'bg-yellow-400', 'bg-green-400'];
const keysStyle = 'dark:text-[#9CDCFE] text-blue-900';
const valueStyle = {
    null: 'dark:text-[#569CD6] text-[#0000FF]',
    boolean: 'dark:text-[#569CD6] text-[#0000FF]',
    string: 'dark:text-[#CE9178] text-[#A31515]',
    array: 'dark:text-[#CE9178] text-[#A31515]',
    number: 'text-orange-400',
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
