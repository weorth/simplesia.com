
import { defineStore } from 'pinia'
import { get } from '@/core/utils'
import { ref } from 'vue'

export const i18nStore = defineStore('i18n', () => {
  const _current = ref(null)
  const _countries = {}

  function getCountries() {
    return Object.values(_countries)
  }

  function getCountry() {
    return _current.value
  }

  function register(country) {
    if (!_current.value) _current.value = country
    _countries[country.toCode()] = country
  }

  function setCountry(country) {
    _current.value = _countries[country]
  }

  function translate(path, qty = 1) {
    if (!isNaN(path)) {
      return ''
    }

    const current = getCountry()

    let code = current.toCode()
    let translation = `[$${code}-${path}-${qty}]`

    const translations = current.getTranslations()
    const value = get(translations, path)
    if (!value) return translation

    if (Array.isArray(value)) {
      const index = qty > value.length ? value.length : qty
      return value[index-1]
    }

    return value
  }

  return {
    getCountries,
    getCountry,
    setCountry,

    register,
    translate,
  }
})
