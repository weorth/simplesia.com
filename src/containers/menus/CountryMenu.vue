
<script setup>
import { Countries } from '@/i18n/constants'
</script>

<template>
  <row-layout class="menu">
    <country-flag
      v-for="(country, idx) in Countries"
      class="menu-item"
      :country="country"
      :key="idx" />
  </row-layout>
</template>

<style lang="scss" scoped>
.menu {
  @include flex-center;

  @media (max-width: $sm) {
    font-size: 1em;
    flex-direction: row;
  }

  &-item {
    margin-right: 0.25em;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
