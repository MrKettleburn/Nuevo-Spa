
<template>

    <div class="container-fluid p-0">
    
        <h1 class="mb-4 text-center" >Users</h1>
    
    <DataTable :value="customers"  rowGroupMode="rowspan" groupRowsBy="status" sortMode="single" sortField="status" :sortOrder="1" class="center custom-datatable p-datatable p-datatable-bordered p-datatable-hoverable table-bordered" showGridlines tableStyle="min-width: 50rem"  :style="datatableStyle" scrollable scrollHeight="400px">
        <Column header="#" headerStyle="width:3rem" >
            <template #body="slotProps">
                {{ slotProps.index + 1 }}
            </template>
        </Column>
        <Column field="status" header="User Type" style="min-width: 100px">
            <template #body="slotProps">
                <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
            </template>
        </Column>
        <Column field="name" header="Name" style="min-width: 100px">
            <template #body="slotProps">
                <div class="flex items-center gap-2">
                     <span>{{ slotProps.data.name }}</span>
                </div>
            </template>
        </Column>
        <Column field="lastname" header="Lastname" style="min-width: 100px">
            <template #body="slotProps">
                <div class="flex items-center gap-2">
                     <span>{{ slotProps.data.lastname }}</span>
                </div>
            </template>
        </Column>
        <Column field="username" header="Username" style="min-width: 100px">
            <template #body="slotProps">
                <div class="flex items-center gap-2">
                     <span>{{ slotProps.data.username }}</span>
                </div>
            </template>
        </Column>
        <Column field="age" header="Age" style="min-width: 100px">
            <template #body="slotProps">
                <div class="flex items-center gap-2">
                     <span>{{ slotProps.data.age }}</span>
                </div>
            </template>
        </Column>
        <Column field="sex" header="Sex" style="min-width: 100px">
            <template #body="slotProps">
                <div class="flex items-center gap-2">
                     <span>{{ slotProps.data.sex }}</span>
                </div>
            </template>
        </Column>
        
    </DataTable>
    
    <div style="display: flex;  justify-content: right; margin-right: 43px; margin-bottom: 5px; padding-top: 0px;">
        <Button class="buton" style="margin: 4px ; border-color:indianred; color: black" label="Add User" ></Button>
        <Button class="buton" style="margin: 4px ; border-color:indianred; color: black " label="Delete User" ></Button>
        <Button class="buton" style="margin: 4px ; border-color:indianred; color: black" label="Change User"></Button>
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
            case 'specialist':
                return 'success';
    
            case 'client':
                return 'info';
    
    
            case 'renewal':
                return null;
        }
    };
    const customers = ref([
    
    {
    name: 'Juan',
    status: 'specialist',
    lastname: 'Pérez',
    age: 30,
    sex: 'male',
    password: 'password123',
    username: 'juanperez'
  },
  {
    name: 'Ana',
    status: 'client',
    lastname: 'García',
    age: 25,
    sex: 'female',
    password: 'password456',
    username: 'anagarcia'
  },
  {
    name: 'Luis',
    status: 'specialist',
    lastname: 'Martínez',
    age: 28,
    sex: 'male',
    password: 'password789',
    username: 'luismartinez'
  },
  {
    name: 'María',
    status: 'client',
    lastname: 'López',
    age: 32,
    sex: 'female',
    password: 'password101',
    username: 'marialopez'
  }
  
    
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