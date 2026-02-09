
import {
  t, type LocalizedText,
  type TableItem,
} from '../types'


// ====================================
// DATA: AREAS
// ====================================


interface CategorBaseDTO extends TableItem {
    title: LocalizedText,
}

export const CATEGORY: Record<string, CategorBaseDTO> = {
  marketingDigital: {
    key: 'marketingDigital',
    id: 'marketingDigital',
    title: t('Marketing Digital', 'Digital Marketing'),
  },
  contabilidade: {
    key: 'contabilidade', 
    id: 'contabilidade',
    title: t('Contabilidade', 'Accounting'),
  },
  publicidade: {
    key: 'publicidade',
    id: 'publicidade',
    title: t('Publicidade', 'Advertising'),
  },
  assistenciaTecnica: {
    key: 'assistenciaTecnica',
    id: 'assistenciaTecnica',
    title: t('Assistência Técnica', 'Technical Support'),
  },
  mecanica: {
    key: 'mecanica',
    id: 'mecanica',
    title: t('Mecânica', 'Mechanics'),
  },
  restaurante: {
    key: 'restaurante',
    id: 'restaurante',
    title: t('Restaurante', 'Restaurant'),
  },
  educacao: {
    key: 'educacao',
    id: 'educacao',
    title: t('Educação', 'Education'),
  },
}

export type CategoryDTO = CategorBaseDTO | undefined
