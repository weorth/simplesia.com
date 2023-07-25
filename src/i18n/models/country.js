
export default class Country {
  code = ''
  language = ''
  translations = {}

  constructor(code, language, translations = {}) {
    this.code = code
    this.language = language
    this.translations = translations
  }

  getTranslations() {
    return this.translations
  }

  toCode() {
    return `${this.language}_${this.code}`
  }

  toString() {
    return this.toCode()
  }
}
