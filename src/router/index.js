import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import Services from '../views/Services.vue';
import HorarioSemanal from '../components/HorarioSemanal.vue';



const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/horario',
    name: 'Horario',
    component: HorarioSemanal
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;