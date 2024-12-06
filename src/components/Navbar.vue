<template>
    <div class="card">
        <a><h1 style="color: #F9A392" ><span style="color: #211E1C">SPA</span> Center</h1></a>
        <Menubar :model="items" />
        <Button @click="toggleDarkMode" label="Modo Oscuro" icon="pi pi-adjust" />
    </div>
</template>


<script setup>
 import Menubar from 'primevue/menubar';
 import { ref } from "vue";
 import Button from "primevue/button";

 const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'About',
        icon: 'pi pi-star'
    },
    {
        label: 'Services',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
]);

function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark'); 
}

</script>





<style scoped>
.card{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>



