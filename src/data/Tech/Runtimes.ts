
import {
    t, type LocalizedText,
    type TableItem,
} from '../types'

import { LANGUAGES, type LanguageDTO } from './Languages'

// ====================================
// DATA: RUNTIMES
// ====================================

interface RuntimeBaseDTO extends TableItem {
  nickname: string
  tags: string[]
  languages: LanguageDTO[],
  description: LocalizedText
  icon?: string
}

export const RUNTIMES: Record<string, RuntimeBaseDTO> = {
  browser: {
    key: 'browser',
    id: 'browser',
    nickname: 'Browser',
    tags: ['client-side', 'web', 'mobile'],
    languages: [LANGUAGES.html, LANGUAGES.css, LANGUAGES.javascript, LANGUAGES.php],
    description: t(
      'Ambiente de execução client-side no navegador.',
      'Client-side runtime environment in the browser.'
    ),
    icon: 'devicon-chrome-plain colored',
  },
  nodejs: {
    key: 'nodejs',
    id: 'nodejs',
    nickname: 'Node.js',
    tags: ['server-side', 'api', 'backend'],
    languages: [LANGUAGES.javascript],
    description: t(
      'Runtime JavaScript server-side baseado no V8.',
      'Server-side JavaScript runtime based on V8.'
    ),
    icon: 'devicon-nodejs-plain colored',
  },
  deno: {
    key: 'deno',
    id: 'deno',
    nickname: 'Deno',
    tags: ['server-side', 'api', 'secure'],
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    description: t(
      'Runtime moderno JS/TS com segurança e TypeScript nativo.',
      'Modern JS/TS runtime with security and native TypeScript.'
    ),
    icon: 'devicon-denojs-plain colored',
  },
  bun: {
    key: 'bun',
    id: 'bun',
    nickname: 'Bun',
    tags: ['server-side', 'api', 'fast'],
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    description: t(
      'Runtime ultra-rápido all-in-one para JS/TS.',
      'Ultra-fast all-in-one JS/TS runtime.'
    ),
    icon: 'devicon-bun-plain colored',
  },
  python: {
    key: 'python',
    id: 'python',
    nickname: 'Python Runtime',
    tags: ['server-side', 'data-science', 'automation'],
    languages: [LANGUAGES.python],
    description: t(
      'Interpretador Python para múltiplos propósitos.',
      'Multi-purpose Python interpreter.'
    ),
    icon: 'devicon-python-plain colored',
  },
  php: {
    key: 'php',
    id: 'php',
    nickname: 'PHP Runtime',
    tags: ['server-side', 'web'],
    languages: [LANGUAGES.php],
    description: t(
      'Interpretador PHP para aplicações web.',
      'PHP interpreter for web applications.'
    ),
    icon: 'devicon-php-plain colored',
  },
  jvm: {
    key: 'jvm',
    id: 'jvm',
    nickname: 'JVM',
    tags: ['server-side', 'enterprise'],
    languages: [LANGUAGES.java],
    description: t(
      'Java Virtual Machine para executar bytecode Java.',
      'Java Virtual Machine for running Java bytecode.'
    ),
    icon: 'devicon-java-plain colored',
  },
  dotnet: {
    key: 'dotnet',
    id: 'dotnet',
    nickname: '.NET Runtime',
    tags: ['server-side', 'enterprise', 'windows'],
    languages: [LANGUAGES.csharp],
    description: t(
      'Plataforma Microsoft para aplicações multiplataforma.',
      'Microsoft platform for cross-platform applications.'
    ),
    icon: 'devicon-dotnet-plain colored',
  },
  wix: {
    key: 'wix',
    id: 'wix',
    nickname: 'Wix Runtime',
    tags: ['server-side', 'web', 'proprietary'],
    languages: [LANGUAGES.javascript],
    description: t(
      'Runtime proprietário para aplicações web no Wix.',
      'Proprietary runtime for web applications on Wix.'
    ),
    icon: 'devicon-javascript-plain colored',
  }
} as const

export type RuntimeDTO = RuntimeBaseDTO | undefined