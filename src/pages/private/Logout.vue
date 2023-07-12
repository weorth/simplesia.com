<script setup>
import { useRouter } from 'vue-router'

import Page from '../../components/Page.vue'

const router = useRouter()

function onNo(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  router.go(-1)
}

function onYes(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  router.push('/')
}
</script>

<template>
  <Page>
    <h1><t tag="logout" /></h1>
    <div class="align-center flex-col justify-center">
      <p><t tag="logout.confirmation" /></p>
      <div class="align-center flex-row justify-space-evenly">
        <button @click="onYes"><t tag="yes" /></button>
        <button @click="onNo" class="yellow"><t tag="no" /></button>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
</style>
