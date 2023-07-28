
// Internal
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter } from '@/core/router'

// i18n
import { Countries } from '@/i18n/constants'
import { i18nStore } from '@/i18n/store'

// UI
import components from '@/components'
import containers from '@/containers'
import i18nComponents from '@/i18n'
import SimplesiaApp from '@/SimplesiaApp.vue'

// Graph
import {
  Chart as ChartJS,
  CategoryScale, LinearScale,
  PointElement, LineElement,
  Title, Tooltip, Legend,
} from 'chart.js'

export function runApp() {
  ChartJS.register(
    CategoryScale, LinearScale,
    PointElement, LineElement,
    Title, Tooltip, Legend
  )

  const app = createApp(SimplesiaApp)
  const router = createRouter()
  const state = createPinia()

  app.use(router)
  app.use(state)

  const i18n = i18nStore()
  for (let country of Countries) {
    i18n.register(country)
  }

  for (let current of [i18nComponents, components, containers]) {
    for (let [k, v] of Object.entries(current)) {
      app.component(k, v)
    }
  }

  app.mount('#app')
}
