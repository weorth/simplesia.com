<script setup>
import { History } from '@/mock'
import { onMounted, ref } from 'vue'
import { useAppStore } from '@/store'
import { useLanguageStore } from '@/languages/store'

import Animation from '@/components/animations/Lottie.vue'
import Page from '@/components/Page.vue'
import LineGraph from '@/components/graphs/Line.vue'

const app = useAppStore()
const selected = ref('graph')
const store = useLanguageStore()

const data = ref({
  datasets: [
    { data: Object.values(History), label: store.translate('request', 2) },
  ],
  labels: Object.keys(History),
})

function onSelect(tab) {
  selected.value = tab
}

function zip(obj) {
  const temp = []
  for (let [k, v] of Object.entries(obj)) {
    temp.push([k, v])
  }
  return temp
}

onMounted(async () => {
  await app.load()
})
</script>

<template>
  <Page>
    <h1><t tag="dashboard" /></h1>
    <div v-if="app.isLoading" class="splash">
      <div class="loading">
        <Animation src="/loading.json" />
      </div>
    </div>
    <div v-else class="tabs">
      <div class="tab-list">
        <div @click="onSelect('graph')" :class="['tab', {'active': selected == 'graph'}]">
          <t tag="graph" />
        </div>
        <div @click="onSelect('table')" :class="['tab', {'active': selected == 'table'}]">
          <t tag="table" />
        </div>
      </div>
      <div class="tab-body">
        <div v-if="selected == 'graph'">
          <div class="flex-full m-b">
            <LineGraph :data="data" />
          </div>
        </div>
        <div v-if="selected == 'table'">
          <div class="flex-full m-t">
            <table>
              <tr>
                <th><t tag="date" /></th>
                <th><t tag="request" qty="2" /></th>
              </tr>
              <tr v-for="([date, [requests]], idx) in zip(History)" :key="idx">
                <td>{{ date }}</td>
                <td>{{ requests }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80vw;
  }
}

.flex-row {
  @media (max-width: $sm) {
    align-items: center;
    flex-direction: column;
  }
}

.splash {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;

  .loading {
    height: 5em;
    width: 5em;
  }
}
</style>
