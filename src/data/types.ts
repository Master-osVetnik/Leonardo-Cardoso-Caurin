// ====================================
// SHARED TYPES
// ====================================

/** Bilingual text support for PT/EN */
export interface LocalizedText {
  pt: string
  en: string
}

/** Helper to create localized text (PT base, EN optional) */
export function t(pt: string, en: string = pt): LocalizedText {
  return { pt, en }
}

/** Icon identifier (PrimeIcons class name) */
export type Icon = string
