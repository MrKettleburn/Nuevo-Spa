<script setup>
import FlipCard from '../components/FlipCard.vue';
import GraficoPorciento from '../components/GraficoPorciento.vue';
import image1 from "../assets/images/pexels-godisable-jacob-226636-871495.jpg"
</script>

<template>
    <div  class="container charts-grid">
        <!-- <GraficoPorciento title="Esto es un grafico" :percent="20"/>
        <GraficoPorciento title="Esto es un grafico" :percent="20"/>
        <GraficoPorciento title="Esto es un grafico" :percent="20"/>
        <GraficoPorciento title="Esto es un grafico" :percent="20"/>
        <GraficoPorciento title="Esto es un grafico" :percent="20"/>
        <GraficoPorciento title="Esto es un grafico" :percent="20"/> -->
        <FlipCard name="Olivia" :image="image1" description="Lorem ipsum it dolor"></FlipCard>
    </div>
</template>


<style scoped>

.container{
    margin: 20px;
    padding: 20px;
    background-color: #f3e1de;
    border-radius: 10px;
    justify-content: center;
}

.charts-grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}
</style>
