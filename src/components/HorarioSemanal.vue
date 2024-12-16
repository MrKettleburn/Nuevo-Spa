<template>

  <div class="container-fluid p-0">

    <h1 class="mb-4 text-center">Horario Semanal de Actividades</h1>

    <DataTable :value="schedules" class="custom-datatable p-datatable p-datatable-bordered p-datatable-hoverable table-bordered table-danger" showGridlines tableStyle="min-width: 50rem "  :style="datatableStyle"  @cell-click="onCellClick">
      <Column class="col" field="time" header="Horario"></Column>

      <Column class="col"  header="Lunes">
        <template #body="slotProps" >
                <div :class="getCellClass(slotProps, 'monday')" v-if="slotProps.data.monday" class="divs" style="display: flex; align-items: center;">
                    <img :src="`/src/img/${slotProps.data.monday.image}`" :alt="slotProps.data.monday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
                    <span>{{ slotProps.data.monday.name }}</span>
                 </div>
        </template>
      </Column>

      <Column class="col"  header="Martes">
        <template #body="slotProps">
            <div v-if="slotProps.data.tuesday"class= "divs" style="display: flex; align-items: center;">
              <img :src="`/src/img/${slotProps.data.tuesday.image}`" :alt="slotProps.data.tuesday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
              <span>{{ slotProps.data.tuesday.name }}</span>
            </div>
        </template>
      </Column>

      <Column class="col"  header="Miércoles">
        <template #body="slotProps">
          <div v-if="slotProps.data.wednesday" style="display: flex; align-items: center;">
          <img :src="`/src/img/${slotProps.data.wednesday.image}`" :alt="slotProps.data.wednesday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
          <span>{{ slotProps.data.wednesday.name }}</span>
          
          </div>
        </template>
      </Column>

      <Column class="col"  header="Jueves">
        <template #body="slotProps">
          <div v-if="slotProps.data.thursday" style="display: flex; align-items: center;">
            <img :src="`/src/img/${slotProps.data.thursday.image}`" :alt="slotProps.data.thursday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
            <span>{{ slotProps.data.thursday.name }}</span>
          </div>
        </template>
      </Column>

      <Column class="col"  header="Viernes">
        <template #body="slotProps">
          <div v-if="slotProps.data.friday" style="display: flex; align-items: center;">
            <img :src="`/src/img/${slotProps.data.friday.image}`" :alt="slotProps.data.friday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
            <span>{{ slotProps.data.friday.name }}</span> 
          </div>
        </template>
      </Column>

      <Column class="col"  header="Sábado">
        <template #body="slotProps">
          <div v-if="slotProps.data.saturday" style="display: flex; align-items: center;">
            <img :src="`/src/img/${slotProps.data.saturday.image}`" :alt="slotProps.data.saturday.name" style="width: 50px; height: 50px; margin-right: 10px;" />
            <span>{{ slotProps.data.saturday.name }}</span>
          </div>
        </template>
      </Column>
     
  </DataTable>

  <div class="container-fluid container cont">
    <Button class="login-btn " @click="showDetails">Add Activity</Button>
    <Button class="login-btn ">Cancel Activity</Button>
    <Button class="login-btn ">Details Activity</Button>
  </div>

  <div v-if="selectedActivity" class="'details-form'">
    <p><strong>NOmbre</strong>{{ selectedActivity.name}}</p>
  </div>

</div>
</template>



<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Button from "primevue/button";

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
  
};

const selectedCell=ref(null);
const selectedActivity= ref(null);
const onCellClick=(event)=>{
  selectedCell.value=event;
  selectedActivity.value=event.value[event.field];
};

const getCellClass=(slotProps, day)=>{
  return selectedCell.value && selectedCell.value.rowIndex === slotProps.rowIndex && selectedCell.value.field === day? 'selected-cell' : ' ';

};

const showDetails=()=>{
  if(selectedActivity.value){
    console.log('hecho');
  
  }else
  console.log("fallo");
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
.custom-datatable .p-datatable-wrapper{
  max-height: 400px;
  overflow-y: auto;
}

</style>