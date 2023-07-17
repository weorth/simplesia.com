import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import en from './en'
import pt from './pt'

export const useLanguageStore = defineStore('i18n', () => {
  const language = ref('en')
  const languages = ref({ en, pt })

  function $reset() {
    language.value = 'en'
    languages.value = { en, pt }
  }

  const getLanguage = computed(() => language)

  function setLanguage(newLanguage) {
    language.value = newLanguage
  }

  function translate(tag, qty) {
    let message = `[${tag}:${qty}]`
    qty = Number(qty)

    const options = languages.value[language.value][tag]
    if (!options) {
      return message
    }

    if (Array.isArray(options)) {
      message = qty > options.length
        ? options[options.length-1]
        : options[qty-1]
    } else {
      message = options
    }
    return message
  }

  return {
    language,
    $reset,
    getLanguage,
    setLanguage,
    translate,
  }
})
