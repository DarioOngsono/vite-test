import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from './components/BaseButton.vue'

const Vue = createApp(App)
Vue.component('BaseButton', BaseButton)
Vue.mount('#app')
