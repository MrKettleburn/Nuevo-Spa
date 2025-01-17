<template>
    <!-- About Start -->
    <div class="container-fluid py-9 bg-gray-50  flex justify-center items-center">
        <div class="container">
            <div class="flex flex-col lg:flex-row items-center space-x-8">
                <!-- Imagen -->
                <div class="w-full h-full lg:w-1/2 pb-5 lg:pb-0">
                    <img class="w-full rounded-lg" src="../img/about.jpg" alt="About Us" style="height: 500px;">
                </div>
  
                <!-- Texto y estadísticas -->
                <div class="w-full lg:w-1/2 pt-5 lg:pt-0" style="margin: 0 !important;">
                    <p class="pl-4 border-l-4 border-indigo-600 text-justify text-lg text-gray-700 ml-8" style="margin-left: 20px !important;">
                        Welcome to Your Best Spa, where beauty and wellness come together in one place. Our center is dedicated to providing you with a unique experience, combining high-quality spa treatments with exceptional service. From relaxing massages to rejuvenating facial treatments, each service is designed to meet your needs and help you feel renewed. With a team of highly trained specialists, we ensure that every visit is a journey towards tranquility and beauty.
                    </p>
                    <div class="grid grid-cols-2 gap-4 pt-6 ml-8" style="margin-left: 20px !important; display: flex; justify-content: center; align-items: center;">
                        <!-- Caja de especialistas -->
                        <div class="flex justify-center items-center p-5 bg-light rounded-lg shadow-lg border-2 border-dotted border-indigo-500" style="background-color: #f6c9b9; border-color: #d27183;">
                            <div class="text-center">
                                <h2 class="text-4xl font-bold text-indigo-600">4</h2>
                                <h4 class="text-lg uppercase text-indigo-600">Spa Specialist</h4>
                            </div>
                        </div>
  
                        <!-- Caja de clientes felices -->
                        <div class="flex justify-center items-center p-5 bg-light rounded-lg shadow-lg border-2 border-dotted border-indigo-500" style="background-color: #f6c9b9; border-color: #d27183;">
                            <div class="text-center">
                                <h2 class="text-4xl font-bold text-indigo-600">999</h2>
                                <h4 class="text-lg uppercase text-indigo-600">Happy Clients</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- About End -->
  </template>
  
  <style scoped>
  .bg-light {
    background-color: #f6c9b9;
  }
  .border-indigo-600 {
    border-color: #3b82f6;
  }
  </style>
  