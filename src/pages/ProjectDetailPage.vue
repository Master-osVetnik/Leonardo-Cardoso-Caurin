<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalized } from '@/composables/useLocalized'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

import Button from 'primevue/button'
import Tag from 'primevue/tag'
import Carousel from 'primevue/carousel'

import QUERY_PROJETOS from '@/data/Projetos'

const { t } = useI18n()
const { resolveText } = useLocalized()
const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const id = route.params.id as string
  return QUERY_PROJETOS.getProjectById(id) ?? null
})

/** Coleta todas as tecnologias do projeto em um array plano */
const allTechs = computed(() => {
  if (!project.value) return []
  const techs: Array<{ nickname: string }> = []
  project.value.languages?.forEach(l => { if (l?.nickname) techs.push(l) })
  project.value.runtimes?.forEach(r => { if (r?.nickname) techs.push(r) })
  project.value.databases?.forEach(d => { if (d?.nickname) techs.push(d) })
  project.value.package_managers?.forEach(p => { if (p?.nickname) techs.push(p) })
  project.value.framework?.forEach(f => { if (f?.nickname) techs.push(f) })
  project.value.libraries?.forEach(l => { if (l?.nickname) techs.push(l) })
  project.value.tools?.forEach(t => { if (t?.nickname) techs.push(t) })
  project.value.cloudPlatforms?.forEach(c => { if (c?.nickname) techs.push(c) })
  project.value.platforms?.forEach(p => { if (p?.nickname) techs.push(p) })
  return techs
})

/** Formata status para exibição */
function formatStatus(status: string): string {
  const map: Record<string, string> = {
    'completed': t('projects.status.completed'),
    'in-progress': t('projects.status.inProgress'),
    'planned': t('projects.status.planned'),
    'on-hold': t('projects.status.onHold'),
    'cancelled': t('projects.status.cancelled'),
  }
  return map[status] || status
}

function statusSeverity(status: string) {
  const map: Record<string, string> = {
    'completed': 'success',
    'in-progress': 'info',
    'planned': 'warn',
    'on-hold': 'secondary',
    'cancelled': 'danger',
  }
  return (map[status] || 'secondary') as any
}
</script>

<template>
  <div class="project-detail-page" v-if="project">
    <!-- HERO -->
    <section class="detail-hero section">
      <div class="container">
        <div class="detail-hero-grid">
          <div class="detail-image">
            <img
              v-if="project.images?.[0]"
              :src="project.images[0]"
              :alt="project.title"
            />
            <div v-else class="detail-image-placeholder">
              <i class="pi pi-code" />
            </div>
          </div>

          <div class="detail-info">
            <Tag 
              :value="formatStatus(project.status)" 
              :severity="statusSeverity(project.status)" 
              rounded 
              class="status-tag"
            />
            <h1 class="detail-title">{{ project.title }}</h1>
            <p class="detail-summary">{{ resolveText(project.summary) }}</p>

            <div class="detail-meta" v-if="project.startDate || project.endDate">
              <span v-if="project.startDate" class="meta-item">
                <i class="pi pi-calendar" /> {{ project.startDate }}
                <template v-if="project.endDate"> — {{ project.endDate }}</template>
              </span>
            </div>

            <Button
              v-if="project.link"
              :label="t('projects.detail.visitSite')"
              icon="pi pi-external-link"
              as="a"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
            />
            <div 
              style="display: flex; flex-direction: column; gap: 1rem;"
            >
              <div class="tech-list">
                
                <Tag
                  v-for="tech in allTechs"
                  :key="tech.nickname"
                  :value="tech.nickname"
                  severity="info"
                  rounded
                  class="tech-tag"
                />
              </div>
              <div class="tech-list">
                <Tag
                  v-for="tag in project.tags"
                  :key="tag"
                  :value="tag"
                  severity="secondary"
                  rounded
                  class="tech-tag"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GALLERY (imagens adicionais) -->
    <section class="section">
      <Carousel 
        v-if="project.images && project.images.length > 1"
        :value="(project.images).slice(1)"
        :numVisible="3" 
        :num-scroll="1"
        circular :autoplayInterval="2000"
      >
        <template #item="{ data }">
          <div class="carousel-item">
            <img :src="data" :alt="project.title" />
          </div>
        </template>
      </Carousel>
    </section>

    <!-- DESCRIPTION -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('projects.detail.description') }}</h2>
        <p class="detail-description">{{ resolveText(project.description) }}</p>
      </div>
    </section>
  </div>

  <!-- NOT FOUND -->
  <div v-else class="section">
    <div class="container" style="text-align: center; padding: 4rem 0">
      <h2>{{ t('common.noResults') }}</h2>
      <Button
        :label="t('common.back')"
        icon="pi pi-arrow-left"
        @click="router.push('/projects')"
        class="back-btn"
        style="margin-top: 1rem"
      />
    </div>
  </div>
</template>

<style scoped>
.detail-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0px;
}

.back-btn {
  margin-bottom: 1.5rem;
}

.detail-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
}

.detail-image {
  border-radius: 1rem;
  overflow: hidden;
}

.detail-image img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.detail-image-placeholder {
  width: 100%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--p-primary-50);
  color: var(--p-primary-300);
  font-size: 5rem;
  border-radius: 1rem;
}

:global(html.p-dark) .detail-image-placeholder {
  background: rgba(255, 255, 255, 0.04);
}

.detail-title {
  color: var(--color-text-desc);
  font-size: 2.5rem;
  font-weight: 800;
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.detail-summary {
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.status-tag {
  align-items: flex-start;
  margin-bottom: 0.75rem;
}

.detail-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  opacity: 0.7;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.detail-description {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
  max-width: 800px;
}

.gallery-carousel {
  padding: 0 1rem;
}

.carousel-item {
  padding: 0 0.5rem;
}

.carousel-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 0.75rem;
}

:deep(.p-carousel-content) {
  overflow: visible;
}

:deep(.p-carousel-item) {
  padding: 0.5rem;
}

.tech-section {
  background: var(--p-surface-50);
}

:global(html.p-dark) .tech-section {
  background: rgba(255, 255, 255, 0.02);
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.9rem;
  padding: 0.4rem 1rem;
}

@media (max-width: 768px) {
  .detail-hero-grid {
    grid-template-columns: 1fr;
  }

  .detail-title {
    font-size: 1.75rem;
  }
}
</style>
