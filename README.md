import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'

createApp(App).use(router).mount('#app')


const router = createRouter({
    history: createWebHistory('/'),
    mode: HashChangeEvent,
    routes,
 });
 
 
 export default router;

