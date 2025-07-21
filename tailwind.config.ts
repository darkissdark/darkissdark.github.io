import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    darkMode: 'class',
    content: ['./components/**/*.{vue,js,ts}', './pages/**/*.{vue,js,ts}', './app.vue'],
    theme: {},
    plugins: [],
};
