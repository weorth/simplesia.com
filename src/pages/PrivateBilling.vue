
<script setup>
import { AppStore } from '@/core/store'
import { onMounted, ref } from 'vue'

const app = AppStore()
const state = ref({
  account: {},
  invoice: { products: [] },
  invoices: [],
  usage: { requests: 0 },
})

const invoiceCols = ref([
  { field: 'year', label: 'year' },
  { field: 'month', label: 'month' },
  { field: 'products', label: 'product', qty: 2, list: true },
  { field: 'cost', label: 'cost', f: true },
  { field: 'tax', label: 'tax', f: true },
  { field: 'status', label: 'status', t: true },
])
const productCols = ref([
  { field: 'id', label: 'product', t: true },
  { field: 'requests', label: 'request', qty: 2 },
  { field: 'cost', label: 'cost', f: true },
  { field: 'tax', label: 'tax', f: true },
])

onMounted(async () => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()

  const _account = await app.me
  const _invoices = await app.invoices()
  const _usages = await app.usages()

  const requests = _usages
    .filter(usage => usage.year === year && usage.month === month)
    .reduce((acc, cur) => acc + cur.requests, 0)

  state.value = {
    account: _account,
    invoices: _invoices,
    invoice: _invoices.find(invoice => invoice.year === year && invoice.month === month),
    usage: { month, requests, year },
  }
})
</script>

<template>
  <app-sentry>
    <full-page>
      <title-bar title="billing" />
      <tabs-list>
        <tab-item active title="current">
          <column-layout>
            <h2><t t="account" /></h2>
            <row-layout>
              <div class="key">
                <t t="status" />:
              </div>
              <div class="value">
                <t :t="state.account.status" />
              </div>
            </row-layout>

            <h2><t t="usage" /></h2>
            <row-layout>
              <div class="key">
                <t t="period" />:
              </div>
              <div class="value">
                {{ state.usage.year }}-{{ state.usage.month }}
              </div>
            </row-layout>
            <row-layout>
              <div class="key">
                <t t="request" :qty="state.usage.requests" />:
              </div>
              <div class="value">
                {{ state.usage.requests }}
              </div>
            </row-layout>

            <h2><t t="invoice" /></h2>
            <row-layout>
              <div class="key">
                <t t="period" />:
              </div>
              <div class="value">
                {{ state.invoice.year }}-{{ state.invoice.month }}
              </div>
            </row-layout>
            <row-layout>
              <div class="key">
                <t t="status" />:
              </div>
              <div class="value">
                <t :t="state.invoice.status" />
              </div>
            </row-layout>
            <row-layout>
              <div class="key">
                <t t="cost" />:
              </div>
              <div class="value">
                <currency :amount="state.invoice.cost" />
              </div>
            </row-layout>
            <row-layout>
              <div class="key">
                <t t="tax" />:
              </div>
              <div class="value">
                <currency :amount="state.invoice.tax" />
              </div>
            </row-layout>
            <div class="spacer" />
            <data-table :cols="productCols" :rows="state.invoice.products" />
          </column-layout>
        </tab-item>
        <tab-item title="invoice" qty=2>
          <data-table :cols="invoiceCols" :rows="state.invoices.reverse()" />
        </tab-item>
        <tab-item title="payment-information">
          Display a form to change payment information
        </tab-item>
      </tabs-list>
    </full-page>
  </app-sentry>
</template>

<style lang="scss" scoped>
.page {
  .key {
    font-weight: 200;
    min-width: 6em;
  }

  .row {
    @media (max-width: $sm) {
      flex-direction: row;
    }
  }

  .spacer {
    height: 1em;
  }

  .value {
    margin-left: 1em;
    font-weight: bold;
  }
}
</style>
