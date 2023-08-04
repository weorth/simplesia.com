
<script setup>
import { AppStore } from '@/core/store'
import { Countries } from '@/i18n/constants'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const app = AppStore()
const countries = Countries.map(country => ({ label: country.code, value: country.toCode() }))
  .sort((a, b) => {
    if (a.label > b.label) return 1
    if (a.label < b.label) return -1
    return 0
  })
const fields = [
  { label: 'country', name: 'country', type: 'select', options: countries, value: '' },
  { label: 'email', name: 'email', required: true, type: 'email', value: '' },
  { label: 'name', name: 'name', required: true, type: 'text', value: '' },
  { label: 'password', name: 'password', required: true, type: 'password', value: '' },
]
const router = useRouter()
const success = ref(null)

async function onSubmit(data) {
  await app.register(data)
  success.value = 'register-success'
  setTimeout(() => router.push('/login'), 1000)
}
</script>

<template>
  <center-page>
    <card-item>
      <h1><t t="register" /></h1>
      <app-error v-if="app.error" :error="app.error" />
      <app-success v-if="success" :message="success" />
      <data-form :fields="fields" :onSubmit="onSubmit" />
      <div class="others">
        <link-button href="/login" label="have-account" />
      </div>
    </card-item>
  </center-page>
</template>

<style lang="scss" scoped>
.others {
  @include flex(row);
  @include flex-center;
}
</style>
