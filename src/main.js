import { createApp } from "vue";
import VueApexCharts from "vue3-apexcharts";

import App from './App.vue';
import './index.css'

createApp(App).use(VueApexCharts).mount("#app");