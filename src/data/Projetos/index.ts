import type { LocalizedText } from '../types'
import { t } from '../types'

import { getTableData } from '@/helpers/Tables'

import {
  LANGUAGES, type LanguageDTO,
  RUNTIMES, type RuntimeDTO,
  DATABASES, type DatabaseDTO,
  PACKAGE_MANAGERS, type PackageManagerDTO,
  LAYERS, type LayerDTO,
  FRAMEWORKS, type FrameworkDTO,
  LIBRARIES, type LibraryDTO,
  CLOUD_PLATFORMS, type CloudPlatformDTO,
  TOOLS, type ToolDTO,
  PLATFORMS, type PlatformDTO,
} from '@/data/Tecnologias/index'

// ====================================
// DATA
// ====================================

type ProjetoStatus = 'completed' | 'in-progress' | 'planned' | 'on-hold' | 'cancelled'
interface ProjetoBaseDTO {
  
  title: string
  summary: LocalizedText
  description: LocalizedText
  link?: string
  
  tags: string[]
  images: string[]

  //client:
  //company:

  languages: LanguageDTO[]
  runtimes: RuntimeDTO[]
  databases: DatabaseDTO[]
  framework?: FrameworkDTO[]
  libraries: LibraryDTO[]
  tools: ToolDTO[]
  cloudPlatforms: CloudPlatformDTO[]
  platforms: PlatformDTO[]

  startDate?: string
  endDate?: string
  
  status: ProjetoStatus

  featured?: boolean
}

const ProjetoWix: ProjetoBaseDTO = {
  title: 'Wix App',
  summary: t('Aplicativo personalizado para Wix, integrando funcionalidades avançadas e design responsivo.', 'Custom application for Wix, integrating advanced features and responsive design.'),
  description: t('Desenvolvimento de aplicativo para Wix, utilizando Wix Velo para criar funcionalidades personalizadas e integração com APIs externas. O projeto envolveu design responsivo e otimização de performance.', 'Development of a Wix application using Wix Velo to create custom functionalities and integrate with external APIs. The project involved responsive design and performance optimization.'),
  link: 'https://www.wix.com/velo',
  
  tags: ['wix', 'velo', 'javascript', 'fullstack'],
  images: [],
  
  languages: [LANGUAGES.javascript],
  runtimes: [RUNTIMES.nodejs],
  databases: [DATABASES.wixData],
  framework: [FRAMEWORKS.wixVelo],
  libraries: [],
  tools: [TOOLS.wixVelo],
  cloudPlatforms: [CLOUD_PLATFORMS.wix],
  platforms: [PLATFORMS.wix],

  status: 'completed',
}

export const PROJETOS: Record<string, ProjetoBaseDTO> = {
  cv: {
    title: 'Meu Currículo',
    summary: t('Meu currículo online, destacando minha experiência, habilidades e projetos de forma interativa.', 'My online resume, showcasing my experience, skills and projects in an interactive way.'),
    description: t('Desenvolvimento de um currículo online utilizando Vue.js e TypeScript. O projeto apresenta uma interface moderna e responsiva, destacando minha experiência profissional, habilidades técnicas e projetos de forma interativa.', 'Development of an online resume using Vue.js and TypeScript. The project features a modern and responsive interface, highlighting my professional experience, technical skills and projects in an interactive way.'),
    link: 'https://leonardocaurin.github.io/MeuCurriculo/',
    
    tags: ['vue', 'typescript', 'resume', 'personal-project'],
    images: [],

    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtimes: [RUNTIMES.browser, RUNTIMES.nodejs],
    databases: [],
    framework: [FRAMEWORKS.vue],
    libraries: [],
    tools: [TOOLS.vite, TOOLS.primevue],
    cloudPlatforms: [CLOUD_PLATFORMS.githubPages],
    platforms: [],

    status: 'in-progress'

  },
  ignite_react: {

    title: 'Ignite React',
    summary: t('Projeto de estudo do curso Ignite React da Rocketseat, focado em desenvolvimento front-end com React.', 'Study project for the Ignite React course by Rocketseat, focused on front-end development with React.'),
    description: t('Desenvolvimento de um projeto de estudo para o curso Ignite React da Rocketseat. O projeto envolve a criação de uma aplicação front-end utilizando React, com foco em boas práticas de desenvolvimento, organização de código e consumo de APIs.', 'Development of a study project for the Ignite React course by Rocketseat. The project involves creating a front-end application using React, with a focus on good development practices, code organization and API consumption.'),
    link: '',

    tags: ['react', 'ignite', 'study-project', 'architecture'],
    images: [],

    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtimes: [RUNTIMES.browser],
    databases: [DATABASES.postgresql],
    framework: [FRAMEWORKS.react, FRAMEWORKS.fastify],
    libraries: [LIBRARIES.zod],
    tools: [TOOLS.vite],
    cloudPlatforms: [CLOUD_PLATFORMS.azure],
    platforms: [],

    status: 'in-progress'

  },
  do: {
    title: 'Document Organizer',
    summary: t('Aplicativo para organizar documentos e arquivos de forma eficiente.', 'Application to organize documents and files efficiently.'),
    description: t('Desenvolvimento de um aplicativo para organização de documentos, utilizando tecnologias modernas para criar uma interface intuitiva e funcionalidades avançadas de gerenciamento de arquivos.', 'Development of an application for document organization, using modern technologies to create an intuitive interface and advanced file management features.'),
    link: '',

    tags: ['document-organization', 'file-management', 'productivity'],
    images: [],

    languages: [LANGUAGES.javascript, LANGUAGES.typescript, LANGUAGES.python],
    runtimes: [RUNTIMES.browser, RUNTIMES.nodejs],
    databases: [],
    framework: [FRAMEWORKS.vue, FRAMEWORKS.electron],
    libraries: [LIBRARIES.child_process],
    tools: [TOOLS.vite],
    cloudPlatforms: [],
    platforms: [],

    status: 'on-hold'

  },
  ownie: { ...ProjetoWix,
    title: 'Ownie',
    summary: t(
      'Plataforma de roupas personalizadas sob medida com tecidos premium e opções de customização.',
      'Custom-made clothing platform with premium fabrics and personalization options.'
    ),
    description: t(
      'Desenvolvimento de plataforma de e-commerce para personalização de roupas. Permitindo que clientes personalizem calças e camisas online com tecidos premium, cortes precisos e múltiplas opções. Integração com sistema de carrinho de compras e checkout seguro.',
      'E-commerce platform for custom clothing. Customers can personalize pants and shirts online with premium fabrics and precise cuts. Integrated shopping cart and secure checkout system.'
    ),
    link: 'https://ownie.com.br/',

    images: [],

    featured: true,
    status: 'completed',
  },
  ecobooth: { ...ProjetoWix,
    title: 'Ecobooth',
    link: 'https://ecobooth.com.br/',
  }
}

export type ProjetoDTO = ProjetoBaseDTO | undefined 

class helper{
  helper() {}
  static getProjectById(key: string) {
    return PROJETOS[key] as ProjetoDTO
  }
  static getAllProjects() {
    return getTableData(PROJETOS) as ProjetoDTO[]
  }
}

export default helper
