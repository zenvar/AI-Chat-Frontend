import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './mdlight.css'
import './styles.css'
import 'highlight.js/styles/github.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
