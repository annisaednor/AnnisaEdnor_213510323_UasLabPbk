import { createRouter, createWebHistory } from 'vue-router';

import Photo from '../components/Fotowidget.vue';
import Stopwatch from '../components/Stopwatchwidget.vue';
import Cuaca from '../components/Cuacawidget.vue';
import Lokasi from '../components/Lokasiwidget.vue';

const routes = [
  { path: '/', component: Photo},
  { path: '/mylokasi', component: Lokasi },
  { path: '/mycuaca', component: Cuaca },
  { path: '/mystopwatch', component: Stopwatch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;