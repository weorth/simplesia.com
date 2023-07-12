<script setup>
import { computed } from 'vue'
import { useLanguageStore } from './store'

const props = defineProps({
  qty: { type: String, default: '1' },
  tag: String,
})

const store = useLanguageStore()

const msg = computed(() => store.translate(props.tag, props.qty))
</script>

<template>
  <span>{{ msg }}</span>
</template>

<style lang="scss" scoped>
</style>
