import './assets/main.css'
import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AxiosPlugin from './plugins/axios'

const app = createApp(App)

app.use(AxiosPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')