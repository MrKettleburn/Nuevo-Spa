<template>
    <HomeComp/>
    <div class=" tit border p-3 justify-content-center d-flex aling-items-center">
        <h4 class="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Benefits</h4>
        <h1 class="mb-4">Why Choose us?</h1>
    </div>
    
    <BenefitsCarousel/>

    <OpinionesComp/>
</template>

<script setup>
import BenefitsCarousel from '../components/BenefitsCarousel.vue';
import HomeComp from '../components/HomeComp.vue';
import OpinionesComp from '../components/OpinionesComp.vue';
 </script>

<style>
    .tit{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-position: center;
    }
    
</style>