<script setup>
import { Invoices, Tax, User } from '@/mock'
import { useRoute, useRouter } from 'vue-router'

import Page from '@/components/Page.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const route = useRoute()
const router = useRouter()

const date = route.params.date
const [requests, cost, status, userId] = Invoices[date]

function onClose(ev) {
  ev.preventDefault()
  ev.stopPropagation()

  router.go(-1)
}


</script>

<template>
  <Page>
    <div class="align-center flex-row justify-space-between">
      <h1><t tag="invoice" /></h1>
      <a @click="onClose" href="#" class="align-center flex-row icon">
        <span class="thin"><t tag="close" /></span>
        <XMarkIcon />
      </a>
    </div>
    <div class="card">
      <div class="align-center flex-row justify-space-between">
        <div class="flex-col">
          <span><t tag="date" />: {{ date }}</span>
          <span><t tag="from" />: <t tag="company" /></span>
          <span><t tag="to" />: {{ User.name() }}</span>
        </div>
        <h3 :class="['status', {'green': status == 'paid', 'red': status == 'unpaid'}]"><t :tag="status" /></h3>
        <div class="total">
          <t tag="$" />{{ cost }}
        </div>
      </div>
      <table>
        <tr>
          <th><t tag="api" /></th>
          <th><t tag="request" :qty="requests.toString()" /></th>
          <th><t tag="cost" /></th>
          <th><t tag="tax" /></th>
        </tr>
        <tr>
          <td><t tag="general" /></td>
          <td>{{ requests }}</td>
          <td><t tag="$" />{{ cost }}</td>
          <td><t tag="$" />{{ cost * Tax }}</td>
        </tr>
      </table>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80%;
  }
}

svg {
  margin-left: 0.5em;
}

.flex-row {
  @media (max-width: $sm) {
    flex-direction: column;
  }
}

.status {
  font-size: 3em;
}

.total {
  font-size: 5em;
  font-weight: 700;
}
</style>
