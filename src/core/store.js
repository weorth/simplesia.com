
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
  const categories = computed(() => Categories)
  const error = ref(null)
  const me = computed(async () => {
    return !account.value ? await service.value.getAccount() : account.value
  })

  function clear() {
    error.value = null
  }

  async function invoices() {
    clear()
    try {
      if (!account.value) {
        account.value = await service.value.getAccount()
      }
      return await service.value.getInvoices(account.value.id)
    } catch (err) {
      error.value = err
      throw err
    }
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
      account.value = null
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

  async function update(updatedAccount) {
    clear()
    try {
      await service.value.getUsages(updatedAccount)
      account.value = updatedAccount
    } catch (err) {
      error.value = err
      throw err
    }
  }

  async function usages() {
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
    categories,
    error,
    me,

    clear,
    invoices,
    login,
    logout,
    products,
    update,
    usages,
  }
})
