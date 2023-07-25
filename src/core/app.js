
// Internal
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter } from '@/core/router'

// i18n
import { Countries } from '@/i18n/constants'
import { i18nStore } from '@/i18n/store'
import CountryFlag from '@/i18n/components/CountryFlag.vue'
import LanguagePanel from '@/i18n/components/LanguagePanel.vue'
import TranslateToken from '@/i18n/components/TranslateToken.vue'

// UI
import components from '@/components'
import containers from '@/containers'
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

  app.component('country-flag', CountryFlag)
  app.component('language-panel', LanguagePanel)
  // eslint-disable-next-line vue/multi-word-component-names
  app.component('t', TranslateToken)

  for (let current of [components, containers]) {
    for (let [k, v] of Object.entries(current)) {
      app.component(k, v)
    }
  }

  app.mount('#app')
}
