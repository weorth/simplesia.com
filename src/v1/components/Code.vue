<script setup>
import { computed, onMounted } from 'vue'
import hljs from 'highlight.js'
import { sanitize_code } from '@/utils'

const props = defineProps({
  code: String,
  language: String,
})

const sanitized = computed(() => {
  return sanitize_code(props.code)
})

onMounted(() => hljs.highlightAll())
</script>

<template>
  <pre>
    <code :class="language">
      <div v-html="sanitized" />
    </code>
  </pre>
</template>

<style lang="scss" scoped>
</style>
