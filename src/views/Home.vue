<script setup>
import Carousel_Principal from '../primeVue-components/Carousel_Principal.vue';
import Info_Services from '../primeVue-components/Info_Services.vue';
import Testimonial from '../primeVue-components/Testimonial.vue';
</script>

<template>
  <div class="content">
    <Carousel_Principal/> 
    <Info_Services/>
    <Testimonial/>
  </div>
</template>

<style scoped>
  .content {
  flex: 1;
  padding: 10px;
}
</style>
