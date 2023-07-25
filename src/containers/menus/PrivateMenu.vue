
<script setup>
import { ref } from 'vue'

const links = ref([
  { href: '/private', label: 'usage', qty: 1 },
  { href: '/private/billing', label: 'billing', qty: 1 },
  { href: '/private/support', label: 'support', qty: 1 },
  { href: '/private/account', label: 'account', qty: 1 },
])
</script>

<template>
  <row-layout class="menu">
    <div v-for="(link, idx) in links" :key="idx" class="menu-item">
      <link-button :href="link.href" :label="link.label" :qty="link.qty" />
    </div>
  </row-layout>
</template>

<style lang="scss" scoped>
.menu {
  @include flex(row);
  @include flex-center;

  &-item {
    color: $blue;
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: $sm) {
      margin-right: 0;
    }
  }

  @media (max-width: $sm) {
    margin-top: 1em;
  }
}
</style>
