<script setup>
import { ref } from 'vue'

import { EyeSlashIcon, EyeIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  show: { type: Boolean, default: false },
  title: String,
})

const show = ref(props.show)

function onToggle(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  show.value = !show.value
}
</script>

<template>
  <div class="">
    <div class="align-center flex-row justify-space-between">
      <h2><t :tag="title" /></h2>
      <a @click="onToggle" href="#">
        <div v-if="show" class="flex-row thin">
          <t tag="hide" /> <EyeSlashIcon />
        </div>
        <div v-else class="flex-row thin">
          <t tag="show" /> <EyeIcon />
        </div>
      </a>
    </div>
    <slot v-if="show"></slot>
    <div v-else class="text-center thin">
      <t tag="hidden" />
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
