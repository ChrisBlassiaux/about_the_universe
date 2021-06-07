import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import axios from 'axios'

Vue.prototype.$http = axios;

createApp(App).use(router).mount('#app')
