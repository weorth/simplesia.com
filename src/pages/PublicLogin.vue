
<script setup>
import { AppStore } from '@/core/store'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const app = AppStore()
const fields = [
  { label: 'email', name: 'email', required: true, type: 'email', value: 'test@email.com' },
  { label: 'password', name: 'password', required: true, type: 'password', value: 'password' },
]
const router = useRouter()
const success = ref(null)

async function onSubmit(data) {
  if (!data.email || !data.password) return
  await app.login(data.email, data.password)
  success.value = 'login-success'
  setTimeout(() => router.push('/private'), 1000)
}

onMounted(() => {
  if (app.authenticated) {
    success.value = 'login-success'
    setTimeout(() => router.push('/private'), 1000)
  }
})
</script>

<template>
  <center-page>
    <card-item>
      <h1><t t="login" /></h1>
      <app-error v-if="app.error" :error="app.error" />
      <app-success v-if="success" :message="success" />
      <data-form :fields="fields" :onSubmit="onSubmit" />
      <div class="others">
        <link-button href="/register" label="need-account" />
        <link-button href="/forgot" label="forgot-password" />
      </div>
    </card-item>
  </center-page>
</template>

<style lang="scss" scoped>
.others {
  @include flex(column);
  @include flex-center;
}
</style>
