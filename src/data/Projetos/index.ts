import {
  t, type LocalizedText,
  type TableItem,
} from '../types'

import {imageUrl} from '@/utils/urls'

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
} from '@/data/Tech/index'

// ====================================
// DATA
// ====================================

type ProjectCategory = 'work' | 'personal' | 'lib' | 'game' | 'study' | 'other'
type ProjetoStatus = 'completed' | 'in-progress' | 'planned' | 'on-hold' | 'cancelled'
interface ProjetoBaseDTO extends TableItem {
  
  title: string
  summary: LocalizedText
  description: LocalizedText
  link?: string
  
  category: ProjectCategory
  tags: string[]
  images: string[]

  //client:
  //company:

  languages: LanguageDTO[]
  runtimes: RuntimeDTO[]
  databases: DatabaseDTO[]
  package_managers: PackageManagerDTO[]
  layers: LayerDTO[]
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

const ProjetoBase: ProjetoBaseDTO = {
  id: 'base',
  key: 'base',
  title: 'Project',
  summary: t('Project summary', 'Project summary'),
  description: t('Project description', 'Project description'),
  link: 'https://master-osvetnik.github.io/Leonardo-Cardoso-Caurin/',
  
  category: 'other',
  tags: [],
  images: [
    imageUrl('Projetos/default.jpg'),
  ],

  languages: [],
  runtimes: [],
  databases: [],
  package_managers: [],
  layers: [LAYERS.fullstack],
  framework: [],
  libraries: [],
  tools: [],
  cloudPlatforms: [],
  platforms: [],

  status: 'planned',

  featured: false,

}

const ProjetoBaseWix: ProjetoBaseDTO = { ...ProjetoBase,
  title: 'Wix App',
  summary: t('Aplicativo personalizado para Wix, integrando funcionalidades avançadas e design responsivo.', 'Custom application for Wix, integrating advanced features and responsive design.'),
  description: t('Desenvolvimento de aplicativo para Wix, utilizando Wix Velo para criar funcionalidades personalizadas e integração com APIs externas. O projeto envolveu design responsivo e otimização de performance.', 'Development of a Wix application using Wix Velo to create custom functionalities and integrate with external APIs. The project involved responsive design and performance optimization.'),
  link: 'https://www.wix.com/velo',
  
  category: 'work',
  tags: ['wix', 'velo', 'javascript', 'fullstack'],
  images: [imageUrl('Company/Wix/logo.png')],
  
  languages: [LANGUAGES.javascript],
  runtimes: [RUNTIMES.nodejs],
  databases: [DATABASES.wix],
  package_managers: [PACKAGE_MANAGERS.npm],
  layers: [LAYERS.fullstack],
  framework: [FRAMEWORKS.velo],
  libraries: [],
  tools: [TOOLS.wix],
  cloudPlatforms: [CLOUD_PLATFORMS.wix],
  platforms: [PLATFORMS.wix],

  status: 'completed',
}

export const PROJETOS: Record<string, ProjetoBaseDTO> = { 
  ignite_react: { ...ProjetoBase,

    title: 'Ignite React',
    summary: t('Projeto de estudo do curso Ignite React da Rocketseat, focado em desenvolvimento front-end com React.', 'Study project for the Ignite React course by Rocketseat, focused on front-end development with React.'),
    description: t('Desenvolvimento de um projeto de estudo para o curso Ignite React da Rocketseat. O projeto envolve a criação de uma aplicação front-end utilizando React, com foco em boas práticas de desenvolvimento, organização de código e consumo de APIs.', 'Development of a study project for the Ignite React course by Rocketseat. The project involves creating a front-end application using React, with a focus on good development practices, code organization and API consumption.'),
    link: '',

    category: 'personal',
    tags: ['react', 'ignite', 'study-project', 'architecture'],
    //images: [],

    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtimes: [RUNTIMES.browser],
    databases: [DATABASES.postgresql],
    framework: [FRAMEWORKS.react, FRAMEWORKS.fastify],
    libraries: [LIBRARIES.zod],
    tools: [TOOLS.vite],
    cloudPlatforms: [CLOUD_PLATFORMS.azure],
    platforms: [],

    status: 'in-progress',
    featured: true,

  },
  do: { ...ProjetoBase,
    title: 'Document Organizer',
    summary: t('Aplicativo para organizar documentos e arquivos de forma eficiente.', 'Application to organize documents and files efficiently.'),
    description: t('Desenvolvimento de um aplicativo para organização de documentos, utilizando tecnologias modernas para criar uma interface intuitiva e funcionalidades avançadas de gerenciamento de arquivos.', 'Development of an application for document organization, using modern technologies to create an intuitive interface and advanced file management features.'),
    link: '',

    category: 'personal',
    tags: ['document-organization', 'file-management', 'productivity'],
    //images: [],

    languages: [LANGUAGES.javascript, LANGUAGES.python],
    runtimes: [RUNTIMES.browser, RUNTIMES.nodejs],
    databases: [],
    framework: [FRAMEWORKS.vue, FRAMEWORKS.electron],
    libraries: [LIBRARIES.children_process],
    tools: [TOOLS.vite],
    cloudPlatforms: [],
    platforms: [],

    status: 'on-hold',

  },
  ownie: { ...ProjetoBaseWix,
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

    images: [
      imageUrl('Projetos/ownie/home-page.jpg'),
      imageUrl('Projetos/ownie/review.jpg'),
      imageUrl('Projetos/ownie/step.jpg'),
    ],

    status: 'completed',
    featured: true,
  },
  ecobooth: { ...ProjetoBaseWix,
    title: 'Ecobooth',
    link: 'https://ecobooth.com.br/',
    category: 'work',
  },
  romance_time: { ...ProjetoBase,
    title: 'Romance Time',
    summary: t('Jogo de romance, conectando pessoas com interesses semelhantes.', 'Dating app for romance lovers, connecting people with similar interests.'),
    description: t('Desenvolvimento de um aplicativo de encontros focado em pessoas que amam romance. O app conecta usuários com interesses semelhantes, oferecendo uma experiência personalizada e segura para encontrar o par perfeito.', 'Development of a dating app focused on people who love romance. The app connects users with similar interests, offering a personalized and secure experience to find the perfect match.'),
    link: '',

    category: 'game',
    tags: ['dating-app', 'romance', 'social'],
    images: [
      imageUrl('Projetos/romance-time/index.jpeg'),
      imageUrl('Projetos/romance-time/ingame-0.jpeg'),
      imageUrl('Projetos/romance-time/ingame-1.jpeg'),
      imageUrl('Projetos/romance-time/ingame-2.jpeg'),
      imageUrl('Projetos/romance-time/ingame-3.jpeg'),
      imageUrl('Projetos/romance-time/ingame-4.jpeg'),
      imageUrl('Projetos/romance-time/ingame-5.jpeg'),
      imageUrl('Projetos/romance-time/ingame-6.jpeg'),
      imageUrl('Projetos/romance-time/ingame-7.jpeg'),
      imageUrl('Projetos/romance-time/ingame-8.jpeg'),
    ],

    languages: [LANGUAGES.python],
    framework: [FRAMEWORKS.renpy],


    status: 'on-hold',
    featured: true,

  },
  cv: { ...ProjetoBase,
    title: 'Meu Currículo',
    summary: t('Meu currículo online, destacando minha experiência, habilidades e projetos de forma interativa.', 'My online resume, showcasing my experience, skills and projects in an interactive way.'),
    description: t('Desenvolvimento de um currículo online utilizando Vue.js e TypeScript. O projeto apresenta uma interface moderna e responsiva, destacando minha experiência profissional, habilidades técnicas e projetos de forma interativa.', 'Development of an online resume using Vue.js and TypeScript. The project features a modern and responsive interface, highlighting my professional experience, technical skills and projects in an interactive way.'),
    link: 'https://leonardocaurin.github.io/MeuCurriculo/',
    
    tags: ['vue', 'typescript', 'resume', 'personal-project'],
    //images: [],

    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtimes: [RUNTIMES.browser, RUNTIMES.nodejs],
    databases: [],
    framework: [FRAMEWORKS.vue],
    libraries: [],
    tools: [TOOLS.vite, TOOLS.primevue],
    cloudPlatforms: [CLOUD_PLATFORMS.githubPages],
    platforms: [],

    status: 'in-progress',
    featured: true,

  },
}

export type ProjetoDTO = ProjetoBaseDTO | undefined 

class helper{
  helper() {}
  static getProjectById(key: string): ProjetoDTO {
    const project = PROJETOS[key]
    if (!project) return undefined
    return { ...project, key }
  }
  static getAllProjects(): ProjetoDTO[] {
    return Object.entries(PROJETOS).map(([key, value]) => ({
      ...value,
      key,
    }))
  }
}

export default helper
