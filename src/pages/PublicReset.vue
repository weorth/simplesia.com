
<script setup>
import { AppStore } from '@/core/store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const app = AppStore()
const code = ref(null)
const fields = [
  { label: 'email', name: 'email', required: true, type: 'email', value: 'test@email.com' },
  { label: 'code', name: 'code', required: true, type: 'text', value: 'DEMO_CODE' },
  { label: 'password', name: 'password', required: true, type: 'password', value: 'password' },
]
const router = useRouter()
const success = ref(null)

async function onSubmit({ code, email, password }) {
  if (!code || !email || !password) return
  await app.reset(email, code, password)
  success.value = 'reset-success'
  setTimeout(() => router.push('/login'), 1000)
}
</script>

<template>
  <center-page>
    <card-item>
      <h1><t t="reset" /></h1>
      <app-error v-if="app.error" :error="app.error" />
      <app-success v-if="success" :message="success" />
      <div v-if="code" class="code">
        <div class="thin"><t t="code" />:</div>
        <div class="bold">{{ code }}</div>
        <div class="others">
          <link-button href="/reset" label="reset-password" />
        </div>
      </div>
      <data-form v-else :fields="fields" :onSubmit="onSubmit" />
    </card-item>
  </center-page>
</template>

<style lang="scss" scoped>
.code {
  @include flex(column);
  @include flex-center;

  background-color: $gray;
  font-weight: bold;
  margin-bottom: 1em;
  padding: 1em;

  .bold {
    font-weight: bold;
  }

  .thin {
    font-weight: 200;
  }
}

.others {
  @include flex(column);
  @include flex-center;
}
</style>
