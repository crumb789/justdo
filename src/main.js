import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'animate.css';


store.subscribe( (mutation, state) => {
    localStorage.setItem('ListTodo', JSON.stringify(state.ListItems));  
    // localStorage.setItem('sortedList', JSON.stringify(state.sortedList));  
    localStorage.setItem('FilterDate', JSON.stringify(state.DataToSorted)); 
    localStorage.setItem('ThemeNumber', JSON.stringify(state.themeBack)); 
    localStorage.setItem('BackgroundColorInStorage', JSON.stringify(state.BackgroundColor));
    localStorage.setItem('BackgroundColorSecondInStorage', JSON.stringify(state.BackgroundColorSecond));
    localStorage.setItem('BackgroundColorOpacitySecondInStorage', JSON.stringify(state.BackgroundColorOpacitySecond));
    localStorage.setItem('themeIsDarkInStorage', JSON.stringify(state.themeIsDark)); 
    
    

    sessionStorage.setItem('modalWindow', JSON.stringify(state.modalWindow));  
})

createApp(App).use(store).use(router).mount('#app')
