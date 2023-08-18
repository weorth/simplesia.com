
<script setup>
import { computed } from 'vue'

const isPrivate = computed(() => location.hash.includes('/private'))
</script>

<template>
  <div class="header">
    <div class="header-public">
      <app-logo />
      <country-menu />
      <public-menu />
    </div>
    <div class="header-private" :class="isPrivate ? '' : 'hide'">
      <private-menu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @include flex(column);

  max-width: 100vw;

  &-public {
    @include flex(row);
    @include flex-between;

    align-items: center;
    border-bottom: 1px solid $gray;
    padding: 1em;

    .menu:last-child {
      @media (max-width: $sm) {
        margin-top: 1em;
      }
    }
  }

  &-private {
    background-color: $gray;
    justify-content: flex-end;
    padding: 1em;

    &.hide {
      display: none;
    }
  }
}
</style>
