<script setup>
</script>

<template>
  <span class="align-center flex-row justify-space-evenly links">
    <router-link class="link" to="/private">Dashboard</router-link>
    <router-link class="link" to="/private/billing">Billing</router-link>
    <router-link class="link" to="/private/keys">Keys</router-link>
    <router-link class="link" to="/private/logout">Logout</router-link>
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
