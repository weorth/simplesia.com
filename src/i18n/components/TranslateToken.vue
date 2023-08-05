
<script setup>
import { computed } from 'vue'
import { i18nStore } from '@/i18n/store'

const props = defineProps({
  join: { default: ' ', type: String },
  qty: { default: 1, type: [Number, String] },
  t: String,
  ts: Array,
})

const store = i18nStore()

const translated = computed(() => {
  const qty = typeof props.qty === 'number'
    ? props.qty
    : Number(props.qty)

  const translations = []
  if (Array.isArray(props.ts) && props.ts.length) {
    for (let t of props.ts) {
      translations.push(store.translate(t, qty))
    }
  } else {
    translations.push(store.translate(props.t, qty))
  }
  return translations.join(props.join)
})
</script>

<template>
  <span>{{ translated }}</span>
</template>

<style lang="scss" scoped>
</style>
