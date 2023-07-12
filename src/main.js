
import "/node_modules/flag-icons/css/flag-icons.min.css";
import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import T from './i18n/T.vue'

import APIs from './pages/public/APIs.vue'
import Forgot from './pages/public/Forgot.vue'
import Home from './pages/public/Home.vue'
import Login from './pages/public/Login.vue'
import Privacy from './pages/public/Privacy.vue'
import Register from './pages/public/Register.vue'
import Support from './pages/public/Support.vue'
import Terms from './pages/public/Terms.vue'

import Billing from './pages/private/Billing.vue'
import Invoice from './pages/private/Invoice.vue'
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

const state = createPinia()

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/apis', component: APIs },
        { path: '/forgot', component: Forgot },
        { path: '/login', component: Login },
        { path: '/privacy', component: Privacy },
        { path: '/register', component: Register },
        { path: '/support', component: Support },
        { path: '/terms', component: Terms },

        { path: '/private', component: Usage },
        { path: '/private/billing', component: Billing },
        { path: '/private/invoice', component: Invoice },
        { path: '/private/keys', component: Keys },
        { path: '/private/logout', component: Logout },
    ],
})

const app = createApp(App)

app.use(state)
app.use(router)

// eslint-disable-next-line vue/multi-word-component-names
app.component('t', T)

app.mount('#app')
