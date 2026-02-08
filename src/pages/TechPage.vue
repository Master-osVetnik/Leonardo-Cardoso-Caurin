<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import TechCard from '@/components/cards/TechCard.vue'
import {
  LANGUAGES,
  FRAMEWORKS,
  LIBRARIES,
  DATABASES,
  TOOLS,
  CLOUD_PLATFORMS,
  RUNTIMES,
} from '@/data/Tecnologias'

const { t } = useI18n()

const sections = [
  { key: 'languages', label: 'tech.sections.languages', data: LANGUAGES, icon: 'pi pi-code' },
  { key: 'frameworks', label: 'tech.sections.frameworks', data: FRAMEWORKS, icon: 'pi pi-box' },
  { key: 'libraries', label: 'tech.sections.libraries', data: LIBRARIES, icon: 'pi pi-database' },
  { key: 'databases', label: 'tech.sections.databases', data: DATABASES, icon: 'pi pi-server' },
  { key: 'runtimes', label: 'tech.sections.runtimes', data: RUNTIMES, icon: 'pi pi-cog' },
  { key: 'tools', label: 'tech.sections.tools', data: TOOLS, icon: 'pi pi-wrench' },
  { key: 'cloud', label: 'tech.sections.cloud', data: CLOUD_PLATFORMS, icon: 'pi pi-cloud' },
]
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
              <div class="grid-cards">
                <TechCard
                  v-for="(tech, id) in section.data"
                  :key="id"
                  :tech="tech"
                />
              </div>
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
</style>
