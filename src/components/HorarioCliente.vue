<template>

    <div class="container-fluid p-0">
  
      <h1 class="mb-4 text-center" >Weekly Reserve Schedule</h1>
      
      
      
  
      <DataTable :value="schedules" class="custom-datatable p-datatable p-datatable-bordered p-datatable-hoverable table-bordered" showGridlines tableStyle="min-width: 50rem "  :style="datatableStyle" scrollable scrollHeight="400px">
        <Column class="col" field="time" header="Hour"></Column>
  
        <Column class="col w-25 d-flex container" field="monday" header="Monday">
          <template #body="slotProps">
               
                  <div class="divs" style="display: flex; ">
                    <a @click.prevent="showDetails(slotProps.data.monday)"
                    class="activity-link"
                    v-if="slotProps.data.monday" 
                    >
                    <div style="display: flex; flex-direction: row; align-items: center">
                      <img :src="`/src/img/${slotProps.data.monday.image}`" :alt="slotProps.data.monday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
                      <span class="ruta">{{ slotProps.data.monday.name }}</span>
                    </div>
                    
                    </a>  
                   </div>
                
                  
          </template>
        </Column>
  
        <Column class="col" field="tuesday" header="Tuesday">
          <template #body="slotProps">
  
            <div class="divs" style="display: flex; ">
                    <a @click.prevent="showDetails(slotProps.data.tuesday)"
                    class="activity-link"
                    v-if="slotProps.data.tuesday" 
                    >
                    <div style="display: flex; flex-direction: row; align-items: center">
                      <img :src="`/src/img/${slotProps.data.tuesday.image}`" :alt="slotProps.data.tuesday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
                      <span class="ruta">{{ slotProps.data.tuesday.name }}</span>
                    </div>
                    
                    </a>  
            </div>
            
          </template>
        </Column>
  
        <Column class="col" field="wednesday"  header="Wednesday">
          <template #body="slotProps">
  
            <div class="divs" style="display: flex; ">
                    <a @click.prevent="showDetails(slotProps.data.wednesday)"
                    class="activity-link"
                    v-if="slotProps.data.wednesday" 
                    >
                    <div style="display: flex; flex-direction: row; align-items: center">
                      <img :src="`/src/img/${slotProps.data.wednesday.image}`" :alt="slotProps.data.wednesday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
                      <span class="ruta">{{ slotProps.data.wednesday.name }}</span>
                    </div>
                    
                    </a>  
            </div>
          
          </template>
        </Column>
  
        <Column class="col" field="thursday" header="Thursday">
          <template #body="slotProps">
  
            <div class="divs" style="display: flex; ">
                    <a @click.prevent="showDetails(slotProps.data.thursday)"
                    class="activity-link"
                    v-if="slotProps.data.thursday" 
                    >
                    <div style="display: flex; flex-direction: row; align-items: center">
                        <img :src="`/src/img/${slotProps.data.thursday.image}`" :alt="slotProps.data.thursday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
                        <span class="ruta">{{ slotProps.data.thursday.name }}</span>
                    </div>
                    
                    </a>  
            </div>
            
          </template>
        </Column>
  
        <Column class="col" field="friday"  header="Friday">
          <template #body="slotProps">
            <div class="divs" style="display: flex; ">
                    <a @click.prevent="showDetails(slotProps.data.friday)"
                    class="activity-link"
                    v-if="slotProps.data.friday" 
                    >
                    <div style="display: flex; flex-direction: row; align-items: center">
                      <img :src="`/src/img/${slotProps.data.friday.image}`" :alt="slotProps.data.friday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
                      <span class="ruta">{{ slotProps.data.friday.name }}</span>
                    </div>
                    
                    </a>  
            </div>
  
          </template>
        </Column>
  
        <Column class="col" field="saturday" header="Saturday">
          <template #body="slotProps">
  
            <div class="divs" style="display: flex; ">
                    <a @click.prevent="showDetails(slotProps.data.saturday)"
                    class="activity-link"
                    v-if="slotProps.data.saturday" 
                    >
                    <div style="display: flex; flex-direction: row; align-items: center">
                      <img :src="`/src/img/${slotProps.data.saturday.image}`" :alt="slotProps.data.saturday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
              <span class="ruta">{{ slotProps.data.saturday.name }}</span>
                    </div>
                    
                    </a>  
            </div>
            
          </template>
        </Column>
       
    </DataTable>
  
    <div style="display: flex;  justify-content: right; margin-right: 43px; margin-bottom: 5px; padding-top: 0px;">
      <Button style="margin: 4px" label="Add Reserve" class="login-btn"></Button>
      <Button style="margin: 4px" label="Cancel Reserve" class="login-btn"></Button>
      </div>
  
  <div v-if="isModalVisible" class="modal shadow-lg">
    <div class="modal-content" style="flex:auto ;  flex-direction: row; overflow-y:auto">
      <span class="close" @click="closeModal">&times;</span>
      <h2 style="text-align: center; padding-top:0; margin:0px; text-shadow: 2px 2px 5px rgba(0,0,0,0.4);">{{ selectedActivity ? selectedActivity.name:'No hay detalles disponibles'}}</h2>
      
      <div class="flex-container" style="margin-top: 10px; overflow-y: auto;">
        <div class="left-side">
          <img :src="`/src/img/${selectedActivity.image}`" :alt="selectedActivity.name" style="width:98%; height:300px; margin: 5px; object-fit: cover; border-radius: 15px; border-style:groove;" />
        </div>
        <div class="right-side" style="width: 100%;height:80% ;padding: 2px; margin-left:10px; text-align: justify;">
          <p >Service Type:{{ selectedActivity ? selectedActivity.serviceType:'No hay detalles disponibles' }}</p>
         <p> Description:{{ selectedActivity ? selectedActivity.descripcion:'No hay detalles disponibles' }}</p>
         <p> Spa Location:{{ selectedActivity ? selectedActivity.spaLocation:'No hay detalles disponibles' }}</p>
         <p> Specialist:{{ selectedActivity ? selectedActivity.especialista:'No hay detalles disponibles' }}</p>
         <p> Pricing:{{ selectedActivity ? selectedActivity.precio:'No hay detalles disponibles' }}</p>
        </div>
        
      </div>
     
    </div>
  
    
  </div>
  
  
  
  </div>
  </template>
  
  
  
  <script setup>
  import { ref, setBlockTracking } from 'vue';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import ColumnGroup from 'primevue/columngroup';   // optional
  import Row from 'primevue/row';
  import Button from "primevue/button";
  import { RouterLink } from 'vue-router';
  import { babelParse } from 'vue/compiler-sfc';
  
  
  const schedules = ref([
    { time: '9:00-10:00 AM',
     monday: null,
     
     tuesday: { name: "Relaxing Facial Massage",
                  image: 'relaxingFacilaMassage.jpg', 
                  serviceType: "Massage",
                  spaLocation: "Massage Room",
                  maxParticipants: 1,
                  
          status: 'done',
          precio:'$500',
                  descripcion:'Relax with a gentle massage that stimulates circulation and relieves tension in facial muscles. This treatment not only improves the appearance of the skin but also provides a deep sense of well-being',
                 },
                   
    wednesday: { name: "Deep Cleansing Facial", 
                image: 'deepCleanFacial.jpg',
                descripcion:'Enjoy a thorough cleansing that removes impurities and dead skin cells, leaving your skin fresh and radiant. This treatment is ideal for improving skin texture and preventing acne breakouts, all under the care of our expert estheticians.',  
                serviceType: "Face",
                
           precio:'$700',
          especialista:'Evangeline Fox',
           
                spaLocation: "Facial Treatment Room",
                maxParticipants: 1 },
    thursday: null,
  
    friday: null,
                 
    saturday: null
    },
    
    { time: '10:00-11:00 AM',
      monday: { name: "Deep Cleansing Facial", 
              image: 'deepCleanFacial.jpg',
              descripcion:'Enjoy a thorough cleansing that removes impurities and dead skin cells, leaving your skin fresh and radiant. This treatment is ideal for improving skin texture and preventing acne breakouts, all under the care of our expert estheticians.',  
              serviceType: "Face",
               precio:'$700',
          especialista:'Evangeline Fox',
              spaLocation: "Facial Treatment Room",
              maxParticipants: 1
      },
      
      tuesday: null,
     
      wednesday: { name: "Relaxing Facial Massage",
                  image: 'relaxingFacilaMassage.jpg', 
                  serviceType: "Massage",
                  spaLocation: "Massage Room",
                  maxParticipants: 1,precio:'$500',
          especialista:'Lianet Diaz',
                  descripcion:'Relax with a gentle massage that stimulates circulation and relieves tension in facial muscles. This treatment not only improves the appearance of the skin but also provides a deep sense of well-being',
      },
      
      thursday: { name: "Sports Massage",
                  image: 'sportsmassage.jpg',
                  serviceType: "Massage",
                  spaLocation: "Massage Room",
                  maxParticipants: 1,
                  precio:'$700',
          especialista:'Evangeline Fox',
                  descripcion:'Designed for athletes and sports enthusiasts, this massage focuses on preparing and recovering muscles after exercise. It accelerates recovery and reduces the risk of injuries, all under the guidance of our specialized massage therapists.',
      },
      
      friday:null, 
      
      saturday:null
    },
  
    { time: '11:00AM -12:00 PM', 
    
      monday: null, 
      
      tuesday: {name: "Hydrating Treatment", 
                image: 'hydratingTreatment.jpg',
                serviceType: "Face",
                spaLocation: "Facial Treatment Room",
                maxParticipants: 1,
                precio:'$700',
          especialista:'Evangeline Fox',
                descripcion:'This service focuses on applying specific moisturizing products for your skin type, revitalizing it and leaving it soft and luminous. Our estheticians will customize the experience to meet your individual needs.',
  
                
                }, 
  
      wednesday: null,
  
      thursday: { name: "Spa Manicure with Massage",
                  image: 'manicureMassage.jpg',
                  serviceType: "Manicure",
                  spaLocation: "Manicure Area",
                   maxParticipants: 1,
                   precio:'$1000',
          especialista:'Jude Derry',
                   descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',
  
                
                },
  
      friday: { name: "Spa Pedicure with Massage",
               image: 'pedicuremassage.jpg' ,
               serviceType: "Pedicure",
               spaLocation: "Pedicure Area",
               maxParticipants: 1,
               precio:'$1000',
          especialista:'Jude Derry',
               descripcion:'This treatment elevates the traditional pedicure by including a foot massage, providing a total relaxation experience and leaving your feet soft and renewed.',
  
              
              }, 
               
      saturday: { name: "Spa Manicure with Massage",
                  image: 'manicureMassage.jpg',
                  serviceType: "Manicure",
                  spaLocation: "Manicure Area",
                   maxParticipants: 1,
                   precio:'$1000',
          especialista:'Jude Derry',
                   descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',
   
                }
                
    },
    
    {time: '1:00-2:00 PM',
     monday: { name: "Yoga Classes",
               image: 'yoga.jpg',
               serviceType: "Group Activity",
               spaLocation: "Yoga Studio",
               maxParticipants: 10,
               precio:'$1100',
          especialista:'Noelia Ramos',
               descripcion: 'Join our group yoga or meditation classes, where you will learn to connect with your body and mind, improving flexibility and reducing stress.',
  
    
    }, 
     
     tuesday: null, 
     
     wednesday: { name:  "Couples Massage Therapy",
                  image: 'couplesMassage.jpg',
                  serviceType: "Massage",
                  spaLocation: "Massage Room",
                  maxParticipants: 2,
                  precio:'$1100',
                  especialista:'Noelia Ramos',
                  descripcion: '  Share a unique experience with a couples massage, where both will enjoy a moment of relaxation and connection in a cozy environment.',
  
                }, 
     
     thursday: null,
  
     friday: null, 
     
     saturday: { name: "Aromatherapy Workshop", 
                  image: 'aromatherapymassage.jpg',
                  serviceType: "Group Activity",
                  spaLocation: "Workshop Room",
                  maxParticipants: 15,
                  precio:'$1100',
                  especialista:'Noelia Ramos',
                  descripcion:'Discover the power of essential oils in our aromatherapy workshops. Learn about their benefits and how to incorporate them into your daily life.',
  
                
                
                }
    
    },
  
    {time: '2:00-3:00 PM',
  
     monday: null, 
  
     tuesday: null,
  
     wednesday: { name: "Deep Tissue Massage",
                  image: 'deepTisuueMassage.jpg',
                  serviceType: "Massage",
                  spaLocation: "Massage Room",
                  maxParticipants: 1,
                  precio:'$700',
                  especialista:'Nick Leister',
                  descripcion:'  This massage focuses on the deeper layers of muscles, relieving chronic tension and improving mobility. It is ideal for those suffering from persistent muscle pain.',
  
                
                },
  
     thursday: null,
     
     friday: { name: "Yoga Classes",
               image: 'yoga.jpg',
               serviceType: "Group Activity",
               spaLocation: "Yoga Studio",
               maxParticipants: 10,
               precio:'$700',
                  especialista:'Nick Leister',
               descripcion: 'Join our group yoga or meditation classes, where you will learn to connect with your body and mind, improving flexibility and reducing stress.',
              
              }, 
     
     saturday: null
    
    },
  
    {time: '3:00-4:00 PM', 
    monday: { name:  "Couples Massage Therapy",
                  image: 'couplesMassage.jpg',
                  serviceType: "Massage",
                  spaLocation: "Massage Room",
                  maxParticipants: 2,
                  precio:'$1000',
                  especialista:'Noelia Ramos',
                  descripcion: '  Share a unique experience with a couples massage, where both will enjoy a moment of relaxation and connection in a cozy environment.',
   }, 
  
    tuesday: null, 
  
    wednesday: null, 
  
    thursday: null,
  
    friday: { name: "Aromatherapy Workshop", 
                  image: 'aromatherapymassage.jpg',
                  serviceType: "Group Activity",
                  spaLocation: "Workshop Room",
                  maxParticipants: 15,
                  precio:'$700',
                  especialista:'Nick Leister',
                  descripcion:'Discover the power of essential oils in our aromatherapy workshops. Learn about their benefits and how to incorporate them into your daily life.',}, 
     
     saturday: null
  
  },
  
    {time: '4:00-5:00 PM',
     monday: null, 
     tuesday: { name:  "Couples Massage Therapy",
                  image: 'couplesMassage.jpg',
                  serviceType: "Massage",
                  spaLocation: "Massage Room",
                  maxParticipants: 2,
                  precio:'$700',
                  especialista:'Nick Leister',
                  descripcion: '  Share a unique experience with a couples massage, where both will enjoy a moment of relaxation and connection in a cozy environment.', },
    wednesday: { name: "Aromatherapy Workshop", 
                  image: 'aromatherapymassage.jpg',
                  serviceType: "Group Activity",
                  spaLocation: "Workshop Room",
                  maxParticipants: 15,
                  precio:'$950',
                  especialista:'Jude Derry',
                  descripcion:'Discover the power of essential oils in our aromatherapy workshops. Learn about their benefits and how to incorporate them into your daily life.', },
      thursday: { name: "Yoga Classes",
               image: 'yoga.jpg',
               serviceType: "Group Activity",
               spaLocation: "Yoga Studio",
               maxParticipants: 10,
               precio:'$700',
                  especialista:'Nick Leister',
               descripcion: 'Join our group yoga or meditation classes, where you will learn to connect with your body and mind, improving flexibility and reducing stress.', }, 
      friday: null,
      saturday: null},
  
  ]);
  
  const isModalVisible=ref(false);
  const selectedActivity=ref(null);
  
  
  const datatableStyle={
    '--p-datatable-header-cell-background': '#f1cfbb',
    '--p-datatable-header-cell-color': 'black',
    '--p-datatable-row-background': '#e1b69d24',
    '--p-datatable-row-hover-background': '#f1cfbb',
    '--p-datatable-header-cell-border-color': 'indianred',
    '--p-datatable-body-cell-border-color': 'indianred',
    '--p-datatable-cell-color': 'black',
    '--p-datatable-cell-hover-color': 'red',
    '--p-datatable-row-color':'black',
    '--p-datatable-row-hover-color':'black',
    
    
  };
  
  const showDetails=(activity)=>{
    selectedActivity.value=activity;
    isModalVisible.value=true;
  };
  const closeModal = ()=>{
    isModalVisible.value=false;
  }
  
  </script>
  
  
  
  <style scoped>
  h1{
      padding-top: 15px;
  }
  .p-datatable {
      padding: 25px;;
      padding-left: 30px;
      padding-right: 30px;
      padding-top: 5px;
      
      
  }
  .col{
    text-align: center;
  }
  
  .btn{
    background-color: #F9A392;
    border: none;
    padding: 5px;
    margin-bottom: 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 70px;
    height: 40px;
    text-align: center;
  }
  .cont{
      display: flex;
      align-items: center;
      justify-content: center;
      
  
  }
  .login-btn{
    padding: 15px;
    margin: 30px;
    border-color:indianred;
    color: black;
    font-weight: bold;
    background-color: #f1cfbb;
  }
  
  .ruta:hover{
    text-decoration: underline;
    color:red;
  }
  
  .modal {
    display: block; /* Visible por defecto */
    position: fixed; 
    overflow: hidden;
    z-index: 1; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; 
    padding: 20px;
    border: 2px solid indianred;
    border-radius: 5px;
    width: 45%;
    height: 50%; 
    box-shadow: inset 0px 0px 10px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.3);
    overflow: hidden;
  
  
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  
  .flex-container{
  display: flex;
  flex-direction: row;
  align-items: center;
  }
  
  .left-side, .right-side{
    flex:1;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 400px;
    overflow: auto;
    position: relative;
  }
  
  .left-side{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .right-side{
    border-style: dashed;
    border-color: indianred;
    border-radius: 5px;
    border: 1px;
  }
  </style>