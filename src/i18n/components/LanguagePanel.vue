
<script setup>
import { computed } from 'vue'
import { i18nStore } from '@/i18n/store'

const props = defineProps({
  code: { required: true, type: String },
})

const i18n = i18nStore()
const isActive = computed(() => i18n.getCountry().toCode() === props.code)
</script>

<template>
  <slot v-if="isActive" />
</template>

<style lang="scss" scoped>
</style>
