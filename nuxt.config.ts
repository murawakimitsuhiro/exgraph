import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    build: {
        analyze: true,
        transpile: ['@hpcc-js/wasm']
    },
    css: [
        // '~/assets/variable.css',
        'ress',
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ],
    typescript: {
        strict: true
    }
})
