<script setup>
</script>

<template>
  <span class="align-center flex-row justify-space-evenly links">
    <router-link class="link" to="/private"><t tag="dashboard" /></router-link>
    <router-link class="link" to="/private/keys"><t tag="usage" /></router-link>
    <router-link class="link" to="/private/billing"><t tag="billing" /></router-link>
    <router-link class="link" to="/private/settings"><t tag="settings" /></router-link>
    <router-link class="link" to="/private/support"><t tag="support" /></router-link>
    <router-link class="link" to="/private/logout"><t tag="logout" /></router-link>
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
