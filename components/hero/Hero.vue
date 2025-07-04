<template>
    <section class="relative flex flex-col items-center justify-between py-4 lg:py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <HeroProfile />
            <HeroCard />
        </div>
    </section>
</template>

<script setup lang="ts">
import HeroProfile from './HeroProfile.vue';
import HeroCard from './HeroCard.vue';
</script>
