
<script setup>
import { AppStore } from '@/core/store'
import { onMounted, ref } from 'vue'

const app = AppStore()
const ticketCols = ref([
  { field: 'status', label: 'status', t: true },
  { field: 'title', label: 'title' },
  { field: 'body', label: 'body' },
])
const ticketFields = ref([
  { name: 'title', required: true, type: 'text' },
  { name: 'body', required: true, type: 'textarea' },
])
const tickets = ref([])

async function handleOpenTicket(data) {
  await app.ticket(data.title, data.body)
  tickets.value = await app.tickets()
}

onMounted(async () => {
  tickets.value = await app.tickets()
})
</script>

<template>
  <app-sentry>
    <full-page>
      <title-bar title="support" />
      <tabs-list>
        <tab-item active title="ticket">
          <data-table :cols="ticketCols" :rows="tickets" />
        </tab-item>
        <tab-item title="open">
          <data-form :fields="ticketFields" :onSubmit="handleOpenTicket" />
        </tab-item>
      </tabs-list>
    </full-page>
  </app-sentry>
</template>

<style lang="scss" scoped>
</style>
