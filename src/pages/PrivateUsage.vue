
<script setup>
import { AppStore } from '@/core/store'
import { i18nStore } from '@/i18n/store'
import { computed, onMounted, ref } from 'vue'

const app = AppStore()
const cols = ref([
  { field: 'date', label: 'date' },
  { field: 'product', label: 'product', t: true },
  { field: 'requests', label: 'request', qty: 2 },
])
const i18n = i18nStore()
const usages = ref([])
const year = ref((new Date()).getFullYear())
const years = ref([])

const graphData = computed(() => {
  const filtered = usages.value.filter(usage => !year.value || usage.year === year.value)

  const dates = new Set()
  const totals = {}
  for (let usage of filtered) {
    const date = `${usage.year}-${usage.month+1}`
    dates.add(date)

    if (totals[date]) {
      totals[date] += usage.requests
    } else {
      totals[date] = usage.requests
    }
  }

  const datasets = [{
    data: Object.values(totals),
    label: i18n.translate('request', 2),
  }]
  const labels = Array.from(dates)
  return { datasets, labels }
})
const rows = computed(() => {
  return usages.value
    .filter(usage => !year.value || usage.year === year.value)
    .map(usage => ({
      ...usage,
      date: `${usage.year}-${usage.month+1}`,
    }))
})

function selectYear(newYear) {
  year.value = newYear
}

onMounted(async () => {
  const usage = await app.usages()

  const yrs = new Set()
  for (let u of usage) {
    yrs.add(u.year)
  }
  years.value = Array.from(yrs)

  usages.value = usage
})
</script>

<template>
  <app-sentry>
    <full-page>
      <title-bar title="usage" />
      <div class="years">
        <div><t t="year" qty="2" />:</div>
        <div @click="selectYear(null)" class="year" :class="!year ? 'active' : ''">
          <t t="all" />
        </div>
        <div v-for="yr in years" :key="yr">
          <div @click="selectYear(yr)" class="year" :class="year === yr ? 'active' : ''">
            {{ yr }}
          </div>
        </div>
      </div>
      <tabs-list>
        <tab-item active title="graph">
          <app-loading v-if="!usages.length" />
          <line-graph v-else :data="graphData" />
        </tab-item>
        <tab-item title="table">
          <data-table :cols="cols" :rows="rows.reverse()" />
        </tab-item>
      </tabs-list>
    </full-page>
  </app-sentry>
</template>

<style lang="scss" scoped>
.years {
  @include flex(row);

  align-items: center;

  .year {
    color: $blue;
    cursor: pointer;
    margin-left: 1em;

    &:hover {
      @include gradient;
    }

    &.active {
      font-weight: bold;
    }
  }
}
</style>
