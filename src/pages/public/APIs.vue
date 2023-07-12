<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '../../i18n/store'

import { Models } from '../../config'
import Page from '../../components/Page.vue'

const store = useLanguageStore()

const _categories = new Set()
const _models = new Map()
const _names = new Map()
const _params = new Map()
for (let [model, params] of Object.entries(Models)) {
  const parts = model.split('_')
  _params.set(model, params)

  const names = parts.map(tag => store.translate(tag, 1))
  _names.set(model, names)

  _categories.add(names[0])

  if (!_models.has(names[0])) {
    _models.set(names[0], [])
  }

  const tmpModels = _models.get(names[0])
  tmpModels.push(model)
  _models.set(names[0], tmpModels)
}

const categories = ref(Array.from(_categories))

function getModels(category) {
  return _models.get(category)
}
</script>

<template>
  <Page>
    <div class="flex-col flex-full">
      <h1><t tag="api" qty="2" /></h1>
      <p><t tag="apis.summary" /></p>

      <div v-for="(cat, idx) in categories" :key="idx">
        <h2>{{ cat }}</h2>
        <table>
          <tr>
            <th><t tag="name" /></th>
            <th><t tag="cost" /></th>
            <th><t tag="latency" /></th>
          </tr>
          <tr v-for="(model, idx) in getModels(cat)" :key="idx">
            <td>{{ _names.get(model).join(' ') }}</td>
            <td><t tag="$" />{{ _params.get(model)[0] }}/req</td>
            <td>{{ _params.get(model)[1] }}ms</td>
          </tr>
        </table>
      </div>

      <div class="align-center flex-row justify-space-around">
        <router-link class="btn" to="/register">
          <t tag="started" />
        </router-link>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
table {
  width: 100%;
}

.page {
  margin: 0 auto;
  max-width: 80vw;

  .btn {
    @media (max-width: $sm) {
      margin: 2em 0;
    }
  }
}
</style>
