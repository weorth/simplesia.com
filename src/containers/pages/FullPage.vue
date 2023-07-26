
<script setup>
defineProps({
  maximize: Boolean,
})
</script>

<template>
  <div class="page">
    <app-header />
    <div class="scrollable">
      <div class="body" :class="maximize ? 'max' : ''">
        <slot />
      </div>
      <app-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  @include flex(column);

  flex: 1;
  overflow: hidden;

  .scrollable {
    @include flex(column);

    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .body {
    @include flex(column);
    @include width;

    flex: 1;
    min-height: min-content;
    padding: 1em 0;
    z-index: 50;

    &.max {
      padding: 0;
      width: 100vw;
    }
  }
}
</style>
