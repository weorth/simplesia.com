
<script setup>
import { onMounted, onUpdated, ref } from 'vue'

const container = ref(null)
const headers = ref(null)
const index = ref(0)
const tabs = ref(null)
let timeout = null

onMounted(() => updateTabs())
onUpdated(() => updateTabs())

function changeTab(newIndex) {
  index.value = newIndex
  for (let tab of [...tabs.value, ...headers.value]) {
    tab.classList.remove('active')
  }

  headers.value[index.value].classList.add('active')
  tabs.value[index.value].classList.add('active')
}

function updateTabs() {
  if (!timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    try {
      tabs.value = [...container.value.querySelectorAll('.tab')]
      for (let tab of tabs.value) {
        if (tab.classList.contains('active')) {
          index.value = tabs.value.indexOf(tab)
        }
      }
    } catch {
      // Do nothing!
    }
  }, 10)
}
</script>

<template>
  <div class="tabs">
    <div class="tabs-list">
      <span
        v-for="(tab, idx) in tabs"
        @click="changeTab(idx)"
        class="tabs-tab"
        :class="index === idx ? 'active' : ''"
        :key="idx"
        ref="headers">
        <t :t="tab.title" />
      </span>
    </div>
    <div class="tabs-body" ref="container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>

.tabs {
  @include flex(column);

  &-list {
    @include flex(row);

    @media (max-width: $sm) {
      flex-direction: row;
    }
  }

  &-tab {
    @include border;

    background-color: $gray;
    border-bottom: 1px solid $gray;
    cursor: pointer;
    margin: 1em 0.5em -1px 0;
    padding: 1em;
    z-index: 99;

    &:hover {
      background-color: $gray;
    }

    &.active {
      background-color: $white;
      border-bottom: none;
    }
  }

  &-body {
    @include border;

    margin: 0 0 1em 0;
    padding: 1em;
  }
}
</style>
