import type { LocalizedText } from '../types'
import { t } from '../types'

// ====================================
// TYPES
// ====================================

export interface Projeto {
  id: string
  title: string
  summary: LocalizedText
  description: LocalizedText
  image?: string
  link?: string
  clientId?: string   // ref to CLIENTES key
  companyId?: string  // ref to EMPRESAS key
  technologies: string[] // tech IDs from Tecnologias
  startDate?: string
  endDate?: string
  featured?: boolean
}

// ====================================
// DATA
// ====================================

export const PROJETOS: Record<string, Projeto> = {
  ownie: {
    id: 'ownie',
    title: 'Ownie',
    summary: t(
      'Loja virtual para marca de roupas e acessórios personalizados.',
      'Online store for personalized clothing and accessories brand.'
    ),
    description: t(
      'Desenvolvimento de site e loja virtual para a marca Ownie, especializada em roupas e acessórios personalizados. O projeto envolveu a criação de uma plataforma de comércio eletrônico intuitiva e responsiva, permitindo aos clientes personalizar seus produtos de forma fácil e rápida. O site foi desenvolvido utilizando tecnologias modernas, garantindo uma experiência de compra fluida e segura.',
      'Website and online store development for the Ownie brand, specialized in personalized clothing and accessories. The project involved creating an intuitive and responsive e-commerce platform, allowing customers to customize their products easily and quickly. The site was developed using modern technologies, ensuring a smooth and secure shopping experience.'
    ),
    link: 'https://ownie.com.br/',
    clientId: 'ownie',
    companyId: 'coest',
    technologies: ['html', 'css', 'javascript', 'typescript', 'vue', 'nodejs'],
    featured: true,
  },
}

// ====================================
// HELPERS
// ====================================

export function getFeaturedProjects(): Projeto[] {
  return Object.values(PROJETOS).filter((p) => p.featured)
}

export function getProjectsByTech(techId: string): Projeto[] {
  return Object.values(PROJETOS).filter((p) => p.technologies.includes(techId))
}

export function getProjectsByClient(clientId: string): Projeto[] {
  return Object.values(PROJETOS).filter((p) => p.clientId === clientId)
}

export function getProjectsByCompany(companyId: string): Projeto[] {
  return Object.values(PROJETOS).filter((p) => p.companyId === companyId)
}
