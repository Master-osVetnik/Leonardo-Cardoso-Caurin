<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLocalized } from '@/composables/useLocalized'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import { computed } from 'vue'
import type { ProjetoDTO } from '@/data/Projetos'

const props = defineProps<{
  project: ProjetoDTO
}>()

const router = useRouter()
const { resolveText } = useLocalized()

// Collect all technologies from the project
const allTechs = computed(() => {
  if (!props.project) return []

  const techs: Array<{ nickname: string }> = []
  
  props.project.languages?.forEach((l) => {
    if (l?.nickname) techs.push(l)
  })
  props.project.runtimes?.forEach((r) => {
    if (r?.nickname) techs.push(r)
  })
  props.project.databases?.forEach((d) => {
    if (d?.nickname) techs.push(d)
  })
  props.project.framework?.forEach((f) => {
    if (f?.nickname) techs.push(f)
  })
  props.project.libraries?.forEach((l) => {
    if (l?.nickname) techs.push(l)
  })
  props.project.tools?.forEach((t) => {
    if (t?.nickname) techs.push(t)
  })
  props.project.cloudPlatforms?.forEach((c) => {
    if (c?.nickname) techs.push(c)
  })
  
  return techs
})

function goToProject() {
  if (!props.project?.key) return
  router.push({ name: 'project-detail', params: { id: props.project.key } })
}
</script>

<template>
  <Card v-if="project" class="project-card" @click="goToProject" role="button" tabindex="0">
    <template #header>
      <div class="card-image">
        <img
          v-if="project.images?.[0]"
          :src="project.images[0]"
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
          v-for="tech in allTechs.slice(0, 5)"
          :key="tech.nickname"
          :value="tech.nickname"
          severity="secondary"
          rounded
        />
        <Tag
          v-if="allTechs.length > 5"
          :value="`+${allTechs.length - 5}`"
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
