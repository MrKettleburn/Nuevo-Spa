<template>
    <div class="content-about">
    <Section title="About us"/>
    <Team_Member
        v-for="(member, index) in teamMembers"
        :key="index"
        :name="member.name"
        :title="member.title"
        :image="member.image"
        :socialLinks="member.socialLinks"
      />
    </div>
   
</template>

<script setup >
import Section from '../primeVue-components/Section.vue';
import Team_Member from '../primeVue-components/Team_Member.vue';
import { ref } from "vue";

const teamMembers = ref([
  {
    name: "Olivia Mia",
    title: "Spa & Beauty Expert",
    image: 'public\img\team-1.jpg',
    socialLinks: [
      { icon: "pi pi-twitter", link: "#" },
      { icon: "pi pi-facebook", link: "#" },
      { icon: "pi pi-linkedin", link: "#" },
      { icon: "pi pi-instagram", link: "#" },
    ],
  },
  {
    name: "Cory Brown",
    title: "Spa & Beauty Expert",
    image: 'public\img\team-1.jpg',
    socialLinks: [
      { icon: "pi pi-twitter", link: "#" },
      { icon: "pi pi-facebook", link: "#" },
      { icon: "pi pi-linkedin", link: "#" },
      { icon: "pi pi-instagram", link: "#" },
    ],
  },
  {
    name: "Elizabeth Ross",
    title: "Spa & Beauty Expert",
    image: 'public\img\team-1.jpg',
    socialLinks: [
      { icon: "pi pi-twitter", link: "#" },
      { icon: "pi pi-facebook", link: "#" },
      { icon: "pi pi-linkedin", link: "#" },
      { icon: "pi pi-instagram", link: "#" },
    ],
  },
  {
    name: "Kelly Walke",
    title: "Spa & Beauty Expert",
    image: "public\img\team-1.jpg",
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
</style>