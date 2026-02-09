
import {
  t, type LocalizedText,
  type TableItem,
} from '../types'

// ====================================
// DATA: TOOLS
// ====================================

interface ToolBaseDTO extends TableItem {
  nickname: string
  category: 'bundler' | 'testing' | 'linting' | 'versioning' | 'ci-cd' | 'devops' | 'repository' | 'automation' | 'ui-library' | 'other'
  description: LocalizedText
  icon?: string
}

export const TOOLS: Record<string, ToolBaseDTO> = {
  make: {
    key: 'make',
    id: 'make',
    nickname: 'Make File',
    category: 'bundler',
    description: t('Ferramenta de automação de tarefas clássica.', 'Classic task automation tool.'),
    icon: 'devicon-docker-plain colored',
  },
  git: {
    key: 'git',
    id: 'git',
    nickname: 'Git',
    category: 'versioning',
    description: t('Sistema de controle de versão distribuído.', 'Distributed version control system.'),
    icon: 'devicon-git-plain colored',
  },
  github: {
    key: 'github',
    id: 'github',
    nickname: 'GitHub',
    category: 'repository',
    description: t('Sistema de controle de versão distribuído.', 'Distributed version control system.'),
    icon: 'devicon-github-original colored',
  },
  githubactions: {
    key: 'githubactions',
    id: 'githubactions',
    nickname: 'GitHub Actions',
    category: 'automation',
      description: t('CI/CD integrado ao GitHub.', 'GitHub-integrated CI/CD.'),
      icon: 'devicon-github-original colored',
  },
  docker: {
    key: 'docker',
    id: 'docker',
    nickname: 'Docker',
    category: 'ci-cd',
    description: t('Plataforma de containerização.', 'Containerization platform.'),
    icon: 'devicon-docker-plain colored',
  },
  kubernetes: {
    key: 'kubernetes',
    id: 'kubernetes',
    nickname: 'Kubernetes',
    category: 'ci-cd',
    description: t('Orquestrador de containers para deploy e escala.', 'Container orchestrator for deployment and scaling.'),
    icon: 'devicon-eslint-plain colored',
  },
  vite: {
    key: 'vite',
    id: 'vite',
    nickname: 'Vite',
    category: 'bundler',
    description: t('Build tool ultra-rápido para frontend moderno.', 'Ultra-fast build tool for modern frontend.'),
    icon: 'devicon-linux-plain colored',
  },
  eslint: {
    key: 'eslint',
    id: 'eslint',
    nickname: 'ESLint',
    category: 'linting',
    description: t('Linter JavaScript/TypeScript.', 'JavaScript/TypeScript linter.'),
    icon: 'devicon-typescript-plain colored',
  },
  prettier: {
    key: 'prettier',
    id: 'prettier',
    nickname: 'Prettier',
    category: 'linting',
    description: t('Code formatter opinativo.', 'Opinionated code formatter.'),
    icon: 'devicon-javascript-plain colored',
  },
  webpack: {
    key: 'webpack',
    id: 'webpack',
    nickname: 'Webpack',
    category: 'bundler',
    description: t('Module bundler para JavaScript.', 'Module bundler for JavaScript.'),
    icon: 'devicon-webpack-plain colored',
  },
  jest: {
    key: 'jest',
    id: 'jest',
    nickname: 'Jest',
    category: 'testing',
    description: t('Framework de testes JavaScript.', 'JavaScript testing framework.'),
    icon: 'devicon-jest-plain colored',
  },
  vitest: {
    key: 'vitest',
    id: 'vitest',
    nickname: 'Vitest',
    category: 'testing',
    description: t('Framework de testes compatível com Vite.', 'Vite-compatible testing framework.'),
    icon: 'devicon-vitejs-plain colored',
  },
  primevue: {
    key: 'primevue',
    id: 'primevue',
    nickname: 'PrimeVue',
    category: 'ui-library',
    description: t('Biblioteca de componentes UI rica para Vue.js.', 'Rich UI component library for Vue.js.'),
    icon: 'devicon-vuejs-plain colored',
  },

  wix: {
    key: 'wix',
    id: 'wix',
    nickname: 'Wix Tools',
    category: 'ci-cd',
    description: t('Ferramentas de desenvolvimento e deploy no Wix.', 'Development and deployment tools on Wix.'),
    icon: 'devicon-javascript-plain colored',
  },
} as const

export type ToolDTO = ToolBaseDTO | undefined