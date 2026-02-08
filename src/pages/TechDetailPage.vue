<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import { useLocalized } from '@/composables/useLocalized'
import TechCard from '@/components/cards/TechCard.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'
import {
  TECH_DATABASE,
  TechStackQueries,
} from '@/data/Tecnologias'
import { PROJETOS } from '@/data/Projetos'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { resolveText } = useLocalized()

const category = computed(() => route.params.category as string)
const id = computed(() => route.params.id as string)

const tech = computed(() => {
  const cat = category.value
  if (cat === 'languages') return TECH_DATABASE.languages[id.value]
  if (cat === 'frameworks') return TECH_DATABASE.frameworks[id.value]
  if (cat === 'libraries') return TECH_DATABASE.libraries[id.value]
  if (cat === 'databases') return TECH_DATABASE.databases[id.value]
  if (cat === 'runtimes') return TECH_DATABASE.runtimes[id.value]
  if (cat === 'tools') return TECH_DATABASE.tools[id.value]
  if (cat === 'cloud') return TECH_DATABASE.cloudPlatforms[id.value]
  return null
})

// Relacionamentos
const relatedLanguages = computed(() => {
  const t = tech.value
  if (!t) return []
  
  if ('language' in t && t.language) {
    const lang = TECH_DATABASE.languages[t.language]
    return lang ? [lang] : []
  }
  
  if ('languages' in t && Array.isArray(t.languages)) {
    return t.languages.map((l: string) => TECH_DATABASE.languages[l]).filter(Boolean)
  }
  
  return []
})

const relatedRuntimes = computed(() => {
  const t = tech.value
  if (!t) return []
  
  if ('runtime' in t && typeof t.runtime === 'string') {
    const rt = TECH_DATABASE.runtimes[t.runtime]
    return rt ? [rt] : []
  }
  
  if ('runtimes' in t && Array.isArray(t.runtimes)) {
    return t.runtimes.map((r: string) => TECH_DATABASE.runtimes[r]).filter(Boolean)
  }
  
  return []
})

const relatedFrameworks = computed(() => {
  const cat = category.value
  if (cat === 'languages') {
    // Frameworks que usam esta linguagem
    const result = TechStackQueries.getByLanguage(id.value)
    return result.frameworks || []
  }
  return []
})

const relatedLibraries = computed(() => {
  const t = tech.value
  if (!t) return []
  
  if (category.value === 'frameworks') {
    // Bibliotecas comuns para este framework
    return Object.values(TECH_DATABASE.libraries).filter((lib: any) => {
      return lib.tags?.includes(id.value) || lib.frameworks?.includes(id.value)
    })
  }
  
  return []
})

const relatedDatabases = computed(() => {
  const cat = category.value
  if (cat === 'languages' || cat === 'frameworks') {
    // Databases comuns para esta linguagem/framework
    return Object.values(TECH_DATABASE.databases).slice(0, 4)
  }
  return []
})

const relatedProjects = computed(() => {
  return Object.entries(PROJETOS)
    .filter(([_, proj]) => proj.technologies.includes(id.value))
    .map(([projId, proj]) => ({ projectId: projId, ...proj }))
    .slice(0, 6)
})

const goBack = () => router.push('/tech')
</script>

<template>
  <div class="tech-detail-page">
    <section class="section">
      <div class="container">
        <Button
          :label="t('common.back')"
          icon="pi pi-arrow-left"
          text
          @click="goBack"
          class="back-button"
        />

        <div v-if="tech" class="tech-hero">
          <div class="tech-hero-icon">
            <i :class="tech.icon" />
          </div>
          <div class="tech-hero-content">
            <h1 class="tech-hero-title">{{ tech.nickname }}</h1>
            <div class="tech-hero-meta">
              <Chip :label="t(`tech.categories.${category}`)" />
              <Chip v-if="'type' in tech" :label="tech.type" />
              <Chip v-if="'layer' in tech" :label="tech.layer" />
            </div>
            <p class="tech-hero-description">
              {{ resolveText(tech.description) }}
            </p>
          </div>
        </div>

        <!-- Linguagens relacionadas -->
        <div v-if="relatedLanguages.length > 0" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.languages') }}</h2>
          <div class="grid-cards-sm">
            <TechCard
              v-for="lang in relatedLanguages.filter(Boolean)"
              :key="lang!.nickname"
              :tech="lang!"
            />
          </div>
        </div>

        <!-- Runtimes relacionados -->
        <div v-if="relatedRuntimes.length > 0" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.runtimes') }}</h2>
          <div class="grid-cards-sm">
            <TechCard
              v-for="runtime in relatedRuntimes.filter(Boolean)"
              :key="runtime!.nickname"
              :tech="runtime!"
            />
          </div>
        </div>

        <!-- Frameworks relacionados -->
        <div v-if="relatedFrameworks.length > 0" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.frameworks') }}</h2>
          <div class="grid-cards-sm">
            <TechCard
              v-for="framework in relatedFrameworks"
              :key="framework.nickname"
              :tech="framework"
            />
          </div>
        </div>

        <!-- Bibliotecas relacionadas -->
        <div v-if="relatedLibraries.length > 0" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.libraries') }}</h2>
          <div class="grid-cards-sm">
            <TechCard
              v-for="lib in relatedLibraries"
              :key="lib.nickname"
              :tech="lib"
            />
          </div>
        </div>

        <!-- Databases relacionados -->
        <div v-if="relatedDatabases.length > 0" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.databases') }}</h2>
          <div class="grid-cards-sm">
            <TechCard
              v-for="db in relatedDatabases"
              :key="db.nickname"
              :tech="db"
            />
          </div>
        </div>

        <!-- Projetos que usam esta tecnologia -->
        <div v-if="relatedProjects.length > 0" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.projects') }}</h2>
          <div class="grid-cards">
            <ProjectCard
              v-for="project in relatedProjects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>

        <div v-if="!tech" class="tech-not-found">
          <i class="pi pi-exclamation-circle" />
          <h2>{{ t('tech.notFound') }}</h2>
          <Button
            :label="t('common.goHome')"
            icon="pi pi-home"
            @click="router.push('/')"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.back-button {
  margin-bottom: 2rem;
}

.tech-hero {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
}

.p-dark .tech-hero {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-hero-icon {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.2), 
    rgba(139, 92, 246, 0.2)
  );
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
}

.tech-hero-icon i {
  font-size: 4rem;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-hero-meta {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.tech-hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

.tech-related-section {
  margin-bottom: 3rem;
}

.tech-related-section .section-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.tech-not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.tech-not-found i {
  font-size: 4rem;
  color: var(--color-accent-primary);
  margin-bottom: 1rem;
}

.tech-not-found h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .tech-hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .tech-hero-icon {
    justify-self: center;
  }

  .tech-hero-meta {
    justify-content: center;
  }

  .tech-hero-title {
    font-size: 2rem;
  }
}
</style>
