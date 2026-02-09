
import {
    t, type LocalizedText,
    type TableItem,
} from '../types'

// ====================================
// DATA: LANGUAGES
// ====================================

interface LanguageBaseDTO extends TableItem {
  nickname: string
  type: 'markup' | 'programming' | 'stylesheet',
  description: LocalizedText
  icon?: string
}

export const LANGUAGES: Record<string, LanguageBaseDTO> = {
  html: {
    key: 'html',
    id: 'html',
    nickname: 'HTML',
    type: 'markup',
    description: t(
      'Linguagem de marcação para estruturar conteúdo web.',
      'Markup language for structuring web content.'
    ),
    icon: 'devicon-html5-plain colored',
  },
  css: {
    key: 'css',
    id: 'css',
    nickname: 'CSS',
    type: 'stylesheet',
    description: t(
      'Linguagem de estilo para controlar aparência de páginas web.',
      'Stylesheet language for controlling web page appearance.'
    ),
    icon: 'devicon-css3-plain colored',
  },
  javascript: {
    key: 'javascript',
    id: 'javascript',
    nickname: 'JavaScript',
    type: 'programming',
    description: t(
      'Linguagem de programação para web, tanto client quanto server-side.',
      'Programming language for web, both client and server-side.'
    ),
    icon: 'devicon-javascript-plain colored',
  },
  typescript: {
    key: 'typescript',
    id: 'typescript',
    nickname: 'TypeScript',
    type: 'programming',
    description: t(
      'Superset de JavaScript com tipagem estática.',
      'JavaScript superset with static typing.'
    ),
    icon: 'devicon-typescript-plain colored',
  },
  python: {
    key: 'python',
    id: 'python',
    nickname: 'Python',
    type: 'programming',
    description: t(
      'Linguagem de alto nível para web, data science, automação.',
      'High-level language for web, data science, automation.'
    ),
    icon: 'devicon-python-plain colored',
  },
  php: {
    key: 'php',
    id: 'php',
    nickname: 'PHP',
    type: 'programming',
    description: t(
      'Linguagem server-side para desenvolvimento web dinâmico.',
      'Server-side language for dynamic web development.'
    ),
    icon: 'devicon-php-plain colored',
  },
  c: {
    key: 'c',
    id: 'c',
    nickname: 'C',
    type: 'programming',
    description: t(
      'Linguagem de baixo nível para sistemas e alta performance.',
      'Low-level language for systems and high performance.'
    ),
    icon: 'devicon-c-plain colored',
  },
  cpp: {
    key: 'cpp',
    id: 'cpp',
    nickname: 'C++',
    type: 'programming',
    description: t(
      'Extensão do C com programação orientada a objetos.',
      'C extension with object-oriented programming.'
    ),
    icon: 'devicon-cplusplus-plain colored',
  },
  csharp: {
    key: 'csharp',
    id: 'csharp',
    nickname: 'C#',
    type: 'programming',
    description: t(
      'Linguagem da Microsoft para plataforma .NET.',
      'Microsoft language for the .NET platform.'
    ),
    icon: 'devicon-csharp-plain colored',
  },
  java: {
    key: 'java',
    id: 'java',
    nickname: 'Java',
    type: 'programming',
    description: t(
      'Linguagem enterprise para aplicações multiplataforma.',
      'Enterprise language for cross-platform applications.'
    ),
    icon: 'devicon-java-plain colored',
  },
  go: {
    key: 'go',
    id: 'go',
    nickname: 'Go',
    type: 'programming',
    description: t(
      'Linguagem do Google focada em concorrência e performance.',
      'Google language focused on concurrency and performance.'
    ),
    icon: 'devicon-go-plain colored',
  },
  rust: {
    key: 'rust',
    id: 'rust',
    nickname: 'Rust',
    type: 'programming',
    description: t(
      'Linguagem de sistemas com foco em segurança de memória.',
      'Systems language focused on memory safety.'
    ),
    icon: 'devicon-rust-plain colored',
  },
  ruby: {
    key: 'ruby',
    id: 'ruby',
    nickname: 'Ruby',
    type: 'programming',
    description: t(
      'Linguagem dinâmica focada em simplicidade e produtividade.',
      'Dynamic language focused on simplicity and productivity.'
    ),
    icon: 'devicon-ruby-plain colored',
  },
  r: {
    key: 'r',
    id: 'r',
    nickname: 'R',
    type: 'programming',
    description: t(
      'Linguagem estatística para análise de dados.',
      'Statistical language for data analysis.'
    ),
    icon: 'devicon-r-plain colored',
  },
  sql: {
    key: 'sql',
    id: 'sql',
    nickname: 'SQL',
    type: 'programming',
    description: t(
      'Linguagem para gerenciamento de bancos de dados relacionais.',
      'Language for relational database management.'
    ),
    icon: 'devicon-mysql-plain colored',
  },
  liquid: {
    key: 'liquid',
    id: 'liquid',
    nickname: 'Liquid',
    type: 'markup',
    description: t(
      'Linguagem de template criada pelo Shopify para sites dinâmicos.',
      'Template language created by Shopify for dynamic websites.'
    ),
    icon: 'devicon-liquid-plain colored',
  },
} as const

export type LanguageDTO = LanguageBaseDTO | undefined