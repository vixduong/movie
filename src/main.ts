import 'reflect-metadata'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'plyr/src/sass/plyr.scss'
import '@splidejs/splide/dist/css/splide.min.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

import { store } from '@/stores'
import VueLazyLoad from 'vue-lazy-loading'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueLazyLoad)

app.mount('#app')
