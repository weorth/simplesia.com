
<script setup>
import { AppStore } from '@/core/store'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const app = AppStore()
const router = useRouter()

onMounted(() => {
  if (!app.authenticated) {
    router.push('/login')
  }
})
</script>

<template>
  <slot />
</template>

<style lang="scss" scoped>
</style>
