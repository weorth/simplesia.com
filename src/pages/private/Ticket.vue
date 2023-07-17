<script setup>
import { Tickets } from '../../mock'
import { useRoute, useRouter } from 'vue-router'

import Page from '../../components/Page.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const router = useRouter()

const id = route.params.id
const ticket = Tickets[id]

function onClose(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  router.go(-1)
}
</script>

<template>
  <Page>
    <div class="align-center flex-row justify-space-between">
      <h1><t tag="ticket" /></h1>
      <a @click="onClose" href="#" class="align-center flex-row icon">
        <span class="thin"><t tag="close" /></span>
        <XMarkIcon />
      </a>
    </div>
    <div class="card">
      <div class="align-center flex-row justify-space-between">
        <div class="id">{{ ticket.id }}</div>
        <div class="status"><t :tag="ticket.status" /></div>
      </div>
      <div class="title">{{ ticket.title }}</div>
      <div class="body">{{ ticket.body }}</div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
svg {
  margin-left: 0.5em;
}

.card {
  width: 100%;

  @media (max-width: $sm) {
    width: 80%;
  }
}

.flex-row {
  @media (max-width: $sm) {
    flex-direction: column;
  }
}

.id {
  font-size: 3em;
  font-style: italic;
}

.status {
  font-size: 3em;
  font-weight: bold;
}

.title {
  font-size: 2em;
  font-weight: bold;
  margin: 2em 0;
}

.body {
  font-size: 2em;
  font-weight: lighter;
  line-height: 2em;
}
</style>
