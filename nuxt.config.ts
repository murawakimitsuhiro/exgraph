import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        'nuxt-windicss',
    ],
    modules: [
        '@nuxtjs/color-mode'
    ],
    build: {
        analyze: true,
        transpile: ['@hpcc-js/wasm']
    },
    css: [
        'ress',
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        '~/assets/override-theme.css',
    ],
    typescript: {
        strict: true
    },
})
