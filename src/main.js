import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// Use Vue Router
app.use(router);

// Use Vuex store
app.use(store);

// Mount the app to the DOM
app.mount('#app');
