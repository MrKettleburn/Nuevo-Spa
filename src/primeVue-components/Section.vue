<template>
  <section class="header-section">
    <div class="header-overlay">
      <h1 class="header-title">{{ title }}</h1>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.header-section {
  position: relative;
  width: 100%;
  height: 300px; 
  background-image: url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* Ruta de la imagen */
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-title {
  color: #fff; /* Texto blanco */
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
</style>
