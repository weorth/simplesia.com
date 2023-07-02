<script setup>
</script>

<template>
  <span class="align-center flex-row justify-space-evenly links">
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/services">Services</router-link>
    <router-link class="link" to="/products">Products</router-link>
    <router-link class="link" to="/pricing">Pricing</router-link>
    <router-link class="link" to="/login">Login</router-link>
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
