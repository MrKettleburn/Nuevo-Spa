<template>
  <div class="content-about">
    <Section title="About us"/>
    <div class="border py-4 flex flex-col justify-center items-center">
      <h4 class="inline-block font-bold text-uppercase bg-[#fff1f0] py-2 px-4 text-[#f9a392] text-2xl"> Spa Center </h4>
    <h1 class="text-black mt-4 font-bold text-5xl">Your Best Spa, Beauty & Skin Care Center</h1> 
</div>
    <DetailsAbout/>
    <div class="col-12 text-center ">
      <h2 class="text-black mt-4 font-bold text-3xl">Our Experts</h2>
    </div>
    <div class="grid card-container py-4">
      <div class="col-12 md:col-6 lg:col-3 card-item" v-for="(member, index) in teamMembers" :key="index">
          <FlipCard :name="member.name" :image="member.image" :description="member.description"/>
      </div>
    </div>
    <ScheduleAbout/>
  </div>
 
</template>

<script setup >
import DetailsAbout from '../primeVue-components/DetailsAbout.vue';
import ScheduleAbout from '../primeVue-components/ScheduleAbout.vue';
import Section from '../primeVue-components/Section.vue';
import FlipCard from './FlipCard.vue';
import { ref } from "vue";


const teamMembers = ref([
{
  name: "Olivia Mia",
  description: "Spa & Beauty Expert",
  image: '/public/img/team-1.jpg',
  socialLinks: [
    { icon: "pi pi-twitter", link: "#" },
    { icon: "pi pi-facebook", link: "#" },
    { icon: "pi pi-linkedin", link: "#" },
    { icon: "pi pi-instagram", link: "#" },
  ],
},
{
  name: "Cory Brown",
  description: "Spa & Beauty Expert",
  image: '/public/img/team-2.jpg',
  socialLinks: [
    { icon: "pi pi-twitter", link: "#" },
    { icon: "pi pi-facebook", link: "#" },
    { icon: "pi pi-linkedin", link: "#" },
    { icon: "pi pi-instagram", link: "#" },
  ],
},
{
  name: "Elizabeth Ross",
  description: "Spa & Beauty Expert",
  image: '/public/img/team-3.jpg',
  socialLinks: [
    { icon: "pi pi-twitter", link: "#" },
    { icon: "pi pi-facebook", link: "#" },
    { icon: "pi pi-linkedin", link: "#" },
    { icon: "pi pi-instagram", link: "#" },
  ],
},
{
  name: "Kelly Walke",
  description: "Spa & Beauty Expert",
  image: "/public/img/team-4.jpg",
  socialLinks: [
    { icon: "pi pi-twitter", link: "#" },
    { icon: "pi pi-facebook", link: "#" },
    { icon: "pi pi-linkedin", link: "#" },
    { icon: "pi pi-instagram", link: "#" },
  ],
},
]);
</script>  

<style scoped>
.content-about {
flex: 1;
padding: 10px;
}

.text-900 {
color: #1a202c;
}

.font-bold {
font-weight: 700;
}



</style>