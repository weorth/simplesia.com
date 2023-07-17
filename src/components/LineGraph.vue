<script setup>
import { computed, ref } from 'vue'

import { Line } from 'vue-chartjs'

const props = defineProps({
  data: Object,
})

const colors = Object.values(['green'])
function getColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

const data = computed(() => {
  const seen = new Set()
  const tmp = props.data
  for (let i = 0; i < tmp.datasets.length; i++) {
    let color = getColor()
    while (seen.has(color)) {
      color = getColor()
    }
    seen.add(color)
    tmp.datasets[i].backgroundColor = color
  }
  return tmp
})
const options = ref({
  aspectRation: 2,
  maintainAspectRatio: true,
  resizeDelay: 1000,
  responsive: true,
})
</script>

<template>
  <Line :data="data" :options="options" />
</template>

<style lang="scss" scoped>
</style>
