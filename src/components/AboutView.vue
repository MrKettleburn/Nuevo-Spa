<template>
       <!-- Header Start -->
    <div class="jumbotron jumbotron-fluid bg-jumbotron" style="margin-bottom: 15px;">
        <div class="container text-center py-5">
            <h3 class="text-white display-3 mb-4">About Us</h3>
            <div class="d-inline-flex align-items-center text-white">
                <p class="m-0"></p>
            </div>
        </div>
    </div>
    <!-- Header End -->

    <div class=" tit border p-3 justify-content-center d-flex aling-items-center">
        <h4 class="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Spa Center</h4>
        <h1 class="mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
    </div>

    <AboutComp/>
    
    <HorarioComp/>

    <RouterView/>

</template>

<script setup> 

    import AboutComp from '@/components/AboutComp.vue';
     import HorarioComp from '@/components/HorarioComp.vue';

</script>

<style>
    .tit{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-position: center;
    }
    
</style>