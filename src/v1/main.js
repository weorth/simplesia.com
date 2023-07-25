
import '/node_modules/flag-icons/css/flag-icons.min.css'
import '@/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'

import { addLanguage } from '@/languages/store'
import en from '@/languages/en'
import pt from '@/languages/pt'

import App from '@/App.vue'
import T from '@/languages/T.vue'

import APIs from '@/pages/public/APIs.vue'
import Forgot from '@/pages/public/Forgot.vue'
import Home from '@/pages/public/Home.vue'
import Login from '@/pages/public/Login.vue'
import Privacy from '@/pages/public/Privacy.vue'
import Register from '@/pages/public/Register.vue'
import Terms from '@/pages/public/Terms.vue'

import Billing from '@/pages/private/Billing.vue'
import Dashboard from '@/pages/private/Dashboard.vue'
import Invoice from '@/pages/private/Invoice.vue'
import Keys from '@/pages/private/Keys.vue'
import Logout from '@/pages/private/Logout.vue'
import Settings from '@/pages/private/Settings.vue'
import Support from '@/pages/private/Support.vue'
import Ticket from '@/pages/private/Ticket.vue'

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

// Setup application state
const state = createPinia()

// Setup the router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/apis', component: APIs },
        { path: '/forgot', component: Forgot },
        { path: '/login', component: Login },
        { path: '/privacy', component: Privacy },
        { path: '/register', component: Register },
        { path: '/terms', component: Terms },

        { path: '/private', component: Dashboard },
        { path: '/private/billing', component: Billing },
        { path: '/private/invoice/:date', component: Invoice },
        { path: '/private/keys', component: Keys },
        { path: '/private/logout', component: Logout },
        { path: '/private/settings', component: Settings },
        { path: '/private/support', component: Support },
        { path: '/private/ticket/:id', component: Ticket },
    ],
})

// Setup languages
addLanguage('en', en)
addLanguage('pt', pt)

// Create the application
const app = createApp(App)

// Use middleware like state and router
app.use(state)
app.use(router)

// Register custom components
// eslint-disable-next-line vue/multi-word-component-names
app.component('t', T)

// Mount the application to the DOM
app.mount('#app')
