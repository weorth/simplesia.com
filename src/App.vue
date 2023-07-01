<script setup>
import Links from './components/Links.vue'
import Logo from './components/Logo.vue'
</script>

<template>
  <div class="">
    <div class="align-center flex-row justify-space-between header">
      <Logo />
      <Links />
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="align-center flex-row justify-space-between footer">
      <p class="bold copyright">Copyright &copy; 2023 Simplesia</p>
      <Links />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$sm: 960px;

.body {
  height: 90vh;
  max-height: 90vh;
  overflow-x: hidden;
  overflow-y: auto;
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
</style>
