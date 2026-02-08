import { t, type LocalizedText } from '../types'

import { getTableData } from '@/helpers/Tables'

// ====================================
// DATA: LANGUAGES
// ====================================

interface LanguageBaseDTO {
  nickname: string
  type: 'markup' | 'programming' | 'stylesheet',
  description: LocalizedText
  icon?: string
}

export const LANGUAGES: Record<string, LanguageBaseDTO> = {
  html: {
    nickname: 'HTML',
    type: 'markup',
    description: t(
      'Linguagem de marcação para estruturar conteúdo web.',
      'Markup language for structuring web content.'
    ),
    icon: 'pi pi-code',
  },
  css: {
    nickname: 'CSS',
    type: 'stylesheet',
    description: t(
      'Linguagem de estilo para controlar aparência de páginas web.',
      'Stylesheet language for controlling web page appearance.'
    ),
    icon: 'pi pi-palette',
  },
  javascript: {
    nickname: 'JavaScript',
    type: 'programming',
    description: t(
      'Linguagem de programação para web, tanto client quanto server-side.',
      'Programming language for web, both client and server-side.'
    ),
    icon: 'pi pi-code',
  },
  typescript: {
    nickname: 'TypeScript',
    type: 'programming',
    description: t(
      'Superset de JavaScript com tipagem estática.',
      'JavaScript superset with static typing.'
    ),
    icon: 'pi pi-code',
  },
  python: {
    nickname: 'Python',
    type: 'programming',
    description: t(
      'Linguagem de alto nível para web, data science, automação.',
      'High-level language for web, data science, automation.'
    ),
    icon: 'pi pi-desktop',
  },
  php: {
    nickname: 'PHP',
    type: 'programming',
    description: t(
      'Linguagem server-side para desenvolvimento web dinâmico.',
      'Server-side language for dynamic web development.'
    ),
    icon: 'pi pi-globe',
  },
  c: {
    nickname: 'C',
    type: 'programming',
    description: t(
      'Linguagem de baixo nível para sistemas e alta performance.',
      'Low-level language for systems and high performance.'
    ),
    icon: 'pi pi-microchip',
  },
  cpp: {
    nickname: 'C++',
    type: 'programming',
    description: t(
      'Extensão do C com programação orientada a objetos.',
      'C extension with object-oriented programming.'
    ),
    icon: 'pi pi-microchip',
  },
  csharp: {
    nickname: 'C#',
    type: 'programming',
    description: t(
      'Linguagem da Microsoft para plataforma .NET.',
      'Microsoft language for the .NET platform.'
    ),
    icon: 'pi pi-code',
  },
  java: {
    nickname: 'Java',
    type: 'programming',
    description: t(
      'Linguagem enterprise para aplicações multiplataforma.',
      'Enterprise language for cross-platform applications.'
    ),
    icon: 'pi pi-code',
  },
  go: {
    nickname: 'Go',
    type: 'programming',
    description: t(
      'Linguagem do Google focada em concorrência e performance.',
      'Google language focused on concurrency and performance.'
    ),
    icon: 'pi pi-bolt',
  },
  rust: {
    nickname: 'Rust',
    type: 'programming',
    description: t(
      'Linguagem de sistemas com foco em segurança de memória.',
      'Systems language focused on memory safety.'
    ),
    icon: 'pi pi-shield',
  },
  ruby: {
    nickname: 'Ruby',
    type: 'programming',
    description: t(
      'Linguagem dinâmica focada em simplicidade e produtividade.',
      'Dynamic language focused on simplicity and productivity.'
    ),
    icon: 'pi pi-sparkles',
  },
  r: {
    nickname: 'R',
    type: 'programming',
    description: t(
      'Linguagem estatística para análise de dados.',
      'Statistical language for data analysis.'
    ),
    icon: 'pi pi-chart-bar',
  },
  sql: {
    nickname: 'SQL',
    type: 'programming',
    description: t(
      'Linguagem para gerenciamento de bancos de dados relacionais.',
      'Language for relational database management.'
    ),
    icon: 'pi pi-database',
  },
} as const

export type LanguageDTO = LanguageBaseDTO | undefined

// ====================================
// DATA: RUNTIMES
// ====================================

interface RuntimeBaseDTO {
  nickname: string
  tags: string[]
  languages: LanguageDTO[],
  description: LocalizedText
  icon?: string
}

