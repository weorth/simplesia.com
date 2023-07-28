
<script setup>
import { AppStore } from '@/core/store'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const app = AppStore()
const fields = [
  { label: 'email', name: 'email', type: 'email', value: '' },
  { label: 'password', name: 'password', type: 'password', value: '' },
]
const router = useRouter()

async function onSubmit(data) {
  await app.login(data.email, data.password)
  router.push('/private')
}

onMounted(() => {
  if (app.authenticated) {
    router.push('/private')
  }
})
</script>

<template>
  <center-page>
    <card-item>
      <h1><t t="login" /></h1>
      <div v-if="app.error">{{ app.error }}</div>
      <data-form :fields="fields" :onSubmit="onSubmit" />
      <div class="others">
        <link-button href="/register" label="need-account" />
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
