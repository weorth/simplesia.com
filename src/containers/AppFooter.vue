
<script setup>
import { computed } from 'vue'

const year = computed(() => (new Date()).getFullYear())
</script>

<template>
  <div class="footer">
    <div class="block">
      <span>
        <t t="copyright" /> &copy; {{ year }} Weorth, LLC
      </span>
      <t t="rights" />
      <legal-menu />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @include flex(column);
  @include flex-center;

  border-top: 1px solid $gray;
  height: $footer;
  margin: 0;
  padding: 1em;

  @media (max-width: $sm) {
    flex-direction: row;
  }

  .block {
    @include flex(column);
    @include flex-center;
  }
}
</style>
