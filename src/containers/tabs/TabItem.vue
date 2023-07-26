
<script setup>
defineProps({
  active: Boolean,
})
</script>

<template>
  <div class="tab" :class="active && 'active'" ref="tabs">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.tab {
  @include flex(column);

  display: none;

  &.active {
    display: flex;
  }
}
</style>
