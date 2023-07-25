<script setup>
</script>

<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1400px;
  width: 80vw;

  @media (max-width: $sm) {
    max-width: 100vw;
    width: 100vw;
  }
}
</style>
