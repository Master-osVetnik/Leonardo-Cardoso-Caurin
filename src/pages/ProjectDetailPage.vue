<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalized } from '@/composables/useLocalized'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import ClientCard from '@/components/cards/ClientCard.vue'
import WorkCard from '@/components/cards/WorkCard.vue'
import { PROJETOS } from '@/data/Projetos'
import { CLIENTES, EMPRESAS } from '@/data/Trabalhos'
import { TECH_DATABASE } from '@/data/Tecnologias'

const { t } = useI18n()
const { resolveText } = useLocalized()
const route = useRoute()
const router = useRouter()

const project = computed(() => {
  const id = route.params.id as string
  return PROJETOS[id] || null
})

const client = computed(() => {
  if (!project.value?.clientId) return null
  return CLIENTES[project.value.clientId] || null
})

const company = computed(() => {
  if (!project.value?.companyId) return null
  return EMPRESAS[project.value.companyId] || null
})

function getTechInfo(techId: string): { nickname: string; icon?: string } {
  for (const category of Object.values(TECH_DATABASE)) {
    if (techId in category) {
      const item = (category as Record<string, { nickname: string; icon?: string }>)[techId]
      if (item) return item
    }
  }
  return { nickname: techId }
}
</script>

<template>
  <div class="project-detail-page" v-if="project">
    <!-- HERO -->
    <section class="detail-hero section">
      <div class="container">
        <Button
          :label="t('common.back')"
          icon="pi pi-arrow-left"
          severity="secondary"
          text
          @click="router.push('/projects')"
          class="back-btn"
        />

        <div class="detail-hero-grid">
          <div class="detail-image">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
            />
            <div v-else class="detail-image-placeholder">
              <i class="pi pi-code" />
            </div>
          </div>

          <div class="detail-info">
            <h1 class="detail-title">{{ project.title }}</h1>
            <p class="detail-summary">{{ resolveText(project.summary) }}</p>

            <Button
              v-if="project.link"
              :label="t('projects.detail.visitSite')"
              icon="pi pi-external-link"
              as="a"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- DESCRIPTION -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('projects.detail.description') }}</h2>
        <p class="detail-description">{{ resolveText(project.description) }}</p>
      </div>
    </section>

    <!-- TECHNOLOGIES -->
    <section class="section tech-section" v-if="project.technologies.length">
      <div class="container">
        <h2 class="section-title">{{ t('projects.detail.techUsed') }}</h2>
        <div class="tech-list">
          <Tag
            v-for="techId in project.technologies"
            :key="techId"
            :value="getTechInfo(techId).nickname"
            severity="secondary"
            rounded
            class="tech-tag"
          />
        </div>
      </div>
    </section>

    <!-- RELATED: COMPANY & CLIENT -->
    <section class="section related-section" v-if="company || client">
      <div class="container">
        <div class="related-grid">
          <div v-if="company">
            <h3 class="related-label">{{ t('projects.detail.relatedWork') }}</h3>
            <WorkCard :company="company" />
          </div>
          <div v-if="client">
            <h3 class="related-label">{{ t('projects.detail.relatedClient') }}</h3>
            <ClientCard :client="client" />
          </div>
        </div>
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
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.75rem;
}

.detail-summary {
  font-size: 1.1rem;
  opacity: 0.8;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.detail-description {
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
  max-width: 800px;
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

.related-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.related-label {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .detail-hero-grid {
    grid-template-columns: 1fr;
  }

  .detail-title {
    font-size: 1.75rem;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
