import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const languageMap = {}

export function addLanguage(language, data) {
  languageMap[language] = data
}

export const useLanguageStore = defineStore('i18n', () => {
  const language = ref('en')
  const languages = ref(languageMap)

  function $reset() {
    language.value = 'en'
    languages.value = languageMap
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
    addLanguage,
    getLanguage,
    setLanguage,
    translate,
  }
})
