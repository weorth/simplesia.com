
<script setup>
</script>

<template>
  <div class="loading">
    <div class="graphic">
      <lottie-animation src="/animations/loading.json" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  @include flex(column);
  @include flex-center;

  flex: 1;
  height: 100%;
  width: 100%;

  .graphic {
    height: auto;
    width: 4em;
  }
}
</style>
