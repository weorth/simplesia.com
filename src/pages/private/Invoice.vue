<script setup>
import { useRouter } from 'vue-router'

import Page from '../../components/Page.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'

const router = useRouter()

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
          <span><t tag="number" />: 234234234</span>
          <span><t tag="date" />: 2023/06</span>
          <span><t tag="from" />: <t tag="company" /></span>
          <span><t tag="to" />: Customer Name</span>
        </div>
        <h3 class="status red">Waiting</h3>
        <div class="total">
          $234.50
        </div>
      </div>
      <table>
        <tr>
          <th><t tag="api" /></th>
          <th><t tag="request" qty="2" /></th>
          <th><t tag="cost" /></th>
          <th><t tag="tax" /></th>
        </tr>
        <tr>
          <td>License plates (BR)</td>
          <td>12,345</td>
          <td>$234.45</td>
          <td>$12.56</td>
        </tr>
        <tr>
          <td>Traffic signs (BR)</td>
          <td>10,807</td>
          <td>$201.18</td>
          <td>$10.22</td>
        </tr>
        <tr>
          <td>Vehicle damage</td>
          <td>457</td>
          <td>$7.38</td>
          <td>$0.25</td>
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
