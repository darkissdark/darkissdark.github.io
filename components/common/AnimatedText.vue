<template>
    <div class="relative flex flex-col items-center select-none pt-2 uppercase">
        <component
            :is="tag"
            class="flex flex-wrap justify-center gap-2 text-3xl sm:text-4xl font-extrabold"
        >
            <span v-if="$slots['text-stroke']" class="text-stroke text-white dark:text-[#0d1117]">
                <slot name="text-stroke"> </slot>
            </span>

            <span
                v-if="$slots['text-shine']"
                class="relative text-[#3b82f6] dark:text-[#488aec] overflow-hidden"
            >
                <span class="shine"></span>
                <slot name="text-shine"></slot>
            </span>

            <slot></slot>
        </component>
        <div class="absolute inset-0 pointer-events-none">
            <svg
                class="star-svg"
                viewBox="0 0 68 68"
                fill="none"
                v-for="star in stars"
                :key="star.id"
                :style="star.style"
            >
                <path
                    d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
                    fill="#ff0"
                ></path>
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    tag: { type: String, default: 'div' },
    numStars: { type: Number, default: 7 },
    minDistance: { type: Number, default: 15 }, // px
});

function getDistance(a, b) {
    const dx = parseFloat(a.left) - parseFloat(b.left);
    const dy = parseFloat(a.top) - parseFloat(b.top);
    return Math.sqrt(dx * dx + dy * dy);
}

function generateNonOverlappingStars() {
    const stars = [];

    while (stars.length < props.numStars) {
        const top = Math.random() * 70 + 5;
        const left = Math.random() * 90 + 2;
        const size = Math.random() * 18 + 12;
        const delay = Math.random() * 2;
        const duration = Math.random() * 1.5 + 1;

        const newStar = {
            id: `${stars.length}-${Math.random().toString(36).slice(2)}`,
            top: top.toFixed(2),
            left: left.toFixed(2),
            style: {
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0,
                animation: `star-fade ${duration}s ${delay}s infinite`,
            },
        };

        const isTooClose = stars.some(
            (existing) => getDistance(existing, newStar) < props.minDistance
        );
        if (!isTooClose) stars.push(newStar);
    }

    return stars;
}

const stars = ref([]);

onMounted(() => {
    stars.value = generateNonOverlappingStars();
});
</script>

<style>
.text-stroke {
    letter-spacing: 1px;
    text-shadow: -1px -1px 0 #3b82f6, 1px -1px 0 #3b82f6, -1px 1px 0 #3b82f6, 1px 1px 0 #3b82f6;
}
.shine {
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(120deg, transparent 0%, #fff 50%, transparent 100%);
    opacity: 0.5;
    pointer-events: none;
    animation: shine-move 2.2s linear infinite;
}

@keyframes shine-move {
    0% {
        left: -75%;
    }
    100% {
        left: 120%;
    }
}

@keyframes star-fade {
    0% {
        opacity: 0;
        transform: scale(0) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1) rotate(-10deg);
    }
    100% {
        opacity: 0;
        transform: scale(0) rotate(0deg);
    }
}

.star-svg {
    position: absolute;
    animation: none;
}
</style>
