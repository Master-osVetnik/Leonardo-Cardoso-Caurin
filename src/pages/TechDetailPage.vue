<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalized } from '@/composables/useLocalized'
import Button from 'primevue/button'
import Chip from 'primevue/chip'
import Tag from 'primevue/tag'
import TechCard from '@/components/cards/TechCard.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'

import {
  findTechByKey,
  getFrameworksByLanguage,
  getRuntimesByLanguage,
  getLibrariesByLanguage,
  getPackageManagersByLanguage,
  getPlatformsByLanguage,
  getFrameworksByLayer,
  getLibrariesByLayer,
  getPackageManagersByRuntime,
} from '@/data/Tecnologias'

import QUERY_PROJETOS from '@/data/Projetos'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const { resolveText } = useLocalized()

const techKey = computed(() => route.params.key as string)
const lookup = computed(() => findTechByKey(techKey.value))
const tech = computed(() => lookup.value?.tech ?? null)
const category = computed(() => lookup.value?.category ?? null)

// ====================================
// RELATED: Language → techs que usam
// ====================================
const relatedFrameworks = computed(() => {
  if (category.value !== 'languages') return []
  return getFrameworksByLanguage(techKey.value)
})

const relatedRuntimes = computed(() => {
  if (category.value !== 'languages') return []
  return getRuntimesByLanguage(techKey.value)
})

const relatedLibraries_byLang = computed(() => {
  if (category.value !== 'languages') return []
  return getLibrariesByLanguage(techKey.value)
})

const relatedPkgManagers_byLang = computed(() => {
  if (category.value !== 'languages') return []
  return getPackageManagersByLanguage(techKey.value)
})

const relatedPlatforms_byLang = computed(() => {
  if (category.value !== 'languages') return []
  return getPlatformsByLanguage(techKey.value)
})

// ====================================
// RELATED: Runtime → package managers
// ====================================
const relatedPkgManagers_byRuntime = computed(() => {
  if (category.value !== 'runtimes') return []
  return getPackageManagersByRuntime(techKey.value)
})

// ====================================
// RELATED: Layer → frameworks e libraries
// ====================================
const relatedFrameworks_byLayer = computed(() => {
  if (category.value !== 'layers') return []
  return getFrameworksByLayer(techKey.value)
})

const relatedLibraries_byLayer = computed(() => {
  if (category.value !== 'layers') return []
  return getLibrariesByLayer(techKey.value)
})

// ====================================
// RELATED: Languages/Layer/Runtime embutidos
// ====================================
const embeddedLanguages = computed(() => {
  if (!tech.value || category.value === 'languages') return []
  return (tech.value.languages ?? []).filter(Boolean)
})

const embeddedLayer = computed(() => {
  if (!tech.value || category.value === 'layers') return null
  return tech.value.layer ?? null
})

const embeddedRuntime = computed(() => {
  if (!tech.value || category.value === 'runtimes') return null
  return tech.value.runtime ?? null
})

// ====================================
// RELATED: Projetos que usam esta tech
// ====================================
const relatedProjects = computed(() => {
  if (!techKey.value) return []
  const key = techKey.value
  return QUERY_PROJETOS.getAllProjects().filter(p => {
    if (!p) return false
    return (
      p.languages?.some(l => l?.key === key) ||
      p.runtimes?.some(r => r?.key === key) ||
      p.databases?.some(d => d?.key === key) ||
      p.framework?.some(f => f?.key === key) ||
      p.libraries?.some(l => l?.key === key) ||
      p.tools?.some(tl => tl?.key === key) ||
      p.cloudPlatforms?.some(c => c?.key === key) ||
      p.platforms?.some(pl => pl?.key === key) ||
      p.package_managers?.some(pm => pm?.key === key)
    )
  })
})
</script>

