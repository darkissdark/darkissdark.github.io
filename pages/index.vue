<template>
  <div class="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto p-4">
    <ProfileSidebar class="w-full md:w-1/3" />
    <MainResume class="w-full md:w-2/3" />
  </div>
</template>

<script setup lang="ts">
import ProfileSidebar from '../components/ProfileSidebar.vue';
import MainResume from '../components/MainResume.vue';
</script> 