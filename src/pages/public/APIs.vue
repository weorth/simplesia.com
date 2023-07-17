<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '../../i18n/store'

import { Categories, Models } from '../../mock'
import Expandable from '../../components/Expandable.vue'
import Page from '../../components/Page.vue'

const store = useLanguageStore()

const _categories = new Set()
const _models = new Map()
const _names = new Map()
const _params = new Map()
for (let [model, params] of Object.entries(Models)) {
  const parts = model.split('_')
  _params.set(model, params)

  const category = parts[0]
  _categories.add(category)

  const names = parts.map(tag => store.translate(tag, 1))
  _names.set(model, names)

  if (!_models.has(category)) {
    _models.set(category, [])
  }

  const tmpModels = _models.get(category)
  tmpModels.push(model)
  _models.set(category, tmpModels)
}

function getModels(category) {
  return _models.get(category)
}

function hasModels(category) {
  return _models.has(category)
}
</script>

<template>
  <Page>
    <div class="flex-col flex-full">
      <h1><t tag="api" qty="2" /></h1>
      <p><t tag="apis.summary" /></p>

      <div v-for="(category, index) in Categories" :key="index">
        <Expandable :show="hasModels(category)" :title="category">
          <div v-if="hasModels(category)" class="align-center flex-row flex-wrap justify-space-evenly">
            <div v-for="(model, idx) in getModels(category)" :key="idx">
              <div class="align-center card flex-col text-center">
                <h3>{{ _names.get(model).join(' ') }}</h3>
                <div class="align-center image justify-center">
                  <img :src="_params.get(model)[2]" />
                </div>
                <div class="flex-row flex-full justify-space-evenly">
                  <div class="flex-col m-t">
                    <span class="thin"><t tag="cost" /></span>
                    <span class="bold"><t tag="$" />{{ _params.get(model)[0] }}/req</span>
                  </div>
                  <div class="flex-col m-t">
                    <span class="thin"><t tag="latency" /></span>
                    <span class="bold">{{ _params.get(model)[1] }}ms</span>
                  </div>
                </div>
                <div class="m-t">
                  <router-link to="/login"><t tag="started" /></router-link>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="coming text-center">
            <t tag="api.coming" />
          </div>
        </Expandable>
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

  .card {
    margin: 1em;
    width: 16vw;

    @media (max-width: $sm) {
      width: 60vw;
    }

    .image {
      height: 9vh;
      overflow: hidden;
      width: 16vw;

      @media (max-width: $sm) {
        height: fit-content;
        width: 60vw;
      }

      img {
        max-width: inherit;
        max-height: inherit;
        height: inherit;
        width: inherit;
        object-fit: cover;
      }
    }
  }

  .coming {
    border: 1px dashed darken($white, 10%);
    border-radius: 1em;
    padding: 2em;
  }

  .flex-row {
    @media (max-width: $sm) {
      flex-direction: column;
    }
  }
}
</style>
