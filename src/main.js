import { createApp } from 'vue'
import { definePreset } from '@primevue/themes';
import './style.css';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import { palette } from '@primevue/themes';
import 'primeflex/primeflex.css';


// custom color
const primaryPalette = palette('#f9A392');

const app = createApp(App);
const myPreset = definePreset(Aura,{
    semantic: {
        primary: {
            50:  primaryPalette[50],
            100: primaryPalette[100],
            200: primaryPalette[200],
            300: primaryPalette[300],
            400: primaryPalette[400],
            500: primaryPalette[500],
            600: primaryPalette[600],
            700: primaryPalette[700],
            800: primaryPalette[800],
            900: primaryPalette[900],
            950: primaryPalette[950],
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

app.use(router);
app.mount('#app');