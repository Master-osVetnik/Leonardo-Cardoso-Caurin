
import {
  t, type LocalizedText,
  type TableItem,
} from '../types'

import { LAYERS, type LayerDTO } from './Layers'
import { LANGUAGES, type LanguageDTO } from './Languages'

// ====================================
// DATA: LIBRARIES
// ====================================

interface LibraryBaseDTO extends TableItem {
  nickname: string
  languages: LanguageDTO[]
  layer?: LayerDTO
  category: string
  description: LocalizedText
  icon?: string
}

export const LIBRARIES: Record<string, LibraryBaseDTO> = {
  tailwind: {
    key: 'tailwind',
    id: 'tailwind',
    nickname: 'Tailwind CSS',
    languages: [LANGUAGES.css],
    layer: LAYERS.frontend,
    category: 'ui',
    description: t('Framework CSS utility-first.', 'Utility-first CSS framework.'),
    icon: 'devicon-tailwindcss-plain colored',
  },
  bootstrap: {
    key: 'bootstrap',
    id: 'bootstrap',
    nickname: 'Bootstrap',
    languages: [LANGUAGES.css],
    layer: LAYERS.frontend,
    category: 'ui',
    description: t('Framework CSS com componentes prontos.', 'CSS framework with ready-made components.'),
    icon: 'devicon-bootstrap-plain colored',
  },
  materialui: {
    key: 'materialui',
    id: 'materialui',
    nickname: 'Material UI',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'ui',
    description: t('Componentes React com Material Design.', 'React components with Material Design.'),
    icon: 'devicon-materialui-plain colored',
  },
  zustand: {
    key: 'zustand',
    id: 'zustand',
    nickname: 'Zustand',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'state',
    description: t('Gerenciamento de estado minimalista.', 'Minimalist state management.'),
    icon: 'devicon-typescript-plain colored',
  },
  redux: {
    key: 'redux',
    id: 'redux',
    nickname: 'Redux',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'state',
    description: t('Gerenciamento de estado previsível.', 'Predictable state management.'),
    icon: 'devicon-redux-plain colored',
  },
  yup: {
    key: 'yup',
    id: 'yup',
    nickname: 'Yup',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'validation',
    description: t('Schema validation JavaScript-first.', 'JavaScript-first schema validation.'),
    icon: 'devicon-javascript-plain colored',
  },
  zod: {
    key: 'zod',
    id: 'zod',
    nickname: 'Zod',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'validation',
    description: t('Schema validation TypeScript-first.', 'TypeScript-first schema validation.'),
    icon: 'devicon-typescript-plain colored',
  },
  joi: {
    key: 'joi',
    id: 'joi',
    nickname: 'Joi',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'validation',
    description: t('Schema validation para Node.js.', 'Schema validation for Node.js.'),
    icon: 'devicon-javascript-plain colored',
  },
  mikroORM: {
    key: 'mikroORM',
    id: 'mikroORM',
    nickname: 'MikroORM',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM para TypeScript e JavaScript.', 'ORM for TypeScript and JavaScript.'),
    icon: 'devicon-typescript-plain colored',
  },
  prisma: {
    key: 'prisma',
    id: 'prisma',
    nickname: 'Prisma',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM moderno e type-safe para Node.js.', 'Modern type-safe ORM for Node.js.'),
    icon: 'devicon-prisma-plain colored',
  },
  typeorm: {
    key: 'typeorm',
    id: 'typeorm',
    nickname: 'TypeORM',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM para TypeScript e JavaScript.', 'ORM for TypeScript and JavaScript.'),
    icon: 'devicon-typescript-plain colored',
  },
  sequelize: {
    key: 'sequelize',
    id: 'sequelize',
    nickname: 'Sequelize',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'orm',
    description: t('ORM promise-based para Node.js.', 'Promise-based ORM for Node.js.'),
    icon: 'devicon-sequelize-plain colored',
  },
  axios: {
    key: 'axios',
    id: 'axios',
    nickname: 'Axios',
    languages: [LANGUAGES.javascript, LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'http',
    description: t('Cliente HTTP promise-based.', 'Promise-based HTTP client.'),
    icon: 'devicon-javascript-plain colored',
  },
  request: {
    key: 'request',
    id: 'request',
    nickname: 'Request',
    languages: [LANGUAGES.python],
    layer: LAYERS.fullstack,
    category: 'http',
    description: t('Cliente HTTP simples para Python.', 'Simple HTTP client for Python.'),
    icon: 'devicon-python-plain colored',
  },
  pandas: {
    key: 'pandas',
    id: 'pandas',
    nickname: 'Pandas',
    languages: [LANGUAGES.python],
    layer: LAYERS.datascience,
    category: 'data-analysis',
    description: t('Biblioteca para análise de dados em Python.', 'Library for data analysis in Python.'),
    icon: 'devicon-pandas-plain colored',
  },
  children_process:{
    key: 'children_process',
    id: 'children_process',
    nickname: 'child_process',
    languages: [LANGUAGES.javascript],
    layer: LAYERS.backend,
    category: 'process',
    description: t('Módulo Node.js para criar processos filhos.', 'Node.js module for creating child processes.'),
    icon: 'devicon-nodejs-plain colored',
  },
  reacthookform: {
    key: 'reacthookform',
    id: 'reacthookform',
    nickname: 'React Hook Form',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.frontend,
    category: 'forms',
    description: t('Gerenciamento performático de formulários React.', 'Performant React form management.'),
    icon: 'devicon-react-plain colored',
  },
  rxjs: {
    key: 'rxjs',
    id: 'rxjs',
    nickname: 'RxJS',
    languages: [LANGUAGES.typescript],
    layer: LAYERS.fullstack,
    category: 'reactive',
    description: t('Programação reativa com Observables.', 'Reactive programming with Observables.'),
    icon: 'devicon-rxjs-plain colored',
  },
} as const

export type LibraryDTO = LibraryBaseDTO | undefined