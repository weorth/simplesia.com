
<script setup>
import hljs from 'highlight.js'
import { onMounted } from 'vue'

defineProps({
  code: String,
  language: {
    default: 'c',
    type: String,
    validator: v => {
      const allowed = new Set([
        'go',
        'javascript',
        'python',
      ])

      return allowed.has(v)
    },
  },
})

onMounted(() => hljs.highlightAll())
</script>

<template>
  <pre>
    <code :class="language">
      {{ code }}
    </code>
  </pre>
</template>

<style lang="scss" scoped>
</style>
