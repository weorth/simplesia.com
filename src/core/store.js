
import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import { Categories } from '@/core/constants'
import { i18nStore } from '@/i18n/store'
import Service from '@/services/mock'

export const AppStore = defineStore('app', () => {
  const account = ref(null)
  const i18n = i18nStore()
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

  async function forgot(email) {
    clear()
    try {
      return await service.value.postForgot(email)
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function invoices() {
    clear()
    try {
      if (!account.value) {
        account.value = await service.value.getAccount()
      }
      return await service.value.getInvoices(account.value.id)
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function login(email, password) {
    clear()
    try {
      await service.value.postLogin(email, password)
      account.value = await service.value.getAccount()
      i18n.setCountry(account.value.country)
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function logout() {
    clear()
    try {
      await service.value.getLogout()
      account.value = null
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function payment({ number, month, year, cvc }) {
    clear()
    try {
      await service.value.postBilling(number, month, year, cvc)
      account.value = await service.value.getAccount()
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function products() {
    clear()
    try {
      return await service.value.getProducts()
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function register(account) {
    clear()
    try {
      account.value = await service.value.postRegister(account)
      i18n.setCountry(account.value.country)
      return account.value
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function reset(email, code, password) {
    clear()
    try {
      await service.value.postReset(email, code, password)
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function ticket(title, body) {
    clear()
    try {
      if (!account.value) {
        account.value = await service.value.getAccount()
      }
      return await service.value.postTicket(account.value.id, title, body)
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function tickets() {
    clear()
    try {
      if (!account.value) {
        account.value = await service.value.getAccount()
      }
      return await service.value.getTickets(account.value.id)
    } catch (err) {
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  async function update(updatedAccount) {
    clear()
    try {
      await service.value.putAccount(updatedAccount)
      account.value = await service.value.getAccount()
      i18n.setCountry(account.value.country)
      return account.value
    } catch (err) {
      error.value = JSON.parse(err.message)
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
      error.value = JSON.parse(err.message)
      throw err
    }
  }

  return {
    authenticated,
    categories,
    error,
    me,

    clear,
    forgot,
    invoices,
    login,
    logout,
    payment,
    products,
    register,
    reset,
    ticket,
    tickets,
    update,
    usages,
  }
})
