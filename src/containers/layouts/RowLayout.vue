
<script setup>
</script>

<template>
  <div class="row">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.row {
  @include flex(row);
}
</style>
