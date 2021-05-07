import 'reflect-metadata'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import 'plyr/src/sass/plyr.scss'
import '@splidejs/splide/dist/css/splide.min.css'
import VueLazyLoad from 'vue-lazy-loading'
import routes from 'virtual:generated-pages'
import { createApp } from 'vue'
import { store } from '@/stores'
// eslint-disable-next-line pretty-imports/sorted
import { createRouter, createWebHistory } from 'vue-router'
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
