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
    <h1>Logout</h1>
    <div class="align-center flex-col justify-center">
      <p>Are you sure you want to logout of the system?</p>
      <div class="align-center flex-row justify-space-evenly">
        <button @click="onYes">Yes</button>
        <button @click="onNo" class="yellow">No</button>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
</style>
