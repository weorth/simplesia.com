<script setup>
import { ref } from 'vue'

import { EyeSlashIcon, EyeIcon } from '@heroicons/vue/24/solid'

const show = ref(true)

defineProps({
  title: String,
})

function onToggle(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  show.value = !show.value
}
</script>

<template>
  <div class="">
    <div class="align-center flex-row justify-space-between">
      <h2>{{ title }}</h2>
      <a @click="onToggle" href="#">
        <div v-if="show" class="flex-row thin">Hide <EyeSlashIcon /></div>
        <div v-else class="flex-row thin">Show <EyeIcon /></div>
      </a>
    </div>
    <slot v-if="show"></slot>
    <div v-else class="text-center thin">
      This area's content is currently hidden.
    </div>
  </div>
</template>

<style lang="scss" scoped>
a {
  div {
    font-size: 16px;
  }
}

svg {
  height: 24px;
  margin-left: 0.5em;
  width: 24px;
}
</style>
