<script setup>
import { useLanguageStore } from '@/languages/store'

defineProps({
  bigger: { type: Boolean, default: false },
  footer: { type: Boolean, default: false },
})

const store = useLanguageStore()

function setLanguage(language) {
  store.setLanguage(language)
}
</script>

<template>
  <span class="align-center flex-row justify-space-evenly links">
    <div @click="setLanguage('en')" :class="['link', {'bigger': bigger}]">
      <span class="fi fi-us"></span>
    </div>
    <div @click="setLanguage('pt')" :class="['link', {'bigger': bigger}]">
      <span class="fi fi-br"></span>
    </div>
  </span>
</template>

<style lang="scss" scoped>
.links {
  .link {
    cursor: pointer;
    font-size: 1em;
    line-height: 2em;
    margin: 0 0.5em;

    @media (max-width: $sm) {
      font-size: 0.75em;
    }

    &.bigger {
      font-size: 5em;
    }
  }
}
</style>
