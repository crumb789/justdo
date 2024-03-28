import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


store.subscribe( (mutation, state) => {
    localStorage.setItem('ListTodo', JSON.stringify(state.ListItems));  
    // localStorage.setItem('locations', JSON.stringify(state.locations));  
})

createApp(App).use(store).use(router).mount('#app')
