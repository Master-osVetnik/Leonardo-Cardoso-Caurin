import type { LocalizedText } from '../types'

// ====================================
// TYPES & INTERFACES
// ====================================

export interface BaseEntity {
  nickname: string
  description: LocalizedText
  icon?: string
}

export interface Language extends BaseEntity {
  type: 'markup' | 'programming' | 'stylesheet'
}

export interface Runtime extends BaseEntity {
  tags: string[]
  languages: string[]
}

export interface Database extends BaseEntity {
  type: 'sql' | 'nosql'
  category: 'relational' | 'document' | 'key-value' | 'graph' | 'columnar'
}

export interface PackageManager extends BaseEntity {
  languages: string[]
  runtime?: string
}

export interface Layer extends BaseEntity {
  tags: string[]
  color?: string
}

export interface Framework extends BaseEntity {
  language: string
  layer: string
  category: 'framework' | 'meta-framework'
}

export interface Library extends BaseEntity {
  language: string
  layer?: string
  category: string
}

export interface CloudPlatform extends BaseEntity {
  services: string[]
}

export interface Tool extends BaseEntity {
  category: 'bundler' | 'testing' | 'linting' | 'versioning' | 'ci-cd'
}

export interface TechDatabase {
  languages: Record<string, Language>
  runtimes: Record<string, Runtime>
  databases: Record<string, Database>
  packageManagers: Record<string, PackageManager>
  layers: Record<string, Layer>
  frameworks: Record<string, Framework>
  libraries: Record<string, Library>
  cloudPlatforms: Record<string, CloudPlatform>
  tools: Record<string, Tool>
}
