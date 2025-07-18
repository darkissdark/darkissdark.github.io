<template>
    <div class="projects-carousel">
        <Swiper
            ref="swiperRef"
            :modules="[Navigation, Pagination]"
            :space-between="24"
            :breakpoints="swiperBreakpoints"
            navigation
            pagination
            class="!pb-10"
        >
            <SwiperSlide v-for="project in projects" :key="project.title">
                <ProjectCard :project="project" />
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { Project } from '../../types/project';
import ProjectCard from './ProjectCard.vue';

const props = defineProps<{ projects: Project[] }>();

const swiperRef = ref(null);

const swiperBreakpoints = {
    640: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 1 },
    1024: { slidesPerView: 2, slidesPerGroup: 1 },
};
</script>

<style lang="sass">
.projects-carousel
  .swiper
    overflow: visible
  .swiper-slide
    transition: transform 0.3s ease
    transform: none
    will-change: transform
    @media (min-width: 768px)
      &:not(.swiper-slide-active):not(.swiper-slide-next)
        transform: scale(0)
    @media (max-width: 767px)
      &:not(.swiper-slide-active)
        transform: scale(0)
  .swiper-button-next
      right: -40px
  .swiper-button-prev
      left: -40px
  @media (max-width: 639px)
    .swiper-button-next
      display: none
</style>
