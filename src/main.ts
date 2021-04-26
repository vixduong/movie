import 'reflect-metadata';
import 'virtual:windi.css';
import 'plyr/src/sass/plyr.scss'
import '@splidejs/splide/dist/css/splide.min.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import { store } from '@/stores';
import VueLazyLoad from 'vue-lazy-loading'

import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueLazyLoad)

app.mount('#app')
