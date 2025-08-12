<template>
    <div
        class="flex flex-col items-center justify-center rounded-xl p-4 sm:p-6 bg-bg text-txt shadow-md h-full"
    >
        <div class="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
            <BlobBg
                class="absolute inset-0 w-[140%] h-[140%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <BlobMask class="absolute inset-0 w-full h-full" />
        </div>
        <div class="mt-4 text-xl font-semibold text-txt flex items-center justify-center">
            Hi, I'm {{ firstName }}
            <span class="wave inline-block">
                <HandWave class="w-7 h-7 align-middle" />
            </span>
        </div>
        <AnimatedText tag="h1">
            <template #text-stroke> {{ rolePartOne }} </template>
            <template #text-shine> {{ rolePartTwo }} </template>
        </AnimatedText>
        <div class="w-full justify-center flex items-center gap-3 mt-6 z-10">
            <a
                href="/Viktor_Medvid_Fullstack_Developer.pdf"
                target="_blank"
                class="flex items-center justify-center bg-[#488aec] text-white text-shadow font-bold text-base cursor-pointer text-center uppercase align-middle user-select-none shadow-lg border-none px-6 py-3 rounded-lg gap-2 transition duration-300 hover:bg-[#306cc6] size18"
            >
                <ResumeIcon class="w-6 h-6" />
                Get resume
            </a>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BlobBg from '../../icons/BlobBg.vue';
import BlobMask from '../../icons/BlobMask.vue';
import HandWave from '../../icons/HandWave.vue';
import ResumeIcon from '../../icons/ResumeIcon.vue';
import AnimatedText from '../common/AnimatedText.vue';
import profile from '../../data/profile.json';

const { name, role } = profile;

const firstName = name.split(' ')[0];
const [rolePartOne, rolePartTwo] = role.split(' ');
</script>

<style scoped>
.wave {
    animation: wave-animation 2.5s infinite;
    transform-origin: 70% 70%;
    display: inline-block;
}
@keyframes wave-animation {
    0% {
        transform: rotate(0deg);
    }
    10% {
        transform: rotate(14deg);
    }
    20% {
        transform: rotate(-8deg);
    }
    30% {
        transform: rotate(14deg);
    }
    40% {
        transform: rotate(-4deg);
    }
    50% {
        transform: rotate(10deg);
    }
    60% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>
