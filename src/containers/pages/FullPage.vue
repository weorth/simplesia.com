
<script setup>
import { computed } from 'vue'

defineProps({
  maximize: Boolean,
})

const isPrivate = computed(() => {
  return location.hash.includes('/private')
})

const year = computed(() => (new Date()).getFullYear())
</script>

<template>
  <div class="page">
    <div class="header">
      <app-logo />
      <country-menu />
      <public-menu />
    </div>
    <div v-if="isPrivate" class="sub-header">
      <private-menu />
    </div>
    <div class="scrollable">
      <div class="body" :class="maximize ? 'max' : ''">
        <slot />
      </div>
    </div>
    <div class="footer">
      <div class="copyright">
        <t t="copyright" /> &copy; {{ year }} - <t t="rights" />
      </div>
      <div class="links">
        <legal-menu />
      </div>
      <div class="contact">
        <link-button email="info@weorth.ai" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  @include flex(column);

  flex: 1;

  .header {
    @include flex(row);
    @include flex-center;
    @include flex-between;

    background-color: $white;
    height: $header;
    padding: 0 1em;
    z-index: 99;

    @media (max-width: $sm) {
      height: $header * 3;
    }
  }

  .sub-header {
    @include flex(row);

    background-color: $gray;
    justify-content: flex-end;
    padding: 1em;

    @media (max-width: $sm) {
      justify-content: center;
    }
  }

  .scrollable {
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100vh - $header;

    @media (max-width: $sm) {
      max-height: 100vh - $header * 5;
    }
  }

  .body {
    @include flex(column);
    @include width;

    flex: 1;
    height: $body;
    padding: 1em 0;
    z-index: 50;

    &.max {
      padding: 0;
      width: 100vw;
    }
  }

  .footer {
    @include flex(row);
    @include flex-evenly;

    align-items: center;
    background-color: $gray;
    height: $footer;

    @media (max-width: $sm) {
      align-items: center;
      height: fit-content;
    }

    .copyright {
      @media (max-width: $sm) {
        margin-top: 0.5em;
      }
    }

    .links {}

    .contact {}
  }
}
</style>
