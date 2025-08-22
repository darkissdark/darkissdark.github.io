// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/critters', '@nuxtjs/color-mode'],
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'light',
    },
    critters: {},
    app: {
        baseURL: '/',
        head: {
            title: 'Viktor Medvid – Fullstack Developer',
            htmlAttrs: {
                lang: 'en',
                class: 'bg-bg',
            },
            meta: [
                {
                    name: 'description',
                    content: 'Fullstack resume of Viktor Medvid with experience in web development',
                },
                { property: 'og:title', content: 'Viktor Medvid – Fullstack Developer' },
                {
                    property: 'og:description',
                    content: 'Fullstack resume of Viktor Medvid with experience in web development',
                },
                { property: 'og:image', content: 'https://darkissdark.github.io/share.webp' },
                { property: 'og:url', content: 'https://darkissdark.github.io/' },
                { property: 'og:type', content: 'website' },
            ],
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        },
    },
});
