
import {
  type LocalizedText,
  type TableItem,
} from '../types'

import { LAYERS, type LayerDTO } from './Layers'
import { LANGUAGES, type LanguageDTO } from './Languages'

// ====================================
// DATA: PLATFORMS
// ====================================

interface PlatformBaseDTO extends TableItem {
  nickname: string
  languages: LanguageDTO[]
  layer: LayerDTO
  type: 'saas' | 'open-source'
  codeType: 'full-code' | 'low-code' | 'no-code'
  description?: LocalizedText
  icon?: string
}

export const PLATFORMS: Record<string, PlatformBaseDTO> = {
  wix: {
    key: 'wix',
    id: 'wix',
    nickname: 'Wix',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    type: 'saas',
    codeType: "full-code",
  },
  shopify: {
    key: 'shopify',
    id: 'shopify',
    nickname: 'Shopify',
    languages: [LANGUAGES.liquid, LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    type: "open-source",
    codeType: "low-code",
  },
  wordpress: {
    key: 'wordpress',
    id: 'wordpress',
    nickname: 'WordPress',
    languages: [LANGUAGES.php, LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    type: "open-source",
    codeType: "full-code",
    icon: 'devicon-wordpress-plain colored',
  }
} as const

export type PlatformDTO = PlatformBaseDTO  | undefined