<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

</script>

<template>
    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                <p class="title">{{ title }}</p>
                <img :src="image" :alt="name" class="card-photo">
                <p class="description">{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>

.card {
  background-color: transparent;
  width: 320px;
  height: 400px;
  perspective: 1000px;
  font-family: sans-serif;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  height: auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-front {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid coral;
  border-radius: 1rem;
  background: linear-gradient(120deg, rgb(255, 210, 196) 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%);
  color: coral;
  width: 100%;
  height: 100%;
  padding: 20px;
  transition: all 0.3s ease-in-out;
}

.title {
  font-size: 1.4em;
  font-weight: bold;
  text-align: center;
  margin: 0 0 10px;
}

.card-photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 1rem;
  border: 1px solid coral;
  margin-bottom: 10px;
}

.description {
  height: 80px;
  overflow: hidden;
  text-align: center;
  transition: height 0.3s ease;
}

.card:hover .description {
  height: auto; 
}
</style>