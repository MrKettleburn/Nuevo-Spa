import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Services from '../views/Services.vue';
import EspecialistaView from '../views/EspecialistaView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Especialista',
    component: EspecialistaView
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;