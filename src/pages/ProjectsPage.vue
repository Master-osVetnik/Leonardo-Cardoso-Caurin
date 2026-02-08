<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import Select from 'primevue/select'
import ProjectCard from '@/components/cards/ProjectCard.vue'

import QUERY_PROJETOS, { type ProjetoDTO } from '@/data/Projetos'
import type {
  LanguageDTO, RuntimeDTO, DatabaseDTO, FrameworkDTO, 
  LibraryDTO, ToolDTO, CloudPlatformDTO
} from '@/data/Tecnologias/index'

const { t } = useI18n()

const allProjects: ProjetoDTO[] = QUERY_PROJETOS.getAllProjects()

// Build tech filter options from all technologies used in projects
const techOptions = computed(() => {
  const techMap = new Map<string, string>()

  // Collect all unique technologies with their nicknames
  for (const project of allProjects) {
    if (!project) continue
    
    // Language
    project.languages?.forEach((lang: LanguageDTO) => {
      if (lang?.nickname) techMap.set(lang.nickname, lang.nickname)
    })
    
    // Runtimes
    project.runtimes?.forEach((runtime: RuntimeDTO) => {
      if (runtime?.nickname) techMap.set(runtime.nickname, runtime.nickname)
    })
    
    // Databases
    project.databases?.forEach((db: DatabaseDTO) => {
      if (db?.nickname) techMap.set(db.nickname, db.nickname)
    })
    
    // Frameworks
    project.framework?.forEach((fw: FrameworkDTO) => {
      if (fw?.nickname) techMap.set(fw.nickname, fw.nickname)
    })
    
    // Libraries
    project.libraries?.forEach((lib: LibraryDTO) => {
      if (lib?.nickname) techMap.set(lib.nickname, lib.nickname)
    })
    
    // Tools
    project.tools?.forEach((tool: ToolDTO) => {
      if (tool?.nickname) techMap.set(tool.nickname, tool.nickname)
    })
    
    // Cloud Platforms
    project.cloudPlatforms?.forEach((cloud: CloudPlatformDTO) => {
      if (cloud?.nickname) techMap.set(cloud.nickname, cloud.nickname)
    })
  }

  const options = Array.from(techMap.values()).map(nickname => ({
    label: nickname,
    value: nickname,
  }))
  
  return options.sort((a, b) => a.label.localeCompare(b.label))
})

const selectedTech = ref<string | null>(null)

const filteredProjects = computed(() => {
  if (!selectedTech.value) return allProjects

  return allProjects.filter((project) => {
    if (!project) return false
    
    return (
      project.languages?.some(l => l?.nickname === selectedTech.value) ||
      project.runtimes?.some(r => r?.nickname === selectedTech.value) ||
      project.databases?.some(d => d?.nickname === selectedTech.value) ||
      project.framework?.some(f => f?.nickname === selectedTech.value) ||
      project.libraries?.some(l => l?.nickname === selectedTech.value) ||
      project.tools?.some(t => t?.nickname === selectedTech.value) ||
      project.cloudPlatforms?.some(c => c?.nickname === selectedTech.value)
    )
  })
})
</script>

<template>
  <div class="projects-page">
    <section class="section">
      <div class="container">
        <h1 class="section-title">{{ t('projects.title') }}</h1>
        <p class="section-subtitle">{{ t('projects.subtitle') }}</p>

        <div class="projects-filter" v-if="techOptions.length > 1">
          <label>{{ t('common.filterBy') }}:</label>
          <Select
            v-model="selectedTech"
            :options="[{ label: t('common.all'), value: null }, ...techOptions]"
            optionLabel="label"
            optionValue="value"
            :placeholder="t('common.technologies')"
            class="filter-select"
            showClear
          />
        </div>

        <div class="grid-cards" v-if="filteredProjects.length">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project?.title"
            :project="project"
          />
        </div>

        <p v-else class="no-results">{{ t('common.noResults') }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.projects-filter {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.projects-filter label {
  font-weight: 500;
  white-space: nowrap;
}

.filter-select {
  min-width: 200px;
}

.no-results {
  text-align: center;
  opacity: 0.6;
  padding: 3rem 0;
  font-size: 1.1rem;
}
</style>
