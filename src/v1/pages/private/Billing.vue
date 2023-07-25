<script setup>
import { History, User } from '@/mock'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Page from '@/components/Page.vue'

const ccv = ref('')
const month = ref('')
const pan = ref('')
const year = ref('')

const user = User

const router = useRouter()
const selected = ref('invoices')
const showCC = ref(!user.pan.length)

function onSave() {
  alert('Saved!')
}

function onSelect(tab) {
  selected.value = tab
}

function open(date) {
  router.push(`/private/invoice/${date}`)
}

function zip(obj) {
  const temp = []
  for (let [k, v] of Object.entries(obj)) {
    temp.push([k, v])
  }
  return temp.reverse()
}
</script>

<template>
  <Page>
    <div class="align-center flex-row justify-space-between">
      <h1><t tag="billing" /></h1>
    </div>
    <div class="tabs">
      <div class="tab-list">
        <div @click="onSelect('invoices')" :class="['tab', {'active': selected == 'invoices'}]">
          <t tag="invoice" qty="2" />
        </div>
        <div @click="onSelect('payment')" :class="['tab', {'active': selected == 'payment'}]">
          <t tag="payment.information" />
        </div>
      </div>
      <div class="tab-body">
        <div v-if="selected == 'invoices'">
          <table>
            <tr>
              <th><t tag="date" /></th>
              <th><t tag="request" qty="2" /></th>
              <th><t tag="cost" /></th>
              <th><t tag="status" /></th>
              <th></th>
            </tr>
            <tr v-for="([date, [requests, cost, status]], idx) in zip(History)" :key="idx">
              <td>{{ date }}</td>
              <td>{{ requests }}</td>
              <td>{{ cost }}</td>
              <td><t :tag="status" /></td>
              <td><a @click.prevent.stop="open(date)" href="#"><t tag="view" /></a></td>
            </tr>
          </table>
        </div>
        <div v-if="selected == 'payment'">
          <form>
            <div v-if="!showCC" class="flex-row justify-space-around p cc hide">
              <div class="flex-col">
                <t tag="cc.provided" />
                <button @click.prevent.stop="showCC = true" class="yellow">
                  <t tag="change" />
                </button>
              </div>
            </div>
            <fieldset v-else class="cc show">
              <legend><t tag="cc.information" /></legend>
              <div class="flex-row">
                <div class="flex-full field">
                  <label><t tag="pan" />:</label>
                  <input id="pan" name="pan" type="password" :value="pan" />
                </div>
                <div class="field">
                  <label><t tag="ccv" />:</label>
                  <input id="ccv" name="ccv" type="text" :value="ccv" />
                </div>
              </div>
              <div class="flex-row">
                <div class="flex-full field">
                  <label><t tag="year" />:</label>
                  <input id="year" name="year" type="text" :value="year" />
                </div>
                <div class="flex-full field">
                  <label><t tag="month" />:</label>
                  <input id="month" name="month" type="text" :value="month" />
                </div>
              </div>
              <div class="flex-row justify-space-around">
                <button @click.prevent.stop="showCC = false; onSave();" class="yellow">
                  <t tag="cc.send" />
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
form {
  field {
    width: 100%;
  }
}

table {
  width: 100%;

  @media (max-width: $sm) {
    width: 80vw;
  }
}

.cc {
  border: 1px solid $black;

  &.hide { border-color: $green; }
  &.show { border-color: $red; }
}

.flex-row {
  @media (max-width: $sm) {
    flex-direction: column;
  }
}
</style>
