<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Skeleton from 'primevue/skeleton'
import TechCard from '@/components/cards/TechCard.vue'
import {
  LANGUAGES,
  FRAMEWORKS,
  LIBRARIES,
  DATABASES,
  TOOLS,
  CLOUD_PLATFORMS,
  RUNTIMES,
  PACKAGE_MANAGERS,
  PLATFORMS,
} from '@/data/Tech/index'

const { t } = useI18n()

interface TechSection {
  key: string
  label: string
  data: Record<string, any>
  icon: string
  loaded: boolean
}

const sections = ref<TechSection[]>([
  { key: 'languages', label: 'tech.sections.languages', data: LANGUAGES, icon: 'pi pi-code', loaded: false },
  { key: 'frameworks', label: 'tech.sections.frameworks', data: FRAMEWORKS, icon: 'pi pi-box', loaded: false },
  { key: 'libraries', label: 'tech.sections.libraries', data: LIBRARIES, icon: 'pi pi-database', loaded: false },
  { key: 'databases', label: 'tech.sections.databases', data: DATABASES, icon: 'pi pi-server', loaded: false },
  { key: 'runtimes', label: 'tech.sections.runtimes', data: RUNTIMES, icon: 'pi pi-cog', loaded: false },
  { key: 'tools', label: 'tech.sections.tools', data: TOOLS, icon: 'pi pi-wrench', loaded: false },
  { key: 'cloud', label: 'tech.sections.cloud', data: CLOUD_PLATFORMS, icon: 'pi pi-cloud', loaded: false },
  { key: 'packageManagers', label: 'tech.sections.packageManagers', data: PACKAGE_MANAGERS, icon: 'pi pi-box', loaded: false },
  { key: 'platforms', label: 'tech.sections.platforms', data: PLATFORMS, icon: 'pi pi-desktop', loaded: false },
])

// Loading progressivo — carrega categorias uma a uma com delay escalonado
onMounted(() => {
  sections.value.forEach((section, index) => {
    setTimeout(() => {
      section.loaded = true
    }, index * 120)
  })
})
</script>

<template>
  <div class="tech-page">
    <section class="section">
      <div class="container">
        <h1 class="section-title">{{ t('tech.title') }}</h1>
        <p class="section-subtitle">{{ t('tech.subtitle') }}</p>

        <Tabs value="languages" class="tech-tabs">
          <TabList>
            <Tab
              v-for="section in sections"
              :key="section.key"
              :value="section.key"
            >
              <i :class="section.icon" />
              {{ t(section.label) }}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel
              v-for="section in sections"
              :key="section.key"
              :value="section.key"
            >
              <!-- Skeleton loading -->
              <div v-if="!section.loaded" class="grid-cards">
                <div v-for="n in 6" :key="n" class="skeleton-card">
                  <Skeleton width="100%" height="1.5rem" class="skeleton-title" />
                  <Skeleton width="80%" height="0.9rem" class="skeleton-line" />
                  <Skeleton width="60%" height="0.9rem" class="skeleton-line" />
                </div>
              </div>

              <!-- Conteúdo real com animação de entrada -->
              <Transition name="fade-up" mode="out-in">
                <div v-if="section.loaded" class="grid-cards">
                  <TechCard
                    v-for="(tech, id) in section.data"
                    :key="id"
                    :tech="tech"
                  />
                </div>
              </Transition>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tech-tabs {
  margin-top: 2rem;
}

.tech-tabs :deep(.p-tablist) {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 0.5rem;
  gap: 0.5rem;
}

.p-dark .tech-tabs :deep(.p-tablist) {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-tabs :deep(.p-tab) {
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tech-tabs :deep(.p-tab i) {
  margin-right: 0.5rem;
}

.tech-tabs :deep(.p-tabpanel) {
  padding: 2rem 0;
}

/* Skeleton cards */
.skeleton-card {
  padding: 1.25rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.p-dark .skeleton-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skeleton-title {
  border-radius: 6px;
}

.skeleton-line {
  border-radius: 4px;
}

/* Fade-up transition */
.fade-up-enter-active {
  transition: all 0.4s ease;
}

.fade-up-leave-active {
  transition: all 0.2s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-up-leave-to {
  opacity: 0;
}
</style>
