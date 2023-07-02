
import './styles/main.scss'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import Home from './pages/public/Home.vue'
import Login from './pages/public/Login.vue'
import Pricing from './pages/public/Pricing.vue'
import Products from './pages/public/Products.vue'
import Register from './pages/public/Register.vue'
import Services from './pages/public/Services.vue'

import Billing from './pages/private/Billing.vue'
import Keys from './pages/private/Keys.vue'
import Logout from './pages/private/Logout.vue'
import Usage from './pages/private/Usage.vue'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/pricing', component: Pricing },
        { path: '/products', component: Products },
        { path: '/register', component: Register },
        { path: '/services', component: Services },

        { path: '/private', component: Usage },
        { path: '/private/billing', component: Billing },
        { path: '/private/keys', component: Keys },
        { path: '/private/logout', component: Logout },
    ],
})

const app = createApp(App)

app.use(router)

app.mount('#app')