export const RUNTIMES: Record<string, RuntimeBaseDTO> = {
  browser: {
    nickname: 'Browser',
    tags: ['client-side', 'web', 'mobile'],
    languages: [LANGUAGES.html, LANGUAGES.css, LANGUAGES.javascript, LANGUAGES.php],
    description: t(
      'Ambiente de execução client-side no navegador.',
      'Client-side runtime environment in the browser.'
    ),
    icon: 'pi pi-globe',
  },
  nodejs: {
    nickname: 'Node.js',
    tags: ['server-side', 'api', 'backend'],
    languages: [LANGUAGES.javascript],
    description: t(
      'Runtime JavaScript server-side baseado no V8.',
      'Server-side JavaScript runtime based on V8.'
    ),
    icon: 'pi pi-server',
  },
  deno: {
    nickname: 'Deno',
    tags: ['server-side', 'api', 'secure'],
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    description: t(
      'Runtime moderno JS/TS com segurança e TypeScript nativo.',
      'Modern JS/TS runtime with security and native TypeScript.'
    ),
    icon: 'pi pi-shield',
  },
  bun: {
    nickname: 'Bun',
    tags: ['server-side', 'api', 'fast'],
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    description: t(
      'Runtime ultra-rápido all-in-one para JS/TS.',
      'Ultra-fast all-in-one JS/TS runtime.'
    ),
    icon: 'pi pi-bolt',
  },
  python: {
    nickname: 'Python Runtime',
    tags: ['server-side', 'data-science', 'automation'],
    languages: [LANGUAGES.python],
    description: t(
      'Interpretador Python para múltiplos propósitos.',
      'Multi-purpose Python interpreter.'
    ),
    icon: 'pi pi-desktop',
  },
  php: {
    nickname: 'PHP Runtime',
    tags: ['server-side', 'web'],
    languages: [LANGUAGES.php],
    description: t(
      'Interpretador PHP para aplicações web.',
      'PHP interpreter for web applications.'
    ),
    icon: 'pi pi-desktop',
  },
  jvm: {
    nickname: 'JVM',
    tags: ['server-side', 'enterprise'],
    languages: [LANGUAGES.java],
    description: t(
      'Java Virtual Machine para executar bytecode Java.',
      'Java Virtual Machine for running Java bytecode.'
    ),
    icon: 'pi pi-code',
  },
  dotnet: {
    nickname: '.NET Runtime',
    tags: ['server-side', 'enterprise', 'windows'],
    languages: [LANGUAGES.csharp],
    description: t(
      'Plataforma Microsoft para aplicações multiplataforma.',
      'Microsoft platform for cross-platform applications.'
    ),
    icon: 'pi pi-microsoft',
  },
  wix: {
    nickname: 'Wix Runtime',
    tags: ['server-side', 'web', 'proprietary'],
    languages: [LANGUAGES.javascript],
    description: t(
      'Runtime proprietário para aplicações web no Wix.',
      'Proprietary runtime for web applications on Wix.'
    ),
    icon: 'pi pi-wix',
  }
} as const

export type RuntimeDTO = RuntimeBaseDTO | undefined

// ====================================
// DATA: DATABASES
// ====================================

interface DatabaseTypeBaseDTO {
  nickname: string
}

export const DatabaseType: Record<string, DatabaseTypeBaseDTO> = {
  sql: {
    nickname: 'SQL',
  },
  nosql: {
    nickname: 'NoSQL',
  }
}

type DatabaseTypeDTO = DatabaseTypeBaseDTO | undefined

interface DatabaseBaseDTO {
  nickname: string
  type: DatabaseTypeDTO
  category: 'relational' | 'document' | 'key-value' | 'graph' | 'columnar'
  description: LocalizedText
  icon?: string
}

export const DATABASES: Record<string, DatabaseBaseDTO> = {
  postgresql: {
    nickname: 'PostgreSQL',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'RDBMS avançado, robusto e com recursos avançados.',
      'Advanced, robust RDBMS with advanced features.'
    ),
    icon: 'pi pi-database',
  },
  mysql: {
    nickname: 'MySQL',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'RDBMS popular, confiável e de fácil uso.',
      'Popular, reliable and easy-to-use RDBMS.'
    ),
    icon: 'pi pi-database',
  },
  mongodb: {
    nickname: 'MongoDB',
    type: DatabaseType.nosql,
    category: 'document',
    description: t(
      'Banco de dados orientado a documentos (JSON).',
      'Document-oriented database (JSON).'
    ),
    icon: 'pi pi-database',
  },
  redis: {
    nickname: 'Redis',
    type: DatabaseType.nosql,
    category: 'key-value',
    description: t(
      'Banco in-memory para cache e filas.',
      'In-memory database for caching and queues.'
    ),
    icon: 'pi pi-bolt',
  },
  sqlite: {
    nickname: 'SQLite',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'Banco de dados embutido, sem servidor.',
      'Embedded database, serverless.'
    ),
    icon: 'pi pi-database',
  },
  mariadb: {
    nickname: 'MariaDB',
    type: DatabaseType.sql,
    category: 'relational',
    description: t(
      'Fork do MySQL com melhorias de performance.',
      'MySQL fork with performance improvements.'
    ),
    icon: 'pi pi-database',
  },
  cassandra: {
    nickname: 'Cassandra',
    type: DatabaseType.nosql,
    category: 'columnar',
    description: t(
      'Banco distribuído para grandes volumes de dados.',
      'Distributed database for large data volumes.'
    ),
    icon: 'pi pi-database',
  },
  neo4j: {
    nickname: 'Neo4j',
    type: DatabaseType.nosql,
    category: 'graph',
    description: t(
      'Banco de dados de grafos para relacionamentos complexos.',
      'Graph database for complex relationships.'
    ),
    icon: 'pi pi-sitemap',
  },
  wix: {
    nickname: 'Wix Data',
    type: DatabaseType.nosql,
    category: 'document',
    description: t(
      'Banco de dados orientado a documentos no Wix.',
      'Document-oriented database on Wix.'
    ),
    icon: 'pi pi-database',
  }
} as const

export type DatabaseDTO = DatabaseBaseDTO | undefined

// ====================================
// DATA: PACKAGE MANAGERS
// ====================================

interface PackageManagerBaseDTO {
  nickname: string
  languages: LanguageDTO[]
  runtime: RuntimeDTO
  description: LocalizedText
  icon?: string
}

export const PACKAGE_MANAGERS: Record<string, PackageManagerBaseDTO> = {
  npm: {
    nickname: 'npm',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.nodejs,
    description: t('Gerenciador de pacotes padrão do Node.js.', 'Default Node.js package manager.'),
    icon: 'pi pi-box',
  },
  yarn: {
    nickname: 'Yarn',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.nodejs,
    description: t('Gerenciador rápido e confiável (Facebook).', 'Fast and reliable manager (Facebook).'),
    icon: 'pi pi-box',
  },
  pnpm: {
    nickname: 'pnpm',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.nodejs,
    description: t('Gerenciador eficiente que economiza espaço.', 'Efficient space-saving manager.'),
    icon: 'pi pi-box',
  },
  bun: {
    nickname: 'Bun PM',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.bun,
    description: t('Gerenciador integrado ao runtime Bun, ultra-rápido.', 'Bun runtime integrated manager, ultra-fast.'),
    icon: 'pi pi-bolt',
  },
  pip: {
    nickname: 'pip',
    languages: [LANGUAGES.python],
    runtime: RUNTIMES.python,
    description: t('Gerenciador de pacotes padrão do Python.', 'Default Python package manager.'),
    icon: 'pi pi-box',
  },
  composer: {
    nickname: 'Composer',
    languages: [LANGUAGES.php],
    runtime: RUNTIMES.php,
    description: t('Gerenciador de dependências para PHP.', 'PHP dependency manager.'),
    icon: 'pi pi-box',
  },
  nuget: {
    nickname: 'NuGet',
    languages: [LANGUAGES.csharp],
    runtime: RUNTIMES.dotnet,
    description: t('Gerenciador de pacotes para .NET.', '.NET package manager.'),
    icon: 'pi pi-box',
  },
} as const

export type PackageManagerDTO = PackageManagerBaseDTO | undefined

// ====================================
// DATA: LAYERS
// ====================================

interface LayerBaseDTO {
  nickname: string
  tags: string[]
  description: LocalizedText
  icon?: string
  color?: string
}

