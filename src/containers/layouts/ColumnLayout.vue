
<script setup>
</script>

<template>
  <div class="column">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.column {
  @include flex(column);
}
</style>
