<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLocalized } from '@/composables/useLocalized'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import type { Projeto } from '@/data/Projetos'
import { TECH_DATABASE } from '@/data/Tecnologias'

const props = defineProps<{
  project: Projeto
}>()

const router = useRouter()
const { resolveText } = useLocalized()

function getTechName(techId: string): string {
  for (const category of Object.values(TECH_DATABASE)) {
    if (techId in category) {
      const item = (category as Record<string, { nickname: string }>)[techId]
      return item?.nickname || techId
    }
  }
  return techId
}

function goToProject() {
  router.push({ name: 'project-detail', params: { id: props.project.id } })
}
</script>

<template>
  <Card class="project-card" @click="goToProject" role="button" tabindex="0">
    <template #header>
      <div class="card-image">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
        />
        <div v-else class="card-image-placeholder">
          <i class="pi pi-code" />
        </div>
      </div>
    </template>
    <template #title>
      {{ project.title }}
    </template>
    <template #subtitle>
      {{ resolveText(project.summary) }}
    </template>
    <template #content>
      <div class="card-tags">
        <Tag
          v-for="techId in project.technologies.slice(0, 5)"
          :key="techId"
          :value="getTechName(techId)"
          severity="secondary"
          rounded
        />
        <Tag
          v-if="project.technologies.length > 5"
          :value="`+${project.technologies.length - 5}`"
          severity="info"
          rounded
        />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.project-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

:global(html.p-dark) .project-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--p-primary-50);
  color: var(--p-primary-300);
  font-size: 3rem;
}

:global(html.p-dark) .card-image-placeholder {
  background: rgba(255, 255, 255, 0.04);
  color: var(--p-primary-700);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
</style>
