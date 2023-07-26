
<script setup>
import { ref } from 'vue'

const links = ref([
  { href: '/', label: 'home', qty: 1 },
  { href: '/products', label: 'product', qty: 2 },
  { href: '/login', label: 'manage', qty: 1 },
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
  @include flex-center;

  @media (max-width: $sm) {
    flex-direction: row;
  }

  &-item {
    font-size: 1.25em;
    line-height: 1.25em;
    margin-right: 2em;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
