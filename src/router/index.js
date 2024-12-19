import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../components/About.vue';
import Services from '../views/Services.vue';
import HorarioSemanal from '../components/HorarioSemanal.vue';
import HorarioSemanalCliente from '../components/HorarioSemanalCliente.vue';
import AdminPanel from "../views/admin/AdminPanel.vue";
import HomeLayout from "../views/HomeLayout.vue";
import AdminLayout from "../views/admin/AdminLayout.vue";
import PanelHorario from "../views/admin/PanelHorario.vue";
import AllActivitiesEsp from "../components/AllActivitiesEsp.vue";
import ActivitiesAll from "../components/ActivitiesAll.vue";
import MyReserves from "../components/MyReserves.vue";
import UsuariosAdmin from "../components/UsuariosAdmin.vue";
import LoginComp from "../components/LoginComp.vue";
import RegisterComp from "../components/RegisterComp.vue";


const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'services',
        name: 'Services',
        component: Services
      },
      {
        path: 'horario',
        name: 'Horario',
        component: HorarioSemanal
      },
      {
        path: 'allActivities',
        name: 'AllActivities',
        component: ActivitiesAll
      },
      {
        path: 'horarioCliente',
        name: 'HorarioCliente',
        component: HorarioSemanalCliente
      },
      {
        path: 'myreserves',
        name: 'MyReserves',
        component: MyReserves
      },
      {
        path: 'users',
        name: 'users',
        component: UsuariosAdmin
      },
      {
        path: 'login',
        name: 'login',
        component: LoginComp
      },
      {
        path: 'reg',
        name: 'reg',
        component: RegisterComp
      },
    ]
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'Admin',
        component: AdminPanel
      },
      {
        path: '/panelHorario',
        name: 'panelHorario',
        component: PanelHorario
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;