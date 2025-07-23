import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    darkMode: 'class',
    content: ['./components/**/*.{vue,js,ts}', './pages/**/*.{vue,js,ts}', './app.vue'],
    theme: {
        extend: {
            colors: {
                bg: 'var(--clr-bg)',
                txt: 'var(--clr-txt)',
                'txt-sec': 'var(--clr-txt-sec)',
                bdr: 'var(--clr-bdr)',
                comp: 'var(--clr-comp)',
                'comp-hover': 'var(--clr-comp-hover)',
                accent: 'var(--clr-accent)',
                accent2: 'var(--clr-accent2)',
                accent3: 'var(--clr-accent3)',
                sec: 'var(--clr-sec)',
                tooltip: 'var(--tooltip-bg)',
                'tooltip-txt': 'var(--tooltip-txt)',
            },
        },
    },
    plugins: [],
};
