
import {
  t, type LocalizedText,
  type TableItem,
} from '../types'

import { LANGUAGES, type LanguageDTO } from './Languages'
import { RUNTIMES, type RuntimeDTO } from './Runtimes'

// ====================================
// DATA: PACKAGE MANAGERS
// ====================================

interface PackageManagerBaseDTO extends TableItem {
  nickname: string
  languages: LanguageDTO[]
  runtime: RuntimeDTO
  description: LocalizedText
  icon?: string
}

export const PACKAGE_MANAGERS: Record<string, PackageManagerBaseDTO> = {
  npm: {
    key: 'npm',
    id: 'npm',
    nickname: 'npm',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.nodejs,
    description: t('Gerenciador de pacotes padrão do Node.js.', 'Default Node.js package manager.'),
    icon: 'devicon-npm-original colored',
  },
  yarn: {
    key: 'yarn',
    id: 'yarn',
    nickname: 'Yarn',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.nodejs,
    description: t('Gerenciador rápido e confiável (Facebook).', 'Fast and reliable manager (Facebook).'),
    icon: 'devicon-yarn-plain colored',
  },
  pnpm: {
    key: 'pnpm',
    id: 'pnpm',
    nickname: 'pnpm',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.nodejs,
    description: t('Gerenciador eficiente que economiza espaço.', 'Efficient space-saving manager.'),
    icon: 'devicon-pnpm-original colored',
  },
  bun: {
    key: 'bun',
    id: 'bun',
    nickname: 'Bun PM',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    runtime: RUNTIMES.bun,
    description: t('Gerenciador integrado ao runtime Bun, ultra-rápido.', 'Bun runtime integrated manager, ultra-fast.'),
    icon: 'devicon-bun-plain colored',
  },
  pip: {
    key: 'pip',
    id: 'pip',
    nickname: 'pip',
    languages: [LANGUAGES.python],
    runtime: RUNTIMES.python,
    description: t('Gerenciador de pacotes padrão do Python.', 'Default Python package manager.'),
    icon: 'devicon-python-plain colored',
  },
  composer: {
    key: 'composer',
    id: 'composer',
    nickname: 'Composer',
    languages: [LANGUAGES.php],
    runtime: RUNTIMES.php,
    description: t('Gerenciador de dependências para PHP.', 'PHP dependency manager.'),
    icon: 'devicon-composer-line colored',
  },
  nuget: {
    key: 'nuget',
    id: 'nuget',
    nickname: 'NuGet',
    languages: [LANGUAGES.csharp],
    runtime: RUNTIMES.dotnet,
    description: t('Gerenciador de pacotes para .NET.', '.NET package manager.'),
    icon: 'devicon-nuget-original colored',
  },
} as const

export type PackageManagerDTO = PackageManagerBaseDTO | undefined