
<script setup>
import { computed } from 'vue'

const props = defineProps({
  amount: [Number, String],
})

const fixedAmount = computed(() => {
  return (props.amount || 0.00).toFixed(2)
})
</script>

<template>
  <div class="currency">
    <t t="$" />{{ fixedAmount }}
  </div>
</template>

<style lang="scss" scoped>
</style>
