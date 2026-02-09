import { createI18n } from 'vue-i18n'
import pt from './locales/pt'
import en from './locales/en'

/**
 * Detecta a localização do usuário
 * Se for do Brasil, usa 'pt', senão 'en' como padrão
 */
function detectUserLocale(): string {
  // Tenta pegar do localStorage primeiro (preferência do usuário)
  const stored = localStorage.getItem('user-locale')
  if (stored && (stored === 'pt' || stored === 'en')) {
    return stored
  }

  // Detecta pelo navegador
  const browserLang = navigator.language || (navigator as any).userLanguage
  
  // Se for pt-BR ou qualquer variante de português, usa 'pt'
  if (browserLang.toLowerCase().startsWith('pt')) {
    return 'pt'
  }
  
  // Padrão: inglês
  return 'en'
}

const initialLocale = detectUserLocale()

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages: {
    pt,
    en,
  },
})

// Salva a localização detectada no localStorage
localStorage.setItem('user-locale', initialLocale)

export default i18n
