<template>
     <div class="grid card-container py-4">
        <div class="col-12 md:col-6 lg:col-3 card-item" v-for="(member, index) in teamMembers" :key="index">
          <FlipCardServicios type="especialista" :name="member.name" :image="member.image" :description="member.description"/>
        </div>
    </div>
    <div class="grid card-container py-4">
        <div class="col-12 md:col-6 lg:col-3 card-item" v-for="(servicio, index) in servicios" :key="index">
          <FlipCardServicios type="servicio" :name="servicio.name" :image="XXX" :description="servicio.description" :price="servicio.precio" :duration="servicio.duration"/>
        </div>
    </div>
</template>

<script setup>
import FlipCardServicios from './FlipCardServicios.vue';
import { onMounted, ref } from "vue";
import { fetchServicios } from '../services/ServiciosService.js';

const servicios = ref([]);


const cargarServicios = async () => {
  try {
    servicios.value = await fetchServicios();
  } catch (error) {
    console.error('Error al cargar los servicios:', error);
  }
};

onMounted(cargarServicios);

const teamMembers = ref([
{
  name: "Olivia Mia",
  description: "Spa & Beauty Expert",
  image: '/public/img/team-1.jpg',
},
{
  name: "Cory Brown",
  description: "Spa & Beauty Expert",
  image: '/public/img/team-2.jpg',
},
{
  name: "Elizabeth Ross",
  description: "Spa & Beauty Expert",
  image: '/public/img/team-3.jpg',
},
{
  name: "Kelly Walke",
  description: "Spa & Beauty Expert",
  image: "/public/img/team-4.jpg",
},
]);
</script>