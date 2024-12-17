<template>
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="grid align-items-center">
          <!-- Imagen -->
          <div class="col-12 lg:col-6 pb-5 pb-lg-0">
            <img class="w-full border-round" src="https://images.unsplash.com/photo-1630595633877-9918ee257288?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Testimonials" />
          </div>

          <!-- Testimonios -->
          <div class="col-12 lg:col-6 center">
            <h1 class="mb-4 font-bold " >What Our Clients Say!</h1>
  
            <!-- Carrusel -->
            <Carousel :value="testimonials" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="3000">
              <template #item="slotProps">
                <div class="relative border-1 border-300 p-4 border-round shadow-2">
                  
                    <!-- Icono de cita -->
                  <i class="pi pi-quote-right text-primary absolute" style="top: -10px; right: 10px; font-size: 2rem;"></i>
  
                  <!-- Información del cliente -->
                  <div class="flex align-items-center mb-3">
                    <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-4rem h-4rem border-circle"/>
                    <div class="ml-3">
                      <h6 class="text-uppercase font-bold m-0">{{ slotProps.data.name }}</h6>
                      <span class="text-600">{{ slotProps.data.profession }}</span>
                    </div>
                  </div>
  
                  <!-- Testimonio -->
                  <p class="m-0 text-700">{{ slotProps.data.comment }}</p>
                </div>
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Carousel from 'primevue/carousel';
  
  // Datos de los testimonios
  const testimonials = [
    {
      name: 'Client Name 1',
      profession: 'Profession 1',
      image: '/img/testimonial-1.jpg',
      comment:
        'Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.',
    },
    {
      name: 'Client Name 2',
      profession: 'Profession 2',
      image: '/img/testimonial-2.jpg',
      comment:
        'Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.',
    },
    {
      name: 'Client Name 3',
      profession: 'Profession 3',
      image: '/img/testimonial-3.jpg',
      comment:
        'Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.',
    },
  ];
  </script>
  
  <style scoped>
  .center{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text-primary {
    color: #f06292; /* Personaliza el color primario */
  }
  
  .bg-light {
    background-color: #f8f9fa;
  }
  
  .inline-block {
    display: inline-block;
  }
  
  .shadow-2 {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .w-4rem {
    width: 4rem;
  }
  
  .h-4rem {
    height: 4rem;
  }
  </style>
  