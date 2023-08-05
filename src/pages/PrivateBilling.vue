
<script setup>
import { AppStore } from '@/core/store'
import { onMounted, ref } from 'vue'

const app = AppStore()
const loading = ref(true)
const state = ref({
  account: {},
  invoice: { products: [] },
  invoices: [],
  usage: { requests: 0 },
})
const success = ref(null)

const invoiceCols = ref([
  { field: 'year', label: 'year' },
  { field: 'month', label: 'month' },
  { field: 'products', label: 'product', qty: 2, products: true },
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

const paymentFields = [
  [
    { name: 'number', type: 'password', required: true, min: 16, max: 16 },
  ],
  [
    { name: 'month', type: 'password', required: true, min: 2, max: 2 },
    { name: 'year', type: 'password', required: true, min: 4, max: 4 },
    { name: 'cvc', type: 'password', required: true, min: 3, max: 4 },
  ],
]

async function handlePaymentInfo(data) {
  await app.payment(data)
  success.value = 'billing-success'
  setTimeout(() => success.value = null, 3000)
}

onMounted(async () => {
  loading.value = true

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

  loading.value = false
})
</script>

<template>
  <app-sentry>
    <full-page>
      <title-bar title="billing" />
      <tabs-list>
        <tab-item active title="current">
          <app-loading v-if="loading" />
          <column-layout v-else>
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
          <div v-if="state.account.token" class="confirmed">
            <t t="payment-confirmed" />
          </div>
          <div class="info">
            <language-panel code="en_us">
              Fill out the form bellow to provide new credit card information for automated monthly billing.
            </language-panel>
            <language-panel code="pt_br">
              Preencha o formulário abaixo para fornecer as informações do novo cartão de crédito para pagamentos mensais automáticos.
            </language-panel>
          </div>
          <app-error v-if="app.error" :error="app.error" />
          <app-success v-if="success" :message="success" />
          <data-form :fields="paymentFields" :onSubmit="handlePaymentInfo" />
        </tab-item>
      </tabs-list>
    </full-page>
  </app-sentry>
</template>

<style lang="scss" scoped>
.page {
  .confirmed {
    @include flex(column);
    @include flex-center;

    border: 1px solid $green;
    color: $green;
    font-weight: bold;
    margin-bottom: 2em;
    padding: 2em 0;
  }

  .info {
    @include flex(column);
    @include flex-center;

    border: 1px solid $blue;
    color: $blue;
    font-weight: bold;
    margin-bottom: 2em;
    padding: 2em 0;
  }

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
