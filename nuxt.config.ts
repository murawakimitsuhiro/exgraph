import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    // build: {
    //     transpile: ['d3-graphviz'],
    // },
    css: [
        // '~/assets/variable.css',
        'primevue/resources/themes/lara-light-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css'
    ],
    typescript: {
        strict: true
    }
})
