
<script setup>
import { AppStore } from '@/core/store'
import { useRouter } from 'vue-router'

const app = AppStore()
const router = useRouter()

async function logout() {
  await app.logout()
  router.push('/')
}
</script>

<template>
  <full-page>
    <h1><t t="account" /></h1>
    <tabs-list>
      <tab-item active title="profile">
        Edit user profile information
      </tab-item>
      <tab-item title="settings">
        Change settings for the user
      </tab-item>
      <tab-item title="logout">
        Logout of the account

        <flat-button :onClick="logout" label="logout" />
      </tab-item>
    </tabs-list>
  </full-page>
</template>

<style lang="scss" scoped>
</style>