export const LAYERS: Record<string, LayerBaseDTO> = {
  frontend: {
    nickname: 'Frontend',
    tags: ['ui', 'ux', 'client-side', 'web', 'mobile'],
    description: t('Interface do usuário e interação.', 'User interface and interaction.'),
    icon: 'pi pi-desktop',
    color: '#00F0FF',
  },
  backend: {
    nickname: 'Backend',
    tags: ['server-side', 'api', 'database', 'auth'],
    description: t('Lógica de negócios e processamento de dados.', 'Business logic and data processing.'),
    icon: 'pi pi-server',
    color: '#B026FF',
  },
  fullstack: {
    nickname: 'Full-stack',
    tags: ['frontend', 'backend', 'ui', 'api'],
    description: t('Desenvolvimento completo frontend + backend.', 'Complete frontend + backend development.'),
    icon: 'pi pi-objects-column',
    color: '#FF006E',
  },
  devops: {
    nickname: 'DevOps',
    tags: ['ci-cd', 'cloud', 'infrastructure', 'automation'],
    description: t('Integração de desenvolvimento e operações.', 'Development and operations integration.'),
    icon: 'pi pi-cog',
    color: '#FFD700',
  },
  database: {
    nickname: 'Database',
    tags: ['sql', 'nosql', 'design', 'modeling'],
    description: t('Gerenciamento e arquitetura de dados.', 'Data management and architecture.'),
    icon: 'pi pi-database',
    color: '#4CAF50',
  },
  datascience: {
    nickname: 'Data Science',
    tags: ['ml', 'ai', 'analytics', 'python', 'r'],
    description: t('Análise de dados e aprendizado de máquina.', 'Data analysis and machine learning.'),
    icon: 'pi pi-chart-line',
    color: '#FF9800',
  },
} as const

export type LayerDTO = LayerBaseDTO | undefined

// ====================================
// DATA: FRAMEWORKS
// ====================================

interface FrameworkBaseDTO {
  nickname: string
  languages: LanguageDTO[]
  layer: LayerDTO
  category: 'framework' | 'meta-framework'
  description: LocalizedText
  icon?: string
}

export const FRAMEWORKS: Record<string, FrameworkBaseDTO> = {
  angular: {
    nickname: 'Angular',
    languages: [LANGUAGES.html, LANGUAGES.css, LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Framework completo do Google para SPAs.', 'Google\'s complete framework for SPAs.'),
    icon: 'pi pi-code',
  },
  react: {
    nickname: 'React',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Biblioteca do Facebook para UIs (tratada como framework).', 'Facebook library for UIs (treated as framework).'),
    icon: 'pi pi-code',
  },
  vue: {
    nickname: 'Vue.js',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Framework progressivo para UIs.', 'Progressive framework for UIs.'),
    icon: 'pi pi-code',
  },
  electron: {
    nickname: 'Electron',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'framework',
    description: t('Framework para apps desktop com tecnologias web.', 'Framework for desktop apps using web technologies.'),
    icon: 'pi pi-desktop',
  },
  svelte: {
    nickname: 'Svelte',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Framework que compila para JavaScript puro.', 'Framework that compiles to vanilla JavaScript.'),
    icon: 'pi pi-bolt',
  },
  nextjs: {
    nickname: 'Next.js',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'meta-framework',
    description: t('Meta-framework React para SSR e SSG.', 'React meta-framework for SSR and SSG.'),
    icon: 'pi pi-bolt',
  },
  nuxt: {
    nickname: 'Nuxt',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    category: 'meta-framework',
    description: t('Meta-framework Vue para SSR e SSG.', 'Vue meta-framework for SSR and SSG.'),
    icon: 'pi pi-bolt',
  },
  sveltekit: {
    nickname: 'SvelteKit',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    category: 'meta-framework',
    description: t('Meta-framework Svelte para aplicações fullstack.', 'Svelte meta-framework for fullstack apps.'),
    icon: 'pi pi-bolt',
  },
  fastify: {
    nickname: 'Fastify',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework web Node.js ultra-rápido.', 'Ultra-fast Node.js web framework.'),
    icon: 'pi pi-bolt',
  },
  express: {
    nickname: 'Express',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework minimalista para Node.js.', 'Minimalist framework for Node.js.'),
    icon: 'pi pi-server',
  },
  nestjs: {
    nickname: 'NestJS',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework enterprise para Node.js (inspirado no Angular).', 'Enterprise Node.js framework (Angular-inspired).'),
    icon: 'pi pi-code',
  },
  django: {
    nickname: 'Django',
    languages: [LANGUAGES.python],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework Python batteries-included para web.', 'Batteries-included Python web framework.'),
    icon: 'pi pi-globe',
  },
  flask: {
    nickname: 'Flask',
    languages: [LANGUAGES.python],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Micro-framework Python flexível.', 'Flexible Python micro-framework.'),
    icon: 'pi pi-code',
  },
  laravel: {
    nickname: 'Laravel',
    languages: [LANGUAGES.php],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework PHP elegante para aplicações web.', 'Elegant PHP web application framework.'),
    icon: 'pi pi-globe',
  },
  rails: {
    nickname: 'Ruby on Rails',
    languages: [LANGUAGES.ruby],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework Ruby convention-over-configuration.', 'Ruby convention-over-configuration framework.'),
    icon: 'pi pi-code',
  },
  aspnet: {
    nickname: 'ASP.NET Core',
    languages: [LANGUAGES.csharp],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework Microsoft para aplicações web.', 'Microsoft web application framework.'),
    icon: 'pi pi-microsoft',
  },
  velo: {
    nickname: 'Velo by Wix',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t(
      'Framework serverless para desenvolvimento no Wix.',
      'Serverless framework for development on Wix.'
    ),
    icon: 'pi pi-wix',
  }
} as const

