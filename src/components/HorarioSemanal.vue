<template>

  <div class="container-fluid p-0">

    <h1 class="mb-4 text-center">Horario Semanal de Actividades</h1>

    <DataTable :value="schedules" class="custom-datatable p-datatable p-datatable-bordered p-datatable-hoverable table-bordered" showGridlines tableStyle="min-width: 50rem "  :style="datatableStyle" scrollable scrollHeight="400px">
      <Column class="col" field="time" header="Hora"></Column>

      <Column class="col" field="monday" header="Lunes">
        <template #body="slotProps" >
              <RouterLink to="/" class="no-underline" style="color:inherit">
                <div v-if="slotProps.data.monday" class="divs" style="display: flex; align-items: center;">
                    <img :src="`/src/img/${slotProps.data.monday.image}`" :alt="slotProps.data.monday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
                    <span class="ruta">{{ slotProps.data.monday.name }}</span>
                 </div>
              </RouterLink>
                
        </template>
      </Column>

      <Column class="col" field="tuesday" header="Martes">
        <template #body="slotProps">
          <RouterLink to="/" class="no-underline" style="color:inherit">
            <div v-if="slotProps.data.tuesday"class= "divs" style="display: flex; align-items: center;">
              <img :src="`/src/img/${slotProps.data.tuesday.image}`" :alt="slotProps.data.tuesday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
              <span class="ruta">{{ slotProps.data.tuesday.name }}</span>
            </div>
          </RouterLink>
        </template>
      </Column>

      <Column class="col" field="wednesday"  header="Miércoles">
        <template #body="slotProps">
        <RouterLink to="/" class="no-underline" style="color:inherit">
          <div v-if="slotProps.data.wednesday" style="display: flex; align-items: center;">
          <img :src="`/src/img/${slotProps.data.wednesday.image}`" :alt="slotProps.data.wednesday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
          <span class="ruta">{{ slotProps.data.wednesday.name }}</span>
          </div>
        </RouterLink>
        </template>
      </Column>

      <Column class="col" field="thursday" header="Jueves">
        <template #body="slotProps">
          <RouterLink to="/" class="no-underline" style="color:inherit">
            <div v-if="slotProps.data.thursday" style="display: flex; align-items: center;">
            <img :src="`/src/img/${slotProps.data.thursday.image}`" :alt="slotProps.data.thursday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
            <span class="ruta">{{ slotProps.data.thursday.name }}</span>
          </div>
        </RouterLink>
          
        </template>
      </Column>

      <Column class="col" field="friday"  header="Viernes">
        <template #body="slotProps">
          <RouterLink to="/" class="no-underline" style="color:inherit">
          <div v-if="slotProps.data.friday" style="display: flex; align-items: center;">
            <img :src="`/src/img/${slotProps.data.friday.image}`" :alt="slotProps.data.friday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
            <span class="ruta">{{ slotProps.data.friday.name }}</span> 
          </div>
        </RouterLink>
        </template>
      </Column>

      <Column class="col" field="saturday" header="Sábado">
        <template #body="slotProps">
          <RouterLink to="/" class="no-underline" style="color:inherit">
          <div v-if="slotProps.data.saturday" style="display: flex; align-items: center;">
            <img :src="`/src/img/${slotProps.data.saturday.image}`" :alt="slotProps.data.saturday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
            <span class="ruta">{{ slotProps.data.saturday.name }}</span>
          </div>
        </RouterLink>
        </template>
      </Column>
     
  </DataTable>


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
  { time: '9:00-10:00 AM', monday: null, tuesday: { name: 'Body Massages', image: 'service-1.jpg' }, wednesday: { name: 'Body Treatments', image: 'carousel-2.jpg' }, thursday: null, friday: null, saturday: null},
  { time: '10:00-11:00 AM', monday: { name: 'Facial Treatments', image: 'service-2.jpg' }, tuesday: null, wednesday: { name: 'Skin Care', image: 'service-6.jpg' }, thursday: { name: 'Skin Care', image: 'service-6.jpg' }, friday:null,  saturday:null},
  {time: '11:00AM -12:00 PM', monday: null, tuesday: { name: 'Manicure and Pedicure', image: 'service-5.jpg' }, wednesday: null, thursday: { name: 'Skin Care', image: 'service-6.jpg' }, friday: { name: 'Manicure and Pedicure', image: 'service-5.jpg' }, saturday: { name: 'Yoga Session', image: 'service-3.jpg' }},
  {time: '1:00-2:00 PM', monday: { name: 'Steam Room or Sauna', image: 'service-1.jpg' }, tuesday: null, wednesday: { name: 'Skin Care', image: 'service-6.jpg' }, thursday: null, friday: null, saturday: { name: 'Body Exfoliation', image: 'service-4.jpg' }},
  {time: '2:00-3:00 PM', monday: null, tuesday: null, wednesday: { name: 'Hydrotherapy Treatments', image: 'carousel-3.jpg' }, thursday: null, friday: { name: 'Body Massages', image: 'service-1.jpg' }, saturday: null},
  {time: '3:00-4:00 PM', monday: { name: 'Body Exfoliation', image: 'service-4.jpg' }, tuesday: null, wednesday: null, thursday: null},
  {time: '4:00-5:00 PM', monday: null, tuesday: { name: 'Manicure and Pedicure', image: 'service-5.jpg' }, wednesday: { name: 'Body Treatments', image: 'service-1.jpg' }, thursday: { name: 'yoga Session', image: 'service-3.jpg' }, friday: null, saturday: null},

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
}

.ruta:hover{
  text-decoration: underline;
  color:red;
}

</style>