<script setup>
import hljs from 'highlight.js'
import { onMounted, onUpdated } from 'vue'

defineProps({
  language: String,
})

onMounted(() => hljs.highlightAll())
onUpdated(() => hljs.highlightAll())
</script>

<template>
  <pre>
    <code :class="language">
      <slot />
    </code>
  </pre>
</template>

<style lang="scss" scoped>
</style>
