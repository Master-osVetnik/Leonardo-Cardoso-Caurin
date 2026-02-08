<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, ref } from 'vue'
import Select from 'primevue/select'
import ProjectCard from '@/components/cards/ProjectCard.vue'
import { PROJETOS } from '@/data/Projetos'
import { TECH_DATABASE } from '@/data/Tecnologias'

const { t } = useI18n()

const allProjects = computed(() => Object.values(PROJETOS))

// Build tech filter options
const techOptions = computed(() => {
  const usedTechIds = new Set(allProjects.value.flatMap((p) => p.technologies))
  const options: { label: string; value: string }[] = []

  for (const techId of usedTechIds) {
    for (const category of Object.values(TECH_DATABASE)) {
      if (techId in category) {
        const item = (category as Record<string, { nickname: string }>)[techId]
        if (item?.nickname) {
          options.push({
            label: item.nickname,
            value: techId,
          })
        }
        break
      }
    }
  }
  return options.sort((a, b) => a.label.localeCompare(b.label))
})

const selectedTech = ref<string | null>(null)

const filteredProjects = computed(() => {
  if (!selectedTech.value) return allProjects.value
  return allProjects.value.filter((p) =>
    p.technologies.includes(selectedTech.value!)
  )
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
            :key="project.id"
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
