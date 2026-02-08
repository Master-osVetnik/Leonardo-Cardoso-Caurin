import type { LocalizedText } from './types'
import { t } from './types'

// ====================================
// TYPES
// ====================================

export interface Area {
  id: string
  name: LocalizedText
}

export interface Empresa {
  id: string
  title: string
  area: string // Area id
  cnpj?: string
  site?: string
  linkedin?: string
  logo?: string
  description?: LocalizedText
}

export interface Cliente {
  id: string
  title: string
  logo?: string
  site?: string
  description?: LocalizedText
}

// ====================================
// DATA: AREAS
// ====================================

export const AREAS: Record<string, Area> = {
  marketingDigital: {
    id: 'marketingDigital',
    name: t('Marketing Digital', 'Digital Marketing'),
  },
  contabilidade: {
    id: 'contabilidade',
    name: t('Contabilidade', 'Accounting'),
  },
  publicidade: {
    id: 'publicidade',
    name: t('Publicidade', 'Advertising'),
  },
  assistenciaTecnica: {
    id: 'assistenciaTecnica',
    name: t('Assistência Técnica', 'Technical Support'),
  },
  mecanica: {
    id: 'mecanica',
    name: t('Mecânica', 'Mechanics'),
  },
  restaurante: {
    id: 'restaurante',
    name: t('Restaurante', 'Restaurant'),
  },
  educacao: {
    id: 'educacao',
    name: t('Educação', 'Education'),
  },
}

// ====================================
// DATA: EMPRESAS
// ====================================

export const EMPRESAS: Record<string, Empresa> = {
  coest: {
    id: 'coest',
    title: 'Coest Consultoria',
    area: 'marketingDigital',
    cnpj: '00.000.000/0000-00',
    site: 'https://coest.com.br/',
    linkedin: '',
    description: t(
      'Agência de marketing digital focada em soluções web e presença online.',
      'Digital marketing agency focused on web solutions and online presence.'
    ),
  },
  vila: {
    id: 'vila',
    title: 'Vila Contabil',
    area: 'contabilidade',
    cnpj: '00.000.000/0000-00',
    site: 'https://vilacontabil.com.br/',
    linkedin: '',
    description: t(
      'Escritório de contabilidade com foco em empresas de pequeno e médio porte.',
      'Accounting firm focused on small and medium businesses.'
    ),
  },
  mind: {
    id: 'mind',
    title: 'Mindvertising',
    area: 'marketingDigital',
    cnpj: '00.000.000/0000-00',
    site: 'https://mindvertising.com.br/',
    linkedin: '',
    description: t(
      'Agência de publicidade e marketing digital criativa.',
      'Creative advertising and digital marketing agency.'
    ),
  },
}

// ====================================
// DATA: CLIENTES
// ====================================

export const CLIENTES: Record<string, Cliente> = {
  coest: {
    id: 'coest',
    title: 'Coest Consultoria',
    site: 'https://coest.com.br/',
  },
  cardio: {
    id: 'cardio',
    title: 'Reabilita Cardio',
  },
  ecobooth: {
    id: 'ecobooth',
    title: 'Ecobooth',
  },
  ownie: {
    id: 'ownie',
    title: 'Ownie',
  },
  asic: {
    id: 'asic',
    title: 'Asic Service',
  },
  cantautora: {
    id: 'cantautora',
    title: 'Cantautora',
  },
  reiJaleco: {
    id: 'reiJaleco',
    title: 'Rei Jaleco',
  },
  prestto: {
    id: 'prestto',
    title: 'Prestto Informatica',
  },
  talk: {
    id: 'talk',
    title: 'Talk n Tank',
  },
  renan: {
    id: 'renan',
    title: 'Renan Imoveis',
  },
  ecoVerde: {
    id: 'ecoVerde',
    title: 'Eco Verde',
  },
  vincci: {
    id: 'vincci',
    title: 'Vincci Imoveis',
  },
  galardo: {
    id: 'galardo',
    title: 'Otica Galardo',
  },
}