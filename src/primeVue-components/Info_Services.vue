<template>
  <div class="grid justify-content-center mt-5">
    <div class="col-12 text-center">
      <h6 class="text-pink-500 text-uppercase font-bold mb-2">Benefits</h6>
      <h1 class="text-900 font-bold">Why Choose us?</h1>
    </div>
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-3" v-for="service in services" :key="service.title">
        <p-card :header="service.title" class="text-center">
          <img :src="service.image" :alt="service.title" class="w-full border-round mb-3" />
          <p>{{ service.description }}</p>
        </p-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import  Card  from 'primevue/card';

// Definimos los servicios en una constante
const services = [
  {
    title: "Massage Treatment",
    image: "/images/massage-treatment.jpg",
    description:
      "Our signature massage treatments are designed to relax your mind and body. With a variety of techniques, we tailor each session to your needs, ensuring ultimate relaxation and stress relief.",
  },
  {
    title: "Facial Therapy",
    image: "/images/facial-therapy.jpg",
    description:
      "Our facial therapies use premium organic products that hydrate, refresh, and rejuvenate your skin, leaving you with a glowing complexion and a sense of calm.",
  },
  {
    title: "Aromatherapy",
    image: "/images/aromatherapy.jpg",
    description:
      "Experience the healing power of aromatherapy, where essential oils are blended to suit your emotional and physical needs. Let the soothing scents enhance your relaxation.",
  },
  {
    title: "Body Scrubs",
    image: "/images/body-scrub.jpg",
    description:
      "Indulge in our luxurious body scrub treatments, using natural exfoliants to rejuvenate and soften your skin, removing dead cells and revealing a smooth, refreshed feel.",
  },
];
</script>

<style>
.text-pink-500 {
  color: #ff6ab3;
}

.text-900 {
  color: #1a202c;
}

.font-bold {
  font-weight: 700;
}

.border-round {
  border-radius: 10px;
}

.w-full {
  width: 100%;
}
</style>
