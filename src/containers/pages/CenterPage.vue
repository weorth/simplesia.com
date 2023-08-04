
<script setup>
</script>

<template>
  <div class="center-page">
    <slot />
  </div>
</template>

<style lang="scss">
.center-page {
  @include flex(column);
  @include flex-center;
  @include width;

  flex: 1;

  .card {
    height: auto;
    width: 33vw;

    @media (max-width: $sm) {
      height: auto;
      width: 80vw;
    }
  }
}
</style>
