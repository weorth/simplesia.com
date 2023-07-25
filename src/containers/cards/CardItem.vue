
<script setup>
</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  @include box;

  padding: 1em;
}
</style>
