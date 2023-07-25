
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const account = ref(null)
  const isLoading = ref(true)

  function $reset() {
    account.value = null
  }

  async function load() {
    return new Promise(resolve => {
      setTimeout(() => {
        isLoading.value = false
        resolve()
      }, 1000)
    })
  }

  return {
    account,
    isLoading,
    $reset,
    load,
  }
})
