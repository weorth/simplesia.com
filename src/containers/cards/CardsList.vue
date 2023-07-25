
<script setup>
</script>

<template>
  <div class="cards">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.cards {
  @include flex(row);

  flex-wrap: wrap;
}
</style>
