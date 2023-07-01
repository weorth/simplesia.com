
import './styles/main.scss'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Pricing from './pages/Pricing.vue'
import Products from './pages/Products.vue'
import Register from './pages/Register.vue'
import Services from './pages/Services.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/pricing', component: Pricing },
        { path: '/products', component: Products },
        { path: '/register', component: Register },
        { path: '/services', component: Services },
    ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
