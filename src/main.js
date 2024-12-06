import { createApp } from 'vue'
import { definePreset } from '@primevue/themes';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { palette } from '@primevue/themes';

// custom color
const myPrimaryPalette = palette('#f9A392');

console.log(myPrimaryPalette);

const app = createApp(App);
const myPreset = definePreset(Aura,{
    semantic: {
        primary: {
            50:  myPrimaryPalette[50],
            100: myPrimaryPalette[100],
            200: myPrimaryPalette[200],
            300: myPrimaryPalette[300],
            400: myPrimaryPalette[400],
            500: myPrimaryPalette[500],
            600: myPrimaryPalette[600],
            700: myPrimaryPalette[700],
            800: myPrimaryPalette[800],
            900: myPrimaryPalette[900],
            950: myPrimaryPalette[950],
        },
        formField: {
            paddingX: "1rem",
            paddingY: "1rem",
        },
        colorSheme:{
            light:{
                formField:{
                  hoverBorderColor: '{primary.color}',
                }
            },
            dark: {
                formField:{
                  hoverBorderColor: '{primary.color}',
                },
                surface:{
                    50: '{zinc.50}',
                   100: '{zinc.100}',
                   200: '{zinc.200}',
                   300: '{zinc.300}',
                   400: '{zinc.400}',
                   500: '{zinc.500}',
                   600: '{zinc.600}',
                   700: '{zinc.700}',
                   800: '{zinc.800}',
                   900: '{zinc.900}',
                   950: '{zinc.950}'
                }
            }
        }
    }
});
app.use(PrimeVue,{
    theme: {
        preset: myPreset,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});

app.mount('#app');