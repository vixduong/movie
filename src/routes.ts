import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';
import { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]