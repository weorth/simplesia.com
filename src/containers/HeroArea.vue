
<script setup>
</script>

<template>
  <div class="hero">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @include flex(row);
  @include flex-center;

  background: $blue;
  color: $white;
}
</style>
