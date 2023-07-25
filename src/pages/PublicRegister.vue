
<script setup>
import { useRouter } from 'vue-router'

const fields = [
  { label: 'username', name: 'username', type: 'text', value: '' },
  { label: 'password', name: 'password', type: 'password', value: '' },
]
const router = useRouter()

function onSubmit(data) {
  console.log('onSubmit', data)
  router.push('/private')
}
</script>

<template>
  <center-page>
    <card-item>
      <h1><t t="register" /></h1>
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
