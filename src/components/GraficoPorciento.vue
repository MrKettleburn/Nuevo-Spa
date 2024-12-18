<script setup>
import { defineProps } from 'vue';
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  percent: {
    type: Number,
    required: true,
    validator: value => value >= 0 && value <= 100
  }
});

const pieStyle = computed(() => `--p:${props.percent}`);
</script>

<template>
    <div class="pie-container">
      <h2>{{ title }}</h2>
      <div class="pie animate" :style="pieStyle">{{ percent }}%</div>
    </div>
</template>

<style scoped>

@property --p{
  syntax: '<number>';
  inherits: true;
  initial-value: 0;
}

.pie-container {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    text-align: center; 
}

.pie {
  --b:22px;
  --c:#F9A392;
  --w:150px;
  
  width:var(--w);
  aspect-ratio:1;
  position:relative;
  display:inline-grid;
  margin:5px;
  place-content:center;
  font-size:25px;
  font-weight:bold;
  font-family:sans-serif;
  justify-content: center;
}
.pie:before,
.pie:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}

.pie:before {
  inset: 0;
  background:
    radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,
    conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
          mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
}

.pie:after {
  inset: calc(50% - var(--b) / 2);
  background: var(--c);
  transform: rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - var(--w) / 2));
}

.animate {
  animation: p 1s .5s both;
}

@keyframes p {
  from { --p: 0; }
}

</style>
