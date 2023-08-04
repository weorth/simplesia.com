
<script setup>
import { AppStore } from '@/core/store'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const app = AppStore()
const code = ref(null)
const fields = [
  { label: 'email', name: 'email', required: true, type: 'email', value: 'test@email.com' },
]
const router = useRouter()
const success = ref(null)

function handleContinue() {
  router.push('/reset')
}

async function onSubmit(data) {
  if (!data.email) return
  code.value = await app.forgot(data.email)
  success.value = 'forgot-success'
  setTimeout(() => success.value = null, 1000)
}
</script>

<template>
  <center-page>
    <card-item>
      <h1><t t="forgot" /></h1>
      <app-error v-if="app.error" :error="app.error" />
      <app-success v-if="success" :message="success" />
      <div v-if="code" class="code">
        <div class="thin"><t t="code" />:</div>
        <div class="bold">{{ code }}</div>
        <flat-button :onClick="handleContinue" label="reset-password" />
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
