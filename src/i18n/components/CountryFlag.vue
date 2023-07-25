
<script setup>
import { i18nStore } from '@/i18n/store'

defineProps({
  country: { required: true, type: Object },
})

const i18n = i18nStore()

function setCountry(country) {
  i18n.setCountry(country)
}
</script>

<template>
  <span
    @click.prevent.stop="setCountry(country)"
    :class="['fi', `fi-${country.code}`, 'flag']" />
</template>

<style lang="scss" scoped>
.flag {
  cursor: pointer;
  font-size: 2em;
}
</style>
