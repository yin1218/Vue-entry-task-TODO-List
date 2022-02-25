import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
// import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App)
app.use(BootstrapVue3)
app.use(BootstrapIconsPlugin);
// app.use(BootstrapVue);
// app.use(BootstrapVueIcons);

app.mount('#app')