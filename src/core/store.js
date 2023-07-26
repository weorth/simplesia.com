
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { Categories } from '@/core/constants'
import Service from '@/services/mock'

export const AppStore = defineStore('app', () => {
  const account = ref(null)
  const service = ref(new Service())

  const authenticated = computed(() => {
    try {
      return service.value.authorize()
    } catch {
      return false
    }
  })

  const error = ref(null)

  const categories = computed(() => Categories)

  function clear() {
    error.value = null
  }

  async function login(email, password) {
    clear()
    try {
      await service.value.postLogin(email, password)
      account.value = await service.value.getAccount()
    } catch (err) {
      error.value = err
      throw err
    }
  }

  async function logout() {
    clear()
    try {
      await service.value.getLogout()
    } catch (err) {
      error.value = err
      throw err
    }
  }

  async function products() {
    clear()
    try {
      return await service.value.getProducts()
    } catch (err) {
      error.value = err
      throw err
    }
  }

  async function usage() {
    clear()
    try {
      if (!account.value) {
        account.value = await service.value.getAccount()
      }
      return await service.value.getUsages(account.value.id)
    } catch (err) {
      error.value = err
      throw err
    }
  }

  return {
    authenticated,
    error,

    categories,
    clear,
    login,
    logout,
    products,
    usage,
  }
})
