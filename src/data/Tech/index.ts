
import { getTableData } from '@/helpers/Tables'

import { LAYERS, type LayerDTO } from './Layers'
import { LANGUAGES, type LanguageDTO } from './Languages'
import { RUNTIMES, type RuntimeDTO } from './Runtimes'
import { DATABASES, type DatabaseDTO } from './Databases'
import { PACKAGE_MANAGERS, type PackageManagerDTO } from './PackageManagers'
import { LIBRARIES, type LibraryDTO } from './Libraries'
import { FRAMEWORKS, type FrameworkDTO } from './Frameworks'
import { CLOUD_PLATFORMS, type CloudPlatformDTO } from './CloudPlatforms'
import { TOOLS, type ToolDTO } from './Tools'
import { PLATFORMS, type PlatformDTO } from './Platforms'

export {
  LAYERS, type LayerDTO,
  LANGUAGES, type LanguageDTO,
  RUNTIMES, type RuntimeDTO,
  DATABASES, type DatabaseDTO,
  PACKAGE_MANAGERS, type PackageManagerDTO,
  LIBRARIES, type LibraryDTO,
  FRAMEWORKS, type FrameworkDTO,
  CLOUD_PLATFORMS, type CloudPlatformDTO,
  TOOLS, type ToolDTO,
  PLATFORMS, type PlatformDTO,
}

// ====================================
// TECH_DATABASE: Acesso centralizado
// ====================================

export const TECH_DATABASE = {
  languages: LANGUAGES,
  runtimes: RUNTIMES,
  databases: DATABASES,
  packageManagers: PACKAGE_MANAGERS,
  layers: LAYERS,
  frameworks: FRAMEWORKS,
  libraries: LIBRARIES,
  cloudPlatforms: CLOUD_PLATFORMS,
  tools: TOOLS,
  platforms: PLATFORMS,
} as const

export type TechCategory = keyof typeof TECH_DATABASE

export interface TechLookupResult {
  tech: any
  category: TechCategory
  key: string
}

/** Busca uma tecnologia pela key em TODOS os Records */
export function findTechByKey(searchKey: string): TechLookupResult | null {
  for (const [category, record] of Object.entries(TECH_DATABASE)) {
    if (searchKey in record) {
      return {
        tech: (record as Record<string, any>)[searchKey],
        category: category as TechCategory,
        key: searchKey,
      }
    }
  }
  return null
}

// ====================================
// QUERIES RELACIONAIS
// ====================================

export function getFrameworksByLanguage(langKey: string) {
  return Object.values(FRAMEWORKS).filter(fw =>
    fw.languages?.some((l: any) => l?.key === langKey)
  )
}

export function getRuntimesByLanguage(langKey: string) {
  return Object.values(RUNTIMES).filter(rt =>
    rt.languages?.some((l: any) => l?.key === langKey)
  )
}

export function getLibrariesByLanguage(langKey: string) {
  return Object.values(LIBRARIES).filter(lib =>
    lib.languages?.some((l: any) => l?.key === langKey)
  )
}

export function getPackageManagersByLanguage(langKey: string) {
  return Object.values(PACKAGE_MANAGERS).filter(pm =>
    pm.languages?.some((l: any) => l?.key === langKey)
  )
}

export function getPlatformsByLanguage(langKey: string) {
  return Object.values(PLATFORMS).filter(p =>
    p.languages?.some((l: any) => l?.key === langKey)
  )
}

export function getFrameworksByLayer(layerKey: string) {
  return Object.values(FRAMEWORKS).filter(fw =>
    fw.layer?.key === layerKey
  )
}

export function getLibrariesByLayer(layerKey: string) {
  return Object.values(LIBRARIES).filter(lib =>
    (lib as any).layer?.key === layerKey
  )
}

export function getPackageManagersByRuntime(runtimeKey: string) {
  return Object.values(PACKAGE_MANAGERS).filter(pm =>
    pm.runtime?.key === runtimeKey
  )
}

class helper{
  helper() {}
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
  static getPlatform(key: string) {
    return PLATFORMS[key] as PlatformDTO
  }
  static getPlatforms() {
    return getTableData(PLATFORMS) as PlatformDTO[]
  }
}

export default helper