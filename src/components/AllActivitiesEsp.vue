
<template>

<div class="container-fluid p-0">

    <h1 class="mb-4 text-center" >All Activities</h1>

<DataTable :value="customers" rowGroupMode="rowspan" groupRowsBy="name" sortMode="single" sortField="name" :sortOrder="1" class="custom-datatable p-datatable p-datatable-bordered p-datatable-hoverable table-bordered" showGridlines tableStyle="min-width: 50rem "  :style="datatableStyle" scrollable scrollHeight="400px">
    <Column header="#" headerStyle="width:3rem">
        <template #body="slotProps">
            {{ slotProps.index + 1 }}
        </template>
    </Column>
    <Column field="name" header="Name" style="min-width: 250px" >
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                 <span>{{ slotProps.data.name }}</span>
            </div>
        </template>
    </Column>
    <Column field="date" header="Date" style="min-width: 120px">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                 <span>{{ slotProps.data.date }}</span>
            </div>
        </template>
    </Column>
    <Column field="time" header="Time" style="min-width: 150px">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                 <span>{{ slotProps.data.time }}</span>
            </div>
        </template>
    </Column>
    <Column field="descripcion" header="Description" style="min-width: 300px">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                 <span>{{ slotProps.data.descripcion }}</span>
            </div>
        </template>
    </Column>
    <Column field="serviceType" header="Service Type" style="min-width: 100px">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                 <span>{{ slotProps.data.serviceType }}</span>
            </div>
        </template>
    </Column>
    <Column field="spaLocation" header="Spa Location" style="min-width: 150px">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                 <span>{{ slotProps.data.spaLocation }}</span>
            </div>
        </template>
    </Column>
    <Column field="maxParticipants" header="Max Participants" style="max-width: 110px">
        <template #body="slotProps">
            <div class="flex items-center gap-2">
                 <span>{{ slotProps.data.maxParticipants }}</span>
            </div>
        </template>
    </Column>
    <Column field="status" header="Status" style="min-width: 40px">
        <template #body="slotProps">
            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
        </template>
    </Column>
</DataTable>

<div style="display: flex;  justify-content: right; margin-right: 43px; margin-bottom: 5px; padding-top: 0px;">
    <Button class="buton" style="margin: 4px ; border-color:indianred; color: black" label="Add Activity" ></Button>
    <Button class="buton" style="margin: 4px ; border-color:indianred; color: black " label="Cancel Activity" ></Button>
    <Button class="buton" style="margin: 4px ; border-color:indianred; color: black" label="Change Activity"></Button>
</div>

</div>



</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import { ref } from 'vue';
import Tag from 'primevue/tag';
import  Button  from 'primevue/button';


const getSeverity = (status) => {
    switch (status) {
        case 'cancel':
            return 'danger';

        case 'done':
            return 'success';

        case 'pending':
            return 'info';


        case 'renewal':
            return null;
    }
};
const customers = ref([

    { name: "Relaxing Facial Massage",
      image: 'relaxingFacilaMassage.jpg', 
      serviceType: "Massage",
      spaLocation: "Massage Room",
      maxParticipants: 1,
      date:'2024-12-16',
      time: '9:00-10:00am',
      status: 'done',
      descripcion:'Relax with a gentle massage that stimulates circulation and relieves tension in facial muscles. This treatment not only improves the appearance of the skin but also provides a deep sense of well-being',
     },

     { name: "Deep Cleansing Facial", 
       image: 'deepCleanFacial.jpg',
       descripcion:'Enjoy a thorough cleansing that removes impurities and dead skin cells, leaving your skin fresh and radiant. This treatment is ideal for improving skin texture and preventing acne breakouts, all under the care of our expert estheticians.',  
       serviceType: "Face",
       spaLocation: "Facial Treatment Room",
       date:'2024-12-17',
       time: '9:00-10:00am',
       status: 'done',
       maxParticipants: 1 },

      { name: "Deep Cleansing Facial", 
            image: 'deepCleanFacial.jpg',
            descripcion:'Enjoy a thorough cleansing that removes impurities and dead skin cells, leaving your skin fresh and radiant. This treatment is ideal for improving skin texture and preventing acne breakouts, all under the care of our expert estheticians.',  
            serviceType: "Face",
            spaLocation: "Facial Treatment Room",
            maxParticipants: 1,
            date:'2024-12-16',
      time: '10:00-11:00am',
      status: 'done',
    },

    { name: "Relaxing Facial Massage",
                image: 'relaxingFacilaMassage.jpg', 
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                date:'2024-12-18',
      time: '10:00-11:00am',
      status: 'done',
                descripcion:'Relax with a gentle massage that stimulates circulation and relieves tension in facial muscles. This treatment not only improves the appearance of the skin but also provides a deep sense of well-being',
    },
    
    { name: "Sports Massage",
                image: 'sportsmassage.jpg',
                serviceType: "Massage",
                spaLocation: "Massage Room",
                maxParticipants: 1,
                date:'2024-12-19',
      time: '10:00-11:00am',
      status: 'done',
                descripcion:'Designed for athletes and sports enthusiasts, this massage focuses on preparing and recovering muscles after exercise. It accelerates recovery and reduces the risk of injuries, all under the guidance of our specialized massage therapists.',
    },
    
    {name: "Hydrating Treatment", 
              image: 'hydratingTreatment.jpg',
              serviceType: "Face",
              spaLocation: "Facial Treatment Room",
              maxParticipants: 1,
              date:'2024-12-17',
      time: '11:00am-12:00pm',
      status: 'cancel',
              descripcion:'This service focuses on applying specific moisturizing products for your skin type, revitalizing it and leaving it soft and luminous. Our estheticians will customize the experience to meet your individual needs.',

              
    }, 

    { name: "Spa Manicure with Massage",
                image: 'manicureMassage.jpg',
                serviceType: "Manicure",
                spaLocation: "Manicure Area",
                 maxParticipants: 1,
                 date:'2024-12-18',
      time: '11:00am-12:00pm',
      status: 'done',
                 descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',

              
    },

    { name: "Spa Pedicure with Massage",
             image: 'pedicuremassage.jpg' ,
             serviceType: "Pedicure",
             spaLocation: "Pedicure Area",
             maxParticipants: 1,
             date:'2024-12-19',
      time: '11:00am-12:00pm',
      status: 'pending',
             descripcion:'This treatment elevates the traditional pedicure by including a foot massage, providing a total relaxation experience and leaving your feet soft and renewed.',

            
    }, 

    { name: "Spa Manicure with Massage",
                image: 'manicureMassage.jpg',
                serviceType: "Manicure",
                spaLocation: "Manicure Area",
                 maxParticipants: 1,
                 date:'2024-12-20',
      time: '11:00am-12:00pm',
      status: 'pending',
                 descripcion:'Enjoy an indulgent experience that combines nail care with a relaxing hand massage. Perfect for those seeking a moment of luxury and relaxation.',
 
    },




  

]);


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

</script>

<style>

.p-datatable {
    padding: 25px;;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 5px;
    
    
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

h1{
    padding-top: 15px;
}


.buton{
  padding: 15px;
  margin: 30px;
  border-color:indianred;
  color: black;
  font-weight: bold;
  background-color: #f1cfbb;
}

.buton:hover{
    color: white;
    background-color: indianred;

}
</style>