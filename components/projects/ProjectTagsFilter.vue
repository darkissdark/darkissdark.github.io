<template>
    <div class="flex flex-wrap gap-2 mb-6">
        <button
            v-for="tag in allTags"
            :key="tag"
            @click="handleTagClick(tag)"
            :class="tagButtonClass(tag)"
        >
            {{ tag }}
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    allTags: string[];
    selectedTag: string | null;
}>();

const emit = defineEmits<{
    (event: 'update:selectedTag', value: string | null): void;
}>();

function handleTagClick(tag: string) {
    emit('update:selectedTag', tag === 'All' ? null : tag);
}

function tagButtonClass(tag: string): string[] {
    const isActive = tag === props.selectedTag || (!props.selectedTag && tag === 'All');
    return [
        'px-3',
        'py-1',
        'rounded-lg',
        'text-sm',
        'font-semibold',
        'border',
        'transition',
        isActive
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-blue-50 text-blue-600 border-blue-200 cursor-pointer hover:bg-blue-100',
    ];
}
</script>
