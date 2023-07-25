
<script setup>
import { route } from '@/core/utils'

defineProps({
  email: String,
  href: String,
  label: String,
  qty: { default: 1, type: Number },
})
</script>

<template>
  <a v-if="email" :href="`mailto:${email}`">{{ email }}</a>
  <router-link
    v-else
    class="link"
    :class="route() === href ? 'active' : ''"
    :to="href">
    <t :t="label" :qty="qty" />
  </router-link>
</template>

<style lang="scss" scoped>
a, .link {
  color: $blue;
  text-decoration: none;

  &:hover {
    @include gradient-fg;
  }

  &.active {
    font-weight: bold;
  }
}
</style>