<template>
  <div class="tech-detail-page">
    <section class="section">
      <div class="container">
        <div v-if="tech" class="tech-hero">
          <div class="tech-hero-main">
            <div class="tech-hero-icon">
              <i v-if="tech.icon" :class="tech.icon" />
            </div>
            <div class="tech-hero-content">
              <div class="tech-hero-header">
                <h1 class="tech-hero-title">{{ tech.nickname }}</h1>
                <div v-if="embeddedLayer" class="tech-layer-badge">
                  <Tag :value="embeddedLayer.nickname" severity="info" rounded class="layer-tag" />
                </div>
              </div>
              <div class="tech-hero-meta">
                <Chip v-if="category" :label="category" />
                <Chip v-if="tech.type && typeof tech.type === 'string'" :label="tech.type" />
                <Chip v-if="tech.category" :label="tech.category" />
              </div>
              <p v-if="tech.description" class="tech-hero-description">
                {{ resolveText(tech.description) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Projetos -->
        <div v-if="relatedProjects.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.projects') }}</h2>
          <div class="grid-cards">
            <ProjectCard
              v-for="project in relatedProjects"
              :key="project?.key"
              :project="project"
            />
          </div>
        </div>

        <!-- Linguagens embutidas -->
        <div v-if="embeddedLanguages.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.languages') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="lang in embeddedLanguages" :key="lang.key" :tech="lang" />
          </div>
        </div>

        

        <!-- Runtime embutido (para PackageManager) -->
        <div v-if="embeddedRuntime" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.runtimes') }}</h2>
          <div class="grid-cards-sm">
            <TechCard :tech="embeddedRuntime" />
          </div>
        </div>

        <!-- Language → Frameworks -->
        <div v-if="relatedFrameworks.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.frameworks') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="fw in relatedFrameworks" :key="fw.key" :tech="fw" />
          </div>
        </div>

        <!-- Language → Runtimes -->
        <div v-if="relatedRuntimes.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.runtimes') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="rt in relatedRuntimes" :key="rt.key" :tech="rt" />
          </div>
        </div>

        <!-- Language → Libraries -->
        <div v-if="relatedLibraries_byLang.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.libraries') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="lib in relatedLibraries_byLang" :key="lib.key" :tech="lib" />
          </div>
        </div>

        <!-- Language → Package Managers -->
        <div v-if="relatedPkgManagers_byLang.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.packageManagers') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="pm in relatedPkgManagers_byLang" :key="pm.key" :tech="pm" />
          </div>
        </div>

        <!-- Language → Platforms -->
        <div v-if="relatedPlatforms_byLang.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.platforms') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="p in relatedPlatforms_byLang" :key="p.key" :tech="p" />
          </div>
        </div>

        <!-- Runtime → Package Managers -->
        <div v-if="relatedPkgManagers_byRuntime.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.packageManagers') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="pm in relatedPkgManagers_byRuntime" :key="pm.key" :tech="pm" />
          </div>
        </div>

        <!-- Layer → Frameworks -->
        <div v-if="relatedFrameworks_byLayer.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.frameworks') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="fw in relatedFrameworks_byLayer" :key="fw.key" :tech="fw" />
          </div>
        </div>

        <!-- Layer → Libraries -->
        <div v-if="relatedLibraries_byLayer.length" class="tech-related-section">
          <h2 class="section-title">{{ t('tech.relationships.libraries') }}</h2>
          <div class="grid-cards-sm">
            <TechCard v-for="lib in relatedLibraries_byLayer" :key="lib.key" :tech="lib" />
          </div>
        </div>

        <!-- NOT FOUND -->
        <div v-if="!tech" class="tech-not-found">
          <i class="pi pi-exclamation-circle" />
          <h2>{{ t('tech.notFound') }}</h2>
          <Button
            :label="t('common.goHome')"
            icon="pi pi-home"
            @click="router.push('/tech')"
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
  display: flex;
  flex-direction: row;
  gap: 2rem;
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

.tech-layer-badge {
  display: flex;
  align-items: center;
}

.tech-layer-badge .layer-tag {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.tech-hero-main {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
  flex: 1;
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
  flex-shrink: 0;
}

.tech-hero-icon i {
  font-size: 4rem;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  background-clip: text;
}

.tech-hero-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-hero-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  justify-content: space-between;
}

.tech-hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  flex: 1;
}

.tech-hero-meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-hero-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
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
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }

  .tech-hero-main {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .tech-hero-icon {
    width: 100px;
    height: 100px;
    justify-self: center;
  }

  .tech-hero-icon i {
    font-size: 3rem;
  }

  .tech-hero-header {
    flex-direction: column;
    gap: 1rem;
  }

  .tech-hero-title {
    font-size: 2rem;
    text-align: center;
  }

  .tech-hero-meta {
    justify-content: center;
  }

  .tech-hero-description {
    text-align: center;
  }

  .tech-layer-badge {
    justify-content: center;
  }
}
</style>
