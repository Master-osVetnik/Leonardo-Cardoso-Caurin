import { t } from '../types'
import type {
  Language,
  Runtime,
  Database,
  PackageManager,
  Layer,
  Framework,
  Library,
  CloudPlatform,
  Tool,
  TechDatabase,
} from './types'

// ====================================
// DATA: LANGUAGES
// ====================================

export const LANGUAGES: Record<string, Language> = {
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

// ====================================
// DATA: RUNTIMES
// ====================================

export const RUNTIMES: Record<string, Runtime> = {
  browser: {
    nickname: 'Browser',
    tags: ['client-side', 'web', 'mobile'],
    languages: ['html', 'css', 'javascript', 'typescript'],
    description: t(
      'Ambiente de execução client-side no navegador.',
      'Client-side runtime environment in the browser.'
    ),
    icon: 'pi pi-globe',
  },
  nodejs: {
    nickname: 'Node.js',
    tags: ['server-side', 'api', 'backend'],
    languages: ['javascript', 'typescript'],
    description: t(
      'Runtime JavaScript server-side baseado no V8.',
      'Server-side JavaScript runtime based on V8.'
    ),
    icon: 'pi pi-server',
  },
  deno: {
    nickname: 'Deno',
    tags: ['server-side', 'api', 'secure'],
    languages: ['javascript', 'typescript'],
    description: t(
      'Runtime moderno JS/TS com segurança e TypeScript nativo.',
      'Modern JS/TS runtime with security and native TypeScript.'
    ),
    icon: 'pi pi-shield',
  },
  bun: {
    nickname: 'Bun',
    tags: ['server-side', 'api', 'fast'],
    languages: ['javascript', 'typescript'],
    description: t(
      'Runtime ultra-rápido all-in-one para JS/TS.',
      'Ultra-fast all-in-one JS/TS runtime.'
    ),
    icon: 'pi pi-bolt',
  },
  python: {
    nickname: 'Python Runtime',
    tags: ['server-side', 'data-science', 'automation'],
    languages: ['python'],
    description: t(
      'Interpretador Python para múltiplos propósitos.',
      'Multi-purpose Python interpreter.'
    ),
    icon: 'pi pi-desktop',
  },
  jvm: {
    nickname: 'JVM',
    tags: ['server-side', 'enterprise'],
    languages: ['java'],
    description: t(
      'Java Virtual Machine para executar bytecode Java.',
      'Java Virtual Machine for running Java bytecode.'
    ),
    icon: 'pi pi-code',
  },
  dotnet: {
    nickname: '.NET Runtime',
    tags: ['server-side', 'enterprise', 'windows'],
    languages: ['csharp'],
    description: t(
      'Plataforma Microsoft para aplicações multiplataforma.',
      'Microsoft platform for cross-platform applications.'
    ),
    icon: 'pi pi-microsoft',
  },
} as const

// ====================================
// DATA: DATABASES
// ====================================

export const DATABASES: Record<string, Database> = {
  postgresql: {
    nickname: 'PostgreSQL',
    type: 'sql',
    category: 'relational',
    description: t(
      'RDBMS avançado, robusto e com recursos avançados.',
      'Advanced, robust RDBMS with advanced features.'
    ),
    icon: 'pi pi-database',
  },
  mysql: {
    nickname: 'MySQL',
    type: 'sql',
    category: 'relational',
    description: t(
      'RDBMS popular, confiável e de fácil uso.',
      'Popular, reliable and easy-to-use RDBMS.'
    ),
    icon: 'pi pi-database',
  },
  mongodb: {
    nickname: 'MongoDB',
    type: 'nosql',
    category: 'document',
    description: t(
      'Banco de dados orientado a documentos (JSON).',
      'Document-oriented database (JSON).'
    ),
    icon: 'pi pi-database',
  },
  redis: {
    nickname: 'Redis',
    type: 'nosql',
    category: 'key-value',
    description: t(
      'Banco in-memory para cache e filas.',
      'In-memory database for caching and queues.'
    ),
    icon: 'pi pi-bolt',
  },
  sqlite: {
    nickname: 'SQLite',
    type: 'sql',
    category: 'relational',
    description: t(
      'Banco de dados embutido, sem servidor.',
      'Embedded database, serverless.'
    ),
    icon: 'pi pi-database',
  },
  mariadb: {
    nickname: 'MariaDB',
    type: 'sql',
    category: 'relational',
    description: t(
      'Fork do MySQL com melhorias de performance.',
      'MySQL fork with performance improvements.'
    ),
    icon: 'pi pi-database',
  },
  cassandra: {
    nickname: 'Cassandra',
    type: 'nosql',
    category: 'columnar',
    description: t(
      'Banco distribuído para grandes volumes de dados.',
      'Distributed database for large data volumes.'
    ),
    icon: 'pi pi-database',
  },
  neo4j: {
    nickname: 'Neo4j',
    type: 'nosql',
    category: 'graph',
    description: t(
      'Banco de dados de grafos para relacionamentos complexos.',
      'Graph database for complex relationships.'
    ),
    icon: 'pi pi-sitemap',
  },
} as const

// ====================================
// DATA: PACKAGE MANAGERS
// ====================================

export const PACKAGE_MANAGERS: Record<string, PackageManager> = {
  npm: {
    nickname: 'npm',
    languages: ['javascript', 'typescript'],
    runtime: 'nodejs',
    description: t('Gerenciador de pacotes padrão do Node.js.', 'Default Node.js package manager.'),
    icon: 'pi pi-box',
  },
  yarn: {
    nickname: 'Yarn',
    languages: ['javascript', 'typescript'],
    runtime: 'nodejs',
    description: t('Gerenciador rápido e confiável (Facebook).', 'Fast and reliable manager (Facebook).'),
    icon: 'pi pi-box',
  },
  pnpm: {
    nickname: 'pnpm',
    languages: ['javascript', 'typescript'],
    runtime: 'nodejs',
    description: t('Gerenciador eficiente que economiza espaço.', 'Efficient space-saving manager.'),
    icon: 'pi pi-box',
  },
  bun: {
    nickname: 'Bun PM',
    languages: ['javascript', 'typescript'],
    runtime: 'bun',
    description: t('Gerenciador integrado ao runtime Bun, ultra-rápido.', 'Bun runtime integrated manager, ultra-fast.'),
    icon: 'pi pi-bolt',
  },
  pip: {
    nickname: 'pip',
    languages: ['python'],
    runtime: 'python',
    description: t('Gerenciador de pacotes padrão do Python.', 'Default Python package manager.'),
    icon: 'pi pi-box',
  },
  composer: {
    nickname: 'Composer',
    languages: ['php'],
    description: t('Gerenciador de dependências para PHP.', 'PHP dependency manager.'),
    icon: 'pi pi-box',
  },
  nuget: {
    nickname: 'NuGet',
    languages: ['csharp'],
    runtime: 'dotnet',
    description: t('Gerenciador de pacotes para .NET.', '.NET package manager.'),
    icon: 'pi pi-box',
  },
} as const

// ====================================
// DATA: LAYERS
// ====================================

export const LAYERS: Record<string, Layer> = {
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

// ====================================
// DATA: FRAMEWORKS
// ====================================

export const FRAMEWORKS: Record<string, Framework> = {
  angular: {
    nickname: 'Angular',
    language: 'typescript',
    layer: 'frontend',
    category: 'framework',
    description: t('Framework completo do Google para SPAs.', 'Google\'s complete framework for SPAs.'),
    icon: 'pi pi-code',
  },
  react: {
    nickname: 'React',
    language: 'javascript',
    layer: 'frontend',
    category: 'framework',
    description: t('Biblioteca do Facebook para UIs (tratada como framework).', 'Facebook library for UIs (treated as framework).'),
    icon: 'pi pi-code',
  },
  vue: {
    nickname: 'Vue.js',
    language: 'javascript',
    layer: 'frontend',
    category: 'framework',
    description: t('Framework progressivo para UIs.', 'Progressive framework for UIs.'),
    icon: 'pi pi-code',
  },
  svelte: {
    nickname: 'Svelte',
    language: 'javascript',
    layer: 'frontend',
    category: 'framework',
    description: t('Framework que compila para JavaScript puro.', 'Framework that compiles to vanilla JavaScript.'),
    icon: 'pi pi-bolt',
  },
  nextjs: {
    nickname: 'Next.js',
    language: 'typescript',
    layer: 'fullstack',
    category: 'meta-framework',
    description: t('Meta-framework React para SSR e SSG.', 'React meta-framework for SSR and SSG.'),
    icon: 'pi pi-bolt',
  },
  nuxt: {
    nickname: 'Nuxt',
    language: 'javascript',
    layer: 'fullstack',
    category: 'meta-framework',
    description: t('Meta-framework Vue para SSR e SSG.', 'Vue meta-framework for SSR and SSG.'),
    icon: 'pi pi-bolt',
  },
  sveltekit: {
    nickname: 'SvelteKit',
    language: 'javascript',
    layer: 'fullstack',
    category: 'meta-framework',
    description: t('Meta-framework Svelte para aplicações fullstack.', 'Svelte meta-framework for fullstack apps.'),
    icon: 'pi pi-bolt',
  },
  fastify: {
    nickname: 'Fastify',
    language: 'typescript',
    layer: 'backend',
    category: 'framework',
    description: t('Framework web Node.js ultra-rápido.', 'Ultra-fast Node.js web framework.'),
    icon: 'pi pi-bolt',
  },
  express: {
    nickname: 'Express',
    language: 'javascript',
    layer: 'backend',
    category: 'framework',
    description: t('Framework minimalista para Node.js.', 'Minimalist framework for Node.js.'),
    icon: 'pi pi-server',
  },
  nestjs: {
    nickname: 'NestJS',
    language: 'typescript',
    layer: 'backend',
    category: 'framework',
    description: t('Framework enterprise para Node.js (inspirado no Angular).', 'Enterprise Node.js framework (Angular-inspired).'),
    icon: 'pi pi-code',
  },
  django: {
    nickname: 'Django',
    language: 'python',
    layer: 'backend',
    category: 'framework',
    description: t('Framework Python batteries-included para web.', 'Batteries-included Python web framework.'),
    icon: 'pi pi-globe',
  },
  flask: {
    nickname: 'Flask',
    language: 'python',
    layer: 'backend',
    category: 'framework',
    description: t('Micro-framework Python flexível.', 'Flexible Python micro-framework.'),
    icon: 'pi pi-code',
  },
  laravel: {
    nickname: 'Laravel',
    language: 'php',
    layer: 'backend',
    category: 'framework',
    description: t('Framework PHP elegante para aplicações web.', 'Elegant PHP web application framework.'),
    icon: 'pi pi-globe',
  },
  rails: {
    nickname: 'Ruby on Rails',
    language: 'ruby',
    layer: 'backend',
    category: 'framework',
    description: t('Framework Ruby convention-over-configuration.', 'Ruby convention-over-configuration framework.'),
    icon: 'pi pi-code',
  },
  aspnet: {
    nickname: 'ASP.NET Core',
    language: 'csharp',
    layer: 'backend',
    category: 'framework',
    description: t('Framework Microsoft para aplicações web.', 'Microsoft web application framework.'),
    icon: 'pi pi-microsoft',
  },
} as const

// ====================================
// DATA: LIBRARIES
// ====================================

export const LIBRARIES: Record<string, Library> = {
  tailwind: {
    nickname: 'Tailwind CSS',
    language: 'css',
    layer: 'frontend',
    category: 'ui',
    description: t('Framework CSS utility-first.', 'Utility-first CSS framework.'),
    icon: 'pi pi-palette',
  },
  bootstrap: {
    nickname: 'Bootstrap',
    language: 'css',
    layer: 'frontend',
    category: 'ui',
    description: t('Framework CSS com componentes prontos.', 'CSS framework with ready-made components.'),
    icon: 'pi pi-th-large',
  },
  materialui: {
    nickname: 'Material UI',
    language: 'typescript',
    layer: 'frontend',
    category: 'ui',
    description: t('Componentes React com Material Design.', 'React components with Material Design.'),
    icon: 'pi pi-palette',
  },
  zustand: {
    nickname: 'Zustand',
    language: 'typescript',
    layer: 'frontend',
    category: 'state',
    description: t('Gerenciamento de estado minimalista.', 'Minimalist state management.'),
    icon: 'pi pi-sitemap',
  },
  redux: {
    nickname: 'Redux',
    language: 'javascript',
    layer: 'frontend',
    category: 'state',
    description: t('Gerenciamento de estado previsível.', 'Predictable state management.'),
    icon: 'pi pi-database',
  },
  zod: {
    nickname: 'Zod',
    language: 'typescript',
    layer: 'fullstack',
    category: 'validation',
    description: t('Schema validation TypeScript-first.', 'TypeScript-first schema validation.'),
    icon: 'pi pi-check-circle',
  },
  joi: {
    nickname: 'Joi',
    language: 'javascript',
    layer: 'backend',
    category: 'validation',
    description: t('Schema validation para Node.js.', 'Schema validation for Node.js.'),
    icon: 'pi pi-verified',
  },
  mikroORM: {
    nickname: 'MikroORM',
    language: 'typescript',
    layer: 'backend',
    category: 'orm',
    description: t('ORM para TypeScript e JavaScript.', 'ORM for TypeScript and JavaScript.'),
    icon: 'pi pi-database',
  },
  prisma: {
    nickname: 'Prisma',
    language: 'typescript',
    layer: 'backend',
    category: 'orm',
    description: t('ORM moderno e type-safe para Node.js.', 'Modern type-safe ORM for Node.js.'),
    icon: 'pi pi-database',
  },
  typeorm: {
    nickname: 'TypeORM',
    language: 'typescript',
    layer: 'backend',
    category: 'orm',
    description: t('ORM para TypeScript e JavaScript.', 'ORM for TypeScript and JavaScript.'),
    icon: 'pi pi-database',
  },
  sequelize: {
    nickname: 'Sequelize',
    language: 'javascript',
    layer: 'backend',
    category: 'orm',
    description: t('ORM promise-based para Node.js.', 'Promise-based ORM for Node.js.'),
    icon: 'pi pi-database',
  },
  axios: {
    nickname: 'Axios',
    language: 'javascript',
    layer: 'fullstack',
    category: 'http',
    description: t('Cliente HTTP promise-based.', 'Promise-based HTTP client.'),
    icon: 'pi pi-arrow-right-arrow-left',
  },
  reacthookform: {
    nickname: 'React Hook Form',
    language: 'typescript',
    layer: 'frontend',
    category: 'forms',
    description: t('Gerenciamento performático de formulários React.', 'Performant React form management.'),
    icon: 'pi pi-file-edit',
  },
  rxjs: {
    nickname: 'RxJS',
    language: 'typescript',
    layer: 'fullstack',
    category: 'reactive',
    description: t('Programação reativa com Observables.', 'Reactive programming with Observables.'),
    icon: 'pi pi-wave-pulse',
  },
} as const

// ====================================
// DATA: CLOUD PLATFORMS
// ====================================

export const CLOUD_PLATFORMS: Record<string, CloudPlatform> = {
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
} as const

// ====================================
// DATA: TOOLS
// ====================================

export const TOOLS: Record<string, Tool> = {
  webpack: {
    nickname: 'Webpack',
    category: 'bundler',
    description: t('Module bundler para JavaScript.', 'Module bundler for JavaScript.'),
    icon: 'pi pi-box',
  },
  vite: {
    nickname: 'Vite',
    category: 'bundler',
    description: t('Build tool ultra-rápido para frontend moderno.', 'Ultra-fast build tool for modern frontend.'),
    icon: 'pi pi-bolt',
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
  git: {
    nickname: 'Git',
    category: 'versioning',
    description: t('Sistema de controle de versão distribuído.', 'Distributed version control system.'),
    icon: 'pi pi-code',
  },
  docker: {
    nickname: 'Docker',
    category: 'ci-cd',
    description: t('Plataforma de containerização.', 'Containerization platform.'),
    icon: 'pi pi-box',
  },
  githubactions: {
    nickname: 'GitHub Actions',
    category: 'ci-cd',
    description: t('CI/CD integrado ao GitHub.', 'GitHub-integrated CI/CD.'),
    icon: 'pi pi-github',
  },
} as const

// ====================================
// HELPER FUNCTIONS (QUERIES)
// ====================================

export class TechStackQueries {
  static getByLayer(layer: keyof typeof LAYERS) {
    const frameworks = Object.entries(FRAMEWORKS)
      .filter(([, fw]) => fw.layer === layer)
      .map(([id, fw]) => ({ id, ...fw }))

    const libraries = Object.entries(LIBRARIES)
      .filter(([, lib]) => lib.layer === layer)
      .map(([id, lib]) => ({ id, ...lib }))

    return { frameworks, libraries }
  }

  static getByLanguage(languageId: keyof typeof LANGUAGES) {
    const frameworks = Object.entries(FRAMEWORKS)
      .filter(([, fw]) => fw.language === languageId)
      .map(([id, fw]) => ({ id, ...fw }))

    const runtimes = Object.entries(RUNTIMES)
      .filter(([, rt]) => rt.languages.includes(languageId))
      .map(([id, rt]) => ({ id, ...rt }))

    return { frameworks, runtimes }
  }

  static getProjectStack(config: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    cloud?: string[]
  }) {
    return {
      frontend: config.frontend?.map((id) => FRAMEWORKS[id] || LIBRARIES[id]),
      backend: config.backend?.map((id) => FRAMEWORKS[id] || LIBRARIES[id]),
      database: config.database?.map((id) => DATABASES[id]),
      cloud: config.cloud?.map((id) => CLOUD_PLATFORMS[id]),
    }
  }

  /** Get all tech items from all categories as flat array with id and category */
  static getAllFlat() {
    return [
      ...Object.entries(LANGUAGES).map(([id, v]) => ({ id, techCategory: 'language' as const, ...v })),
      ...Object.entries(FRAMEWORKS).map(([id, v]) => ({ id, techCategory: 'framework' as const, ...v })),
      ...Object.entries(LIBRARIES).map(([id, v]) => ({ id, techCategory: 'library' as const, ...v })),
      ...Object.entries(DATABASES).map(([id, v]) => ({ id, techCategory: 'database' as const, ...v })),
      ...Object.entries(TOOLS).map(([id, v]) => ({ id, techCategory: 'tool' as const, ...v })),
      ...Object.entries(CLOUD_PLATFORMS).map(([id, v]) => ({ id, techCategory: 'cloud' as const, ...v })),
    ]
  }
}

// ====================================
// CONSOLIDATED EXPORT
// ====================================

export const TECH_DATABASE: TechDatabase = {
  languages: LANGUAGES,
  runtimes: RUNTIMES,
  databases: DATABASES,
  packageManagers: PACKAGE_MANAGERS,
  layers: LAYERS,
  frameworks: FRAMEWORKS,
  libraries: LIBRARIES,
  cloudPlatforms: CLOUD_PLATFORMS,
  tools: TOOLS,
} as const
