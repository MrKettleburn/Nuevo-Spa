
<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import 'primeicons/primeicons.css';



</script>

 
<template>
   <div id="app">
     <Navbar/>
     
       <router-view />
     <Footer/>
    </div>
  
</template>


<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}


</style>








