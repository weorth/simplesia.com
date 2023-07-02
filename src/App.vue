<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Links from './components/Links.vue'
import Logo from './components/Logo.vue'
import PrivateLinks from './components/PrivateLinks.vue'

const isPrivate = computed(() => useRoute().path.indexOf('/private') !== -1)
</script>

<template>
  <div class="">
    <div class="align-center flex-row justify-space-between header">
      <Logo />
      <Links />
    </div>
    <div v-if="isPrivate" class="align-center flex-row justify-space-between sub-header">
      <div />
      <PrivateLinks />
    </div>
    <div :class="['body', {'private': isPrivate}]">
      <router-view></router-view>
    </div>
    <div class="align-center flex-row justify-space-between footer">
      <p class="bold copyright">Copyright &copy; 2023 Simplesia</p>
      <Links />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body {
  height: 90vh;
  margin: 0 auto;
  max-height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;

  &.private {
    height: 85vh !important;
  }
}

.footer {
  height: 5vh;
  padding: 0 2em;

  .copyright {
    font-size: 1.15em;

    @media (max-width: $sm) {
      font-size: 0.75em;
    }
  }
}

.header {
  font-size: 1.25em;
  height: 5vh;
  padding: 0 1em;
}

.sub-header {
  background-color: darken($white, 5%);
  font-size: 1.15em;
  height: 5vh;
  padding: 0 1em;
}
</style>
