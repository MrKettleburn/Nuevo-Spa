<template>
  <div class=" mt-5">
    <!-- Título -->
    <div class="col-12 text-center ">
      <p class="text-pink-500 text-uppercase font-bold mb-2">Benefits</p>
      <h1 class="text-900 font-bold">Why Choose us?</h1>
    </div>
    <!-- Contenido de las tarjetas -->
    <div class="grid card-container">
      <div class="col-12 md:col-6 lg:col-3 card-item" v-for="service in services" :key="service.title">
        <Card class="text-center custom-card">
          <template #header>
            <h3 class="font-bold text-pink-500">{{ service.title }}</h3>
            <img :src="service.image" :alt="service.title" class="card-image border-round mb-3"/>
            <p class="card-description">{{ service.description }}</p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>


<script setup>
import  Card  from 'primevue/card';

const services = [
  {
    title: "Massage Treatment",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Our signature massage treatments are designed to relax your mind and body. With a variety of techniques, we tailor each session to your needs, ensuring ultimate relaxation and stress relief.",
  },
  {
    title: "Facial Therapy",
    image: "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Our facial therapies use premium organic products that hydrate, refresh, and rejuvenate your skin, leaving you with a glowing complexion and a sense of calm.",
  },
  {
    title: "Aromatherapy",
    image: "https://images.unsplash.com/photo-1563804447971-6e113ab80713?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience the healing power of aromatherapy, where essential oils are blended to suit your emotional and physical needs. Let the soothing scents enhance your relaxation.",
  },
  {
    title: "Body Scrubs",
    image: "https://images.unsplash.com/photo-1552046122-03184de85e08?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Indulge in our luxurious body scrub treatments, using natural exfoliants to rejuvenate and soften your skin, removing dead cells and revealing a smooth, refreshed feel.",
  },
];
</script>

<style scoped>
/* General */
.text-pink-500 {
  color: #ff6ab3 ;
}

.text-900 {
  color: #1a202c;
}

.font-bold {
  font-weight: 700;
}

.text-uppercase {
  text-transform: uppercase;
}

.mt-5 {
  margin-top: 2rem;
  padding-inline: 20px;
}

/* Tarjetas */
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card-item {
  flex: 1 1 calc(25% - 1rem);
  display: flex;
  justify-content: center;
}

.custom-card {
  background: faae9f;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

.card-description {
  color: #6b7280;
  font-size: 0.9rem;
  line-height: 1.5;
}

.p-card-body{
  padding:0 !important;
}

</style>
