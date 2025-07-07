<template>
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-8 lg:py-12">
        <HeroProfile />
        <HeroCard />
    </section>
</template>

<script setup lang="ts">
import HeroProfile from './HeroProfile.vue';
import HeroCard from './HeroCard.vue';
</script>
