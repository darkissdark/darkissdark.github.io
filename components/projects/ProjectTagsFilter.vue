<template>
    <div class="flex flex-wrap gap-2 mb-6">
        <button
            v-for="(count, tag) in projectCountsByTag"
            :key="tag"
            @click="handleTagClick(tag)"
            :class="tagButtonClass(tag)"
        >
            {{ tag }}&nbsp;<span class="text-xs">({{ count }})</span>
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    projectCountsByTag: Record<string, number>;
    selectedTag: string | null;
}>();

const emit = defineEmits<{
    (event: 'update:selectedTag', value: string | null): void;
}>();

function handleTagClick(tag: string): void {
    emit('update:selectedTag', tag === 'All' ? null : tag);
}

const baseClasses =
    'flex items-center px-3 py-1 rounded-lg text-sm font-semibold border transition';
const activeClasses =
    'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:text-white dark:border-blue-500';
const inactiveClasses =
    'bg-blue-50 text-blue-600 border-blue-200 cursor-pointer hover:bg-blue-100 dark:bg-gray-700 dark:text-blue-400 dark:border-gray-600 dark:hover:bg-gray-600';

function tagButtonClass(tag: string): string {
    const isActive = tag === props.selectedTag || (!props.selectedTag && tag === 'All');
    return [baseClasses, isActive ? activeClasses : inactiveClasses].join(' ');
}
</script>
