<script setup>
import { Tickets } from '@/mock'
import { useRoute, useRouter } from 'vue-router'

import Page from '@/components/Page.vue'
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
      <div class="align-begin flex-col m-b m-t">
        <span><t tag="number" /></span>
        <span class="id">{{ ticket.id }}</span>
      </div>
      <div class="align-begin flex-col m-b m-t">
        <span><t tag="status" /></span>
        <span class="status"><t :tag="ticket.status" /></span>
      </div>
      <div class="align-begin flex-col m-b m-t">
        <span><t tag="title" /></span>
        <span class="title">{{ ticket.title }}</span>
      </div>
      <div class="align-begin flex-col m-b m-t">
        <span><t tag="body" /></span>
        <span class="body">{{ ticket.body }}</span>
      </div>
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
  font-size: 2em;
}

.status {
  font-size: 2em;
}

.title {
  font-size: 2em;
  font-weight: bold;
}

.body {
  font-size: 1em;
  line-height: 2em;
}
</style>
