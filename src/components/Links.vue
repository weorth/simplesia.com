<script setup>
defineProps({
  footer: { type: Boolean, default: false },
})
</script>

<template>
  <span class="align-center flex-row justify-space-evenly links">
    <router-link class="link" to="/">
      <t tag="home" />
    </router-link>
    <router-link class="link" to="/apis">
      <t tag="api" qty="2" />
    </router-link>
    <router-link class="link" to="/support">
      <t tag="support" />
    </router-link>
    <router-link class="link" to="/login">
      <t tag="account" />
    </router-link>
    <router-link v-if="footer" class="link" to="/privacy">
      <t tag="privacy" />
    </router-link>
    <router-link v-if="footer" class="link" to="/terms">
      <t tag="terms" />
    </router-link>
  </span>
</template>

<style lang="scss" scoped>
.links {
  .link {
    font-size: 1em;
    line-height: 1em;
    margin: 0 0.5em;

    @media (max-width: $sm) {
      font-size: 0.75em;
    }
  }
}
</style>