export type FrameworkDTO = FrameworkBaseDTO | undefined

// ====================================
// DATA: LIBRARIES
// ====================================

interface LibraryBaseDTO {
  nickname: string
  languages: LanguageDTO[]
  layer?: LayerDTO
  category: string
  description: LocalizedText
  icon?: string
}

export const LIBRARIES: Record<string, LibraryBaseDTO> = {
  tailwind: {
    nickname: 'Tailwind CSS',
    languages: [LANGUAGES.css],
    layer: LAYERS.frontend,
    category: 'ui',
    description: t('Framework CSS utility-first.', 'Utility-first CSS framework.'),
    icon: 'pi pi-palette',
  },
  bootstrap: {
    nickname: 'Bootstrap',
    languages: [LANGUAGES.css],
    layer: LAYERS.frontend,
    category: 'ui',
    description: t('Framework CSS com componentes prontos.', 'CSS framework with ready-made components.'),
    icon: 'pi pi-th-large',
  },
  materialui: {
    nickname: 'Material UI',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'ui',
    description: t('Componentes React com Material Design.', 'React components with Material Design.'),
    icon: 'pi pi-palette',
  },
  zustand: {
    nickname: 'Zustand',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'state',
    description: t('Gerenciamento de estado minimalista.', 'Minimalist state management.'),
    icon: 'pi pi-sitemap',
  },
  redux: {
    nickname: 'Redux',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'state',
    description: t('Gerenciamento de estado previsível.', 'Predictable state management.'),
    icon: 'pi pi-database',
  },
  yup: {
    nickname: 'Yup',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'validation',
    description: t('Schema validation JavaScript-first.', 'JavaScript-first schema validation.'),
    icon: 'pi pi-check-circle',
  },
  zod: {
    nickname: 'Zod',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'validation',
    description: t('Schema validation TypeScript-first.', 'TypeScript-first schema validation.'),
    icon: 'pi pi-check-circle',
  },
  joi: {
    nickname: 'Joi',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'validation',
    description: t('Schema validation para Node.js.', 'Schema validation for Node.js.'),
    icon: 'pi pi-verified',
  },
  mikroORM: {
    nickname: 'MikroORM',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM para TypeScript e JavaScript.', 'ORM for TypeScript and JavaScript.'),
    icon: 'pi pi-database',
  },
  prisma: {
    nickname: 'Prisma',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM moderno e type-safe para Node.js.', 'Modern type-safe ORM for Node.js.'),
    icon: 'pi pi-database',
  },
  typeorm: {
    nickname: 'TypeORM',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM para TypeScript e JavaScript.', 'ORM for TypeScript and JavaScript.'),
    icon: 'pi pi-database',
  },
  sequelize: {
    nickname: 'Sequelize',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM promise-based para Node.js.', 'Promise-based ORM for Node.js.'),
    icon: 'pi pi-database',
  },
  axios: {
    nickname: 'Axios',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'http',
    description: t('Cliente HTTP promise-based.', 'Promise-based HTTP client.'),
    icon: 'pi pi-arrow-right-arrow-left',
  },
  request: {
    nickname: 'Request',
    languages: [LANGUAGES.python],
    layer: LAYERS.fullstack,
    category: 'http',
    description: t('Cliente HTTP simples para Python.', 'Simple HTTP client for Python.'),
    icon: 'pi pi-arrow-right-arrow-left',
  },
  pandas: {
    nickname: 'Pandas',
    languages: [LANGUAGES.python],
    layer: LAYERS.datascience,
    category: 'data-analysis',
    description: t('Biblioteca para análise de dados em Python.', 'Library for data analysis in Python.'),
    icon: 'pi pi-chart-bar',
  },
  children_process:{
    nickname: 'child_process',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'process',
    description: t('Módulo Node.js para criar processos filhos.', 'Node.js module for creating child processes.'),
    icon: 'pi pi-cogs',
  },
  reacthookform: {
    nickname: 'React Hook Form',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'forms',
    description: t('Gerenciamento performático de formulários React.', 'Performant React form management.'),
    icon: 'pi pi-file-edit',
  },
  rxjs: {
    nickname: 'RxJS',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'reactive',
    description: t('Programação reativa com Observables.', 'Reactive programming with Observables.'),
    icon: 'pi pi-wave-pulse',
  },
} as const

