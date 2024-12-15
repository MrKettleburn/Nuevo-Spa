
<template>
    <div class="card">
        <DataTable class="dataTbaleMio" :value="actividades" showGridlines tableStyle="min-width: 50rem" responsiveLayout="scroll" >
            <Column field="hora" header="Hora"></Column>
            <Column  field="lunes" header="Lunes"></Column>
            <Column  field="martes" header="Martes"></Column>
            <Column  field="miercoles" header="Miércoles"></Column>
            <Column field="jueves" header="Jueves"></Column>
            <Column  field="viernes" header="Viernes"></Column>
            <Column  field="sabado" header="Sábado"></Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';

onMounted(() => {
    ProductService.getProductsMini().then((data) => (actividades.value = data));
});

const actividades= ref([
{hora: '8:00-9:00', lunes: 'masaje grupal', martes: 'yoga', miercoles: 'skin care', jueves: 'tratamiento cuerpo', viernes: 'spa sesion', sabado:'terapia facial'},
{hora: '8:00-9:00', lunes: 'masaje grupal', martes: 'yoga', miercoles: 'skin care', jueves: 'tratamiento cuerpo', viernes: 'spa sesion', sabado:'terapia facial'},
{hora: '8:00-9:00', lunes: 'masaje grupal', martes: 'yoga', miercoles: 'skin care', jueves: 'tratamiento cuerpo', viernes: 'spa sesion', sabado:'terapia facial'},
{hora: '8:00-9:00', lunes: 'masaje grupal', martes: 'yoga', miercoles: 'skin care', jueves: 'tratamiento cuerpo', viernes: 'spa sesion', sabado:'terapia facial'},

])

</script>




<style scoped>
  .dataTbaleMio{
    margin-top: 20px !important;
    background-color: lightcoral !important;
    border-color: black !important;
    padding: 15px;
  }


  </style>