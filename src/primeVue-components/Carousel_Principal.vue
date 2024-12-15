<script setup>

import Carousel from 'primevue/carousel';
import Button from 'primevue/button';
import { ref } from 'vue';

// Datos del carrusel
const carouselItems = ref([
  {
    title: 'Massage Treatment',
    subtitle: 'Spa & Beauty Center',
    description: 'Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Facial Care',
    subtitle: 'Relax & Glow',
    description: 'Experience the ultimate relaxation with our professional facial care services, tailored to rejuvenate your skin.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Body Therapy',
    subtitle: 'Rejuvenate Yourself',
    description: 'Rediscover your body’s potential with our specialized body therapies designed for holistic well-being.',
    image: 'https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
  {
    title: 'Mind & Wellness',
    subtitle: 'Harmonize Your Mind and Body',
    description: 'Achieve inner peace and balance with our mindfulness programs, including yoga, meditation, and holistic wellness practices tailored to rejuvenate your soul.',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '#',
  },
]);
</script>



<template>
    <!-- Carousel Section -->
    <div class="carousel-wrapper">
      <Carousel :value="carouselItems" :numVisible="1" :numScroll="1" :showIndicators="false" class="custom-carousel">
        <template #item="{ data }">
            <div class="carousel-item" >
            <img :src="data.image" alt="Carousel Image" class="carousel-image" />
            <div class="carousel-caption">
              <h6 class="subtitle">{{ data.subtitle }}</h6>
              <h3 class="title">{{ data.title }}</h3>
              <p class="description">{{ data.description }}</p>
              <Button label='Start Now' class="p-button-outlined p-button-light" :href="data.link" />
            </div>
          </div>
        </template>
      </Carousel>
    </div>
</template>

<style scoped>


.carousel-wrapper {
  position: relative;
  overflow: hidden; 
}

.carousel-item {
  position: relative;
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.carousel-image {
  position: absolute;
  width: 100%;
  height: 88vh;
  object-fit: cover;
  z-index: -1;
}

.carousel-caption {
  position: relative;
  max-width: 900px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  animation: fadeInUp 1s ease;
}

.subtitle {
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 1rem;
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.description {
  margin-bottom: 1.5rem;
  padding: 0 2rem;
}

.p-carousel-prev-button{
  position:absolute;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
