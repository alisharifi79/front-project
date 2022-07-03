import { createApp } from 'vue'
import App from './App.vue'
//import GreeTing from './components/Greeting.vue'

const vm = createApp(App)

//vm.component('GreeTing', GreeTing)

vm.mount('#app')
