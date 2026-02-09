
import {
  t, type LocalizedText,
  type TableItem,
} from '../types'

import { LAYERS, type LayerDTO } from './Layers'
import { LANGUAGES, type LanguageDTO } from './Languages'

// ====================================
// DATA: FRAMEWORKS
// ====================================

interface FrameworkBaseDTO extends TableItem {
  nickname: string
  languages: LanguageDTO[]
  layer: LayerDTO
  category: 'framework' | 'meta-framework' | 'engine'
  description: LocalizedText
  icon?: string
}

export const FRAMEWORKS: Record<string, FrameworkBaseDTO> = {
  angular: {
    key: 'angular',
    id: 'angular',
    nickname: 'Angular',
    languages: [LANGUAGES.html, LANGUAGES.css, LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Framework completo do Google para SPAs.', 'Google\'s complete framework for SPAs.'),
    icon: 'devicon-angularjs-plain colored',
  },
  react: {
    key: 'react',
    id: 'react',
    nickname: 'React',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Biblioteca do Facebook para UIs (tratada como framework).', 'Facebook library for UIs (treated as framework).'),
    icon: 'devicon-react-plain colored',
  },
  vue: {
    key: 'vue',
    id: 'vue',
    nickname: 'Vue.js',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Framework progressivo para UIs.', 'Progressive framework for UIs.'),
    icon: 'devicon-vuejs-plain colored',
  },
  electron: {
    key: 'electron',
    id: 'electron',
    nickname: 'Electron',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'framework',
    description: t('Framework para apps desktop com tecnologias web.', 'Framework for desktop apps using web technologies.'),
    icon: 'devicon-electron-plain colored',
  },
  svelte: {
    key: 'svelte',
    id: 'svelte',
    nickname: 'Svelte',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'framework',
    description: t('Framework que compila para JavaScript puro.', 'Framework that compiles to vanilla JavaScript.'),
    icon: 'devicon-svelte-plain colored',
  },
  nextjs: {
    key: 'nextjs',
    id: 'nextjs',
    nickname: 'Next.js',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'meta-framework',
    description: t('Meta-framework React para SSR e SSG.', 'React meta-framework for SSR and SSG.'),
    icon: 'devicon-nextjs-plain colored',
  },
  nuxt: {
    key: 'nuxt',
    id: 'nuxt',
    nickname: 'Nuxt',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    category: 'meta-framework',
    description: t('Meta-framework Vue para SSR e SSG.', 'Vue meta-framework for SSR and SSG.'),
    icon: 'devicon-nuxtjs-plain colored',
  },
  sveltekit: {
    key: 'sveltekit',
    id: 'sveltekit',
    nickname: 'SvelteKit',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.fullstack,
    category: 'meta-framework',
    description: t('Meta-framework Svelte para aplicações fullstack.', 'Svelte meta-framework for fullstack apps.'),
    icon: 'devicon-svelte-plain colored',
  },
  fastify: {
    key: 'fastify',
    id: 'fastify',
    nickname: 'Fastify',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework web Node.js ultra-rápido.', 'Ultra-fast Node.js web framework.'),
    icon: 'devicon-fastify-plain colored',
  },
  express: {
    key: 'express',
    id: 'express',
    nickname: 'Express',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework minimalista para Node.js.', 'Minimalist framework for Node.js.'),
    icon: 'devicon-express-plain colored',
  },
  nestjs: {
    key: 'nestjs',
    id: 'nestjs',
    nickname: 'NestJS',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework enterprise para Node.js (inspirado no Angular).', 'Enterprise Node.js framework (Angular-inspired).'),
    icon: 'devicon-nestjs-plain colored',
  },
  django: {
    key: 'django',
    id: 'django',
    nickname: 'Django',
    languages: [LANGUAGES.python],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework Python batteries-included para web.', 'Batteries-included Python web framework.'),
    icon: 'devicon-django-plain colored',
  },
  flask: {
    key: 'flask',
    id: 'flask',
    nickname: 'Flask',
    languages: [LANGUAGES.python],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Micro-framework Python flexível.', 'Flexible Python micro-framework.'),
    icon: 'devicon-flask-plain colored',
  },
  laravel: {
    key: 'laravel',
    id: 'laravel',
    nickname: 'Laravel',
    languages: [LANGUAGES.php],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework PHP elegante para aplicações web.', 'Elegant PHP web application framework.'),
    icon: 'devicon-laravel-plain colored',
  },
  rails: {
    key: 'rails',
    id: 'rails',
    nickname: 'Ruby on Rails',
    languages: [LANGUAGES.ruby],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework Ruby convention-over-configuration.', 'Ruby convention-over-configuration framework.'),
    icon: 'devicon-rails-plain colored',
  },
  aspnet: {
    key: 'aspnet',
    id: 'aspnet',
    nickname: 'ASP.NET Core',
    languages: [LANGUAGES.csharp],
    layer: LAYERS.backend,
    category: 'framework',
    description: t('Framework Microsoft para aplicações web.', 'Microsoft web application framework.'),
    icon: 'devicon-dotnet-plain colored',
  },
  velo: {
    key: 'velo',
    id: 'velo',
    nickname: 'Velo by Wix',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'framework',
    description: t(
      'Framework serverless para desenvolvimento no Wix.',
      'Serverless framework for development on Wix.'
    ),
    icon: 'devicon-javascript-plain colored',
  },
  renpy: {
    key: 'renpy',
    id: 'renpy',
    nickname: 'RenPy',
    languages: [LANGUAGES.python],
    layer: LAYERS.fullstack,
    category: 'engine',
    description: t(
      'Engine para criação de visual novels e jogos 2D.',
      'Engine for creating visual novels and 2D games.'
    ),
    icon: 'devicon-python-plain colored',
  }
} as const

export type FrameworkDTO = FrameworkBaseDTO | undefined