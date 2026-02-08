import { createI18n } from 'vue-i18n'
import pt from './locales/pt'
import en from './locales/en'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt,
    en,
  },
})

export default i18n
