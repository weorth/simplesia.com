<script setup>
</script>

<template>
  <span class="bold gradient logo">
    <t tag="company" />
  </span>
</template>

<style lang="scss" scoped>
$sm: 960px;

.logo {
  font-size: 1.75em;
  line-height: 1em;
  margin: 2px;
  text-transform: uppercase;

  @media (max-width: $sm) {
    font-size: 1em;
  }
}
</style>
