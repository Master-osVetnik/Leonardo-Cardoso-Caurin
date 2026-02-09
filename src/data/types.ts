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

// ====================================
// FILTER TYPES
// ====================================

export interface TableItem {
  key: string
  id: string
}

/** Filtro genérico para listas. null = "sem", undefined = "todos" */
export interface ListFilter {
    search?: string;
    featured?: boolean;
    language?: string | null;
    runtime?: string | null;
    database?: string | null;
    framework?: string | null;
    library?: string | null;
    tool?: string | null;
    cloudPlatform?: string | null;
    plataform?: string | null;
}
