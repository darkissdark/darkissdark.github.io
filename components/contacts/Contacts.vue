<template>
    <section class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div
            class="flex flex-col items-center bg-white rounded-xl shadow-lg border border-blue-200 px-3 py-2 gap-2"
        >
            <div class="flex gap-6">
                <a
                    v-for="contact in contacts"
                    :key="contact.label"
                    :href="contact.href"
                    :target="contact.target"
                    ref="noopener noreferrer"
                    :aria-label="contact.label"
                    class="hover:text-[#306cc6] hover:scale-120 transition-colors transition-transform"
                >
                    <component :is="contact.icon" class="w-7 h-7" />
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue';
import GithubIcon from '../../icons/GithubIcon.vue';
import LinkedinIcon from '../../icons/LinkedinIcon.vue';
import TelegramIcon from '../../icons/TelegramIcon.vue';
import EmailIcon from '../../icons/EmailIcon.vue';

interface Contact {
    label: string;
    href: string;
    target: '_blank' | '_self';
    icon: any;
}

const contacts: Contact[] = [
    {
        label: 'GitHub',
        href: 'https://github.com/darkissdark',
        target: '_blank',
        icon: markRaw(GithubIcon),
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/viktor-medvid-910160357/',
        target: '_blank',
        icon: markRaw(LinkedinIcon),
    },
    {
        label: 'Telegram',
        href: 'https://t.me/darkiss',
        target: '_blank',
        icon: markRaw(TelegramIcon),
    },
    {
        label: 'Email',
        href: 'mailto:darkissdark@gmail.com',
        target: '_self',
        icon: markRaw(EmailIcon),
    },
];
</script>
