
<script setup>
import { ref } from 'vue'

const links = ref([
  { href: '/privacy', label: 'privacy-policy', qty: 1 },
  { href: '/terms', label: 'terms-of-service', qty: 1 },
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
    color: $blue;
    margin-right: 1em;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