export type LibraryDTO = LibraryBaseDTO | undefined

// ====================================
// DATA: CLOUD PLATFORMS
// ====================================

interface CloudPlatformBaseDTO {
  nickname: string
  services: string[]
  description: LocalizedText
  icon?: string
}

export const CLOUD_PLATFORMS: Record<string, CloudPlatformBaseDTO> = {
  azure: {
    nickname: 'Azure',
    services: ['compute', 'storage', 'database', 'ai', 'functions'],
    description: t('Plataforma cloud da Microsoft.', 'Microsoft cloud platform.'),
    icon: 'pi pi-microsoft',
  },
  aws: {
    nickname: 'AWS',
    services: ['ec2', 's3', 'rds', 'lambda', 'dynamodb'],
    description: t('Plataforma cloud da Amazon.', 'Amazon cloud platform.'),
    icon: 'pi pi-cloud',
  },
  gcp: {
    nickname: 'Google Cloud',
    services: ['compute-engine', 'cloud-storage', 'bigquery', 'cloud-functions'],
    description: t('Plataforma cloud do Google.', 'Google cloud platform.'),
    icon: 'pi pi-cloud',
  },
  vercel: {
    nickname: 'Vercel',
    services: ['hosting', 'serverless', 'edge-functions'],
    description: t('Plataforma para deploy de frontends (Next.js).', 'Frontend deployment platform (Next.js).'),
    icon: 'pi pi-cloud-upload',
  },
  netlify: {
    nickname: 'Netlify',
    services: ['hosting', 'serverless', 'forms'],
    description: t('Plataforma para deploy de sites estáticos e JAMstack.', 'Static sites and JAMstack deployment platform.'),
    icon: 'pi pi-cloud-upload',
  },
  wix: {
    nickname: 'Wix Cloud',
    services: ['hosting', 'database', 'serverless'],
    description: t('Plataforma cloud para aplicações no Wix.', 'Cloud platform for applications on Wix.'),
    icon: 'pi pi-wix',
  }
} as const

export type CloudPlatformDTO = CloudPlatformBaseDTO | undefined

// ====================================
// DATA: TOOLS
// ====================================

interface ToolBaseDTO {
  nickname: string
  category: 'bundler' | 'testing' | 'linting' | 'versioning' | 'ci-cd' | 'devops' | 'repository' | 'automation' | 'other'
  description: LocalizedText
  icon?: string
}

