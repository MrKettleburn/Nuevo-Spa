<script setup>
import { defineProps } from 'vue';
import Button from "primevue/button";

const props = defineProps({
  name: {
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
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="image" :alt="name" class="flip-card-photo">
                <p class="title">{{ name }}</p>
            </div>
            <div class="flip-card-back">
                <p class="title">{{name}}</p>
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>


.flip-card {
  background-color: transparent;
  width: 280px;
  height: 380px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  bottom: 0px;
  font-weight: 400;
  text-align: center;
  margin: 0;
  border: 10px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background-color: #f6c9b9;
}

.flip-card-back {
  background: linear-gradient(120deg, rgb(255, 174, 145) 30%,  #f6c9b9 88%,
     bisque 40%, rgb(255, 185, 160) 78%);
  color: black;
  transform: rotateY(180deg);
}

.flip-card-photo{
  top: 0px;
  margin: 20px;
  margin-bottom: 0px;
  margin-top: 0px;
  width: 85%;
  height: 280px;
  border: 1px solid  #f6c9b9;
  border-radius: 1rem;
}

.social-icons{
  margin-right: 0.5rem;
  
}

.button-social{
  bottom: 5px;
  position: absolute;
}
</style>