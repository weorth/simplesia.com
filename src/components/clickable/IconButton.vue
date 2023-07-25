
<script setup>
import {
  XMarkIcon as Close,
  ClipboardDocumentIcon as Copy,
  EyeSlashIcon as Hide,
  EyeIcon as View,
} from '@heroicons/vue/24/solid'

defineProps({
  close: { default: true, type: Boolean },
  copy: { default: false, type: Boolean },
  hide: { default: false, type: Boolean },
  view: { default: false, type: Boolean },
})
</script>

<template>
  <div class="icon">
    <Close v-if="close" />
    <Copy v-if="copy" />
    <Hide v-if="hide" />
    <View v-if="view" />
  </div>
</template>

<style lang="scss" scoped>
.icon {
  font-size: 2em;
}
</style>