export const TOOLS: Record<string, ToolBaseDTO> = {
  make: {
    nickname: 'Make File',
    category: 'bundler',
    description: t('Ferramenta de automação de tarefas clássica.', 'Classic task automation tool.'),
    icon: 'pi pi-cog',
  },
  git: {
    nickname: 'Git',
    category: 'versioning',
    description: t('Sistema de controle de versão distribuído.', 'Distributed version control system.'),
    icon: 'pi pi-code',
  },
  github: {
    nickname: 'GitHub',
    category: 'repository',
    description: t('Sistema de controle de versão distribuído.', 'Distributed version control system.'),
    icon: 'pi pi-code',
  },
  githubactions: {
    nickname: 'GitHub Actions',
    category: 'automation',
      description: t('CI/CD integrado ao GitHub.', 'GitHub-integrated CI/CD.'),
      icon: 'pi pi-github',
  },
  docker: {
    nickname: 'Docker',
    category: 'ci-cd',
    description: t('Plataforma de containerização.', 'Containerization platform.'),
    icon: 'pi pi-box',
  },
  kubernetes: {
    nickname: 'Kubernetes',
    category: 'ci-cd',
    description: t('Orquestrador de containers para deploy e escala.', 'Container orchestrator for deployment and scaling.'),
    icon: 'pi pi-cubes',
  },
  vite: {
    nickname: 'Vite',
    category: 'bundler',
    description: t('Build tool ultra-rápido para frontend moderno.', 'Ultra-fast build tool for modern frontend.'),
    icon: 'pi pi-bolt',
  },
  eslint: {
    nickname: 'ESLint',
    category: 'linting',
    description: t('Linter JavaScript/TypeScript.', 'JavaScript/TypeScript linter.'),
    icon: 'pi pi-search',
  },
  prettier: {
    nickname: 'Prettier',
    category: 'linting',
    description: t('Code formatter opinativo.', 'Opinionated code formatter.'),
    icon: 'pi pi-sparkles',
  },
  webpack: {
    nickname: 'Webpack',
    category: 'bundler',
    description: t('Module bundler para JavaScript.', 'Module bundler for JavaScript.'),
    icon: 'pi pi-box',
  },
  jest: {
    nickname: 'Jest',
    category: 'testing',
    description: t('Framework de testes JavaScript.', 'JavaScript testing framework.'),
    icon: 'pi pi-check-square',
  },
  vitest: {
    nickname: 'Vitest',
    category: 'testing',
    description: t('Framework de testes compatível com Vite.', 'Vite-compatible testing framework.'),
    icon: 'pi pi-check-square',
  },
  wix: {
    nickname: 'Wix Tools',
    category: 'ci-cd',
    description: t('Ferramentas de desenvolvimento e deploy no Wix.', 'Development and deployment tools on Wix.'),
    icon: 'pi pi-wix',
  }
} as const

export type ToolDTO = ToolBaseDTO | undefined

// ====================================
// DATA: PLATFORMS
// ====================================

interface PlatformBaseDTO {
  nickname: string
  languages: LanguageDTO[]
  layer: LayerDTO
  type: 'saas' | 'open-source'
  codeType: 'full-code' | 'low-code' | 'no-code'
  description?: LocalizedText
  icon?: string
}

export const PLATFORMS: Record<string, PlatformBaseDTO> = {
  Wix: {
    nickname: 'Wix',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    type: 'saas',
    codeType: "full-code",
  },
  Shopify: {
    nickname: 'Shopify',
    languages: [LANGUAGES.liquid, LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    type: "open-source",
    codeType: "low-code",
  },
  Wordpress: {
    nickname: 'WordPress',
    languages: [LANGUAGES.php, LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    type: "open-source",
    codeType: "full-code",
  }
}

export type PlatformDTO = PlatformBaseDTO | undefined
  

class helper{
  static getLanguage(key: string) {
    return LANGUAGES[key] as LanguageDTO
  }
  static getLanguages() {
    return getTableData(LANGUAGES) as LanguageDTO[]
  }
  static getRuntime(key: string) {
    return RUNTIMES[key] as RuntimeDTO
  }
  static getRuntimes() {
    return getTableData(RUNTIMES) as RuntimeDTO[]
  }
  static getDatabase(key: string) {
    return DATABASES[key] as DatabaseDTO
  }
  static getDatabases() {
    return getTableData(DATABASES) as DatabaseDTO[]
  }
  static getPackageManager(key: string) {
    return PACKAGE_MANAGERS[key] as PackageManagerDTO
  }
  static getPackageManagers() {
    return getTableData(PACKAGE_MANAGERS) as PackageManagerDTO[]
  }
  static getFramework(key: string) {
    return FRAMEWORKS[key] as FrameworkDTO
  }
  static getFrameworks() {
    return getTableData(FRAMEWORKS) as FrameworkDTO[]
  }
  static getLibrary(key: string) {
    return LIBRARIES[key] as LibraryDTO
  }
  static getLibraries() {
    return getTableData(LIBRARIES) as LibraryDTO[]
  }
  static getTool(key: string) {
    return TOOLS[key] as ToolDTO
  }
  static getTools() {
    return getTableData(TOOLS) as ToolDTO[]
  }
  static getCloudPlatform(key: string) {
    return CLOUD_PLATFORMS[key] as CloudPlatformDTO
  }
  static getCloudPlatforms() {
    return getTableData(CLOUD_PLATFORMS) as CloudPlatformDTO[]
  }
}

export default new helper()