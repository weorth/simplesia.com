
<script setup>
</script>

<template>
  <div class="grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  @include flex(row);

  flex: 1;
  flex-wrap: wrap;
}
</style>
