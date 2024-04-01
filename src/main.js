import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/theme.scss"
import 'bootstrap-icons/font/bootstrap-icons.scss'
import 'bootstrap'

createApp(App).use(router).mount('#app')
