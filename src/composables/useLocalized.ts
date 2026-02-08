import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import type { LocalizedText } from '@/data/types'

/**
 * Composable to resolve LocalizedText based on current locale
 */
export function useLocalized() {
  const { locale } = useI18n()

  const resolveText = (text: LocalizedText | string | undefined): string => {
    if (!text) return ''
    if (typeof text === 'string') return text
    return text[locale.value as keyof LocalizedText] || text.pt
  }

  const currentLocale = computed(() => locale.value)

  return {
    resolveText,
    currentLocale,
  }
}
