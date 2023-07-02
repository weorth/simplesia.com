<script setup>
import { computed, ref } from 'vue'

import { Colors } from '../config'
import { Line } from 'vue-chartjs'

const props = defineProps({
  data: Object,
})

const colors = Object.values(Colors)
function getColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

const data = computed(() => {
  const seen = new Set();
  for (let i = 0; i < props.data.datasets.length; i++) {
    let color = getColor()
    while (seen.has(color)) {
      color = getColor()
    }
    seen.add(color)
    props.data.datasets[i].backgroundColor = color
  }
  return props.data
})
const options = ref({
  aspectRation: 2,
  maintainAspectRation: true,
  resizeDelay: 1000,
  responsive: true,
})
</script>

<template>
  <Line :data="data" :options="options" />
</template>

<style lang="scss" scoped>
</style>
