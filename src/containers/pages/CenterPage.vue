
<script setup>
</script>

<template>
  <div class="page">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page {
  @include flex(column);
  @include flex-center;
  @include width;

  flex: 1;
}
</style>
