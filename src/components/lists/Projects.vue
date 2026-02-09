<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

import Filter from '@/components/lists/Filter.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'

import QUERY_PROJETOS, { type ProjetoDTO } from '@/data/Projetos'
import type { ListFilter } from '@/data/types'

const { t } = useI18n()

interface Props {
    filter?: ListFilter
    showFilters?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    filter: undefined,
    showFilters: true,
})

const allProjects: ProjetoDTO[] = QUERY_PROJETOS.getAllProjects()

//* Dados exibidos — atualizados pelo Filter via setData
const displayedProjects = ref<ProjetoDTO[]>([...allProjects])

function handleSetData(data: ProjetoDTO[]) {
    displayedProjects.value = data
}
</script>

<template>
    <section class="section">
        <div class="container">
            <h1 class="section-title">{{ t('projects.title') }}</h1>
            <p class="section-subtitle">{{ t('projects.subtitle') }}</p>
            <Filter 
                :items="allProjects"
                :filter="props.filter"
                :setData="handleSetData"
                :showFilters="props.showFilters"
            />
            <div class="grid-cards" v-if="displayedProjects.length">
                <ProjectCard
                    v-for="project in displayedProjects"
                    :key="project?.key"
                    :project="project"
                />
            </div>
            <p v-else class="no-results">{{ t('common.noResults') }}</p>
        </div>
    </section>
</template>


<style scoped>
.no-results {
  text-align: center;
  opacity: 0.6;
  padding: 3rem 0;
  font-size: 1.1rem;
}
</style>
