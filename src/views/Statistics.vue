<script setup>
import FlipCard from '../components/FlipCard.vue';
import GraficoPorciento from '../components/GraficoPorciento.vue';
import image1 from "../assets/images/pexels-godisable-jacob-226636-871495.jpg"
</script>

<template>
    <div  class="container charts-grid">
        <GraficoPorciento title="Esto es un grafico" :percent="10"/>
        <GraficoPorciento title="Esto es un grafico" :percent="20"/>
        <GraficoPorciento title="Esto es un grafico" :percent="30"/>
        <GraficoPorciento title="Esto es un grafico" :percent="40"/>
        <GraficoPorciento title="Esto es un grafico" :percent="50"/>
        <GraficoPorciento title="Esto es un grafico" :percent="60"/>
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
