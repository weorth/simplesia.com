<script setup>
import { ref } from 'vue'
import { Tickets } from '../../mock'
import { useRouter } from 'vue-router'

import Page from '../../components/Page.vue'

const router = useRouter()
const selected = ref('tickets')
const ticket = ref({id: '', title: '', body: ''})

function onSave() {
  alert('Saved!')
  selected.value = 'tickets'
}

function onSelect(tab) {
  selected.value = tab
}

function open(id) {
  router.push(`/private/ticket/${id}`)
}
</script>

<template>
  <Page>
    <div class="align-center flex-row justify-space-between">
      <h1><t tag="support" /></h1>
    </div>
    <div class="tabs">
      <div class="tab-list">
        <div @click="onSelect('tickets')" :class="['tab', {'active': selected == 'tickets'}]">
          <t tag="ticket" qty="2" />
        </div>
        <div @click="onSelect('open')" :class="['tab', {'active': selected == 'open'}]">
          <t tag="ticket.open" />
        </div>
      </div>
      <div class="tab-body">
        <div v-if="selected == 'tickets'">
          <table>
            <tr>
              <th><t tag="number" /></th>
              <th><t tag="status" /></th>
              <th><t tag="title" /></th>
              <th></th>
            </tr>
            <tr v-for="(ticket, idx) in Tickets" :key="idx">
              <td>{{ ticket.id }}</td>
              <td><t :tag="ticket.status" /></td>
              <td>{{ ticket.title }}</td>
              <td><a @click.prevent.stop="open(ticket.id)" href="#"><t tag="view" /></a></td>
            </tr>
          </table>
        </div>
        <div v-if="selected == 'open'">
          <form>
            <fieldset>
              <legend><t tag="ticket" /></legend>
              <div class="flex-col">
                <div class="flex-full field">
                  <label><t tag="title" />:</label>
                  <input id="title" name="title" type="text" :value="ticket.title" />
                </div>
                <div class="flex-full field">
                  <label><t tag="body" />:</label>
                  <textarea id="body" name="body" rows="10" type="text" :value="ticket.body"></textarea>
                </div>
              </div>
            </fieldset>
          </form>
          <div class="flex-row justify-space-around">
            <button @click.prevent.stop="onSave"><t tag="open" /></button>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80vw;
  }
}
</style>
