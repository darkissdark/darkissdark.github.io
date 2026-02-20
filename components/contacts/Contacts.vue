<template>
    <div
        class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        role="navigation"
        aria-label="Contacts"
    >
        <div
            class="flex flex-col items-center bg-bg rounded-xl shadow-lg border border-blue-200 px-3 py-2 gap-2"
        >
            <div class="flex gap-6">
                <a
                    v-for="contact in contacts"
                    :key="contact.label"
                    :href="contact.href"
                    :target="contact.target"
                    rel="noopener noreferrer"
                    :aria-label="contact.label"
                    class="hover:text-[#306cc6] dark:hover:text-[#488aec] text-txt hover:scale-120 transition-colors transition-transform"
                >
                    <component :is="contact.icon" class="w-7 h-7" />
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import profile from '../../data/profile.json';
import { markRaw } from 'vue';
import GithubIcon from '../../icons/GithubIcon.vue';
import LinkedinIcon from '../../icons/LinkedinIcon.vue';
import TelegramIcon from '../../icons/TelegramIcon.vue';
import EmailIcon from '../../icons/EmailIcon.vue';

const iconMap = {
    GitHub: markRaw(GithubIcon),
    LinkedIn: markRaw(LinkedinIcon),
    Telegram: markRaw(TelegramIcon),
    Email: markRaw(EmailIcon),
} as const;

type IconLabel = keyof typeof iconMap;

const contacts = profile.contacts.map((c) => ({
    ...c,
    icon: iconMap[c.label as IconLabel] ?? undefined,
}));
</script>
