<!-- TeamMember_About.vue -->
<template>
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="team position-relative overflow-hidden">
        <img :src="image" alt="team member" class="img-fluid w-100" />
        <div class="team-text position-absolute w-100 text-center p-4">
          <h4 class="text-white">{{ name }}</h4>
          <p class="text-white mb-0">{{ title }}</p>
        </div>
        <div class="team-social position-absolute d-flex flex-column align-items-center">
          <a
            v-for="(link, i) in socialLinks"
            :key="i"
            :href="link.link"
            class="btn btn-square mx-1"
          >
            <i :class="link.icon" class="text-white"></i>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    name: String,
    title: String,
    image: String,
    socialLinks: Array,
  });
  </script>
  
  <style scoped>
  .team {
    position: relative;
    overflow: hidden;
  }
  
  .team img {
    transition: margin-top 0.5s ease;
  }
  
  .team:hover img {
    margin-top: 0;
  }
  
  .team-text {
    background: var(--primaryColor, #007bff);
    color: white;
    top: 100%;
    transition: top 0.5s;
  }
  
  .team:hover .team-text {
    top: 60%;
  }
  
  .team-social {
    top: 100%;
    transition: top 0.5s;
    background: #212121;
    padding: 0.5rem;
  }
  
  .team:hover .team-social {
    top: 0;
  }
  
  .btn-square {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  