<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLocalized } from '@/composables/useLocalized'
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Perfil from '@/data/Bio/Perfil'

const { t } = useI18n()
const { resolveText } = useLocalized()

const activeTab = ref('0')
</script>

<template>
  <div class="about-page">
    <!-- HERO SECTION -->
    <section class="about-hero section">
      <div class="container about-hero-grid">
        <div class="about-avatar">
          <Avatar
            :image="Perfil.avatar"
            size="xlarge"
            shape="circle"
            class="avatar-lg"
          />
        </div>
        <div class="about-intro">
          <h1 class="section-title">{{ t('about.title') }}</h1>
          <p class="about-description">{{ resolveText(Perfil.description) }}</p>
        </div>
      </div>
    </section>

    <!-- TABS SECTION -->
    <section class="about-tabs section">
      <div class="container">
        <Tabs 
          v-model:value="activeTab"
        >
          <TabList>
            <Tab value="0">
              <i class="pi pi-briefcase" />
              {{ t('about.tabs.professional') }}
            </Tab>
            <Tab value="1">
              <i class="pi pi-heart" />
              {{ t('about.tabs.personal') }}
            </Tab>
            <!--
            <Tab value="2">
              <i class="pi pi-graduation-cap" />
              {{ t('about.tabs.teacher') }}
            </Tab>
            -->
          </TabList>
          <TabPanels>
            <TabPanel value="0">
              <div class="tab-content">
                <p>{{ resolveText(Perfil.professionalBio) }}</p>
              </div>
            </TabPanel>
            <TabPanel value="1">
              <div class="tab-content">
                <p>{{ resolveText(Perfil.personalBio) }}</p>
              </div>
            </TabPanel>
            <!--
            <TabPanel value="2">
              <div class="tab-content">
                <p>{{ resolveText(Perfil.teacherBio) }}</p>
              </div>
            </TabPanel>
            -->
          </TabPanels>
        </Tabs>
      </div>
    </section>

    <!-- HISTORY SECTION -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">{{ t('about.history.title') }}</h2>

        <div class="history-grid">
          <div class="history-block">
            <div class="history-header">
              <i class="pi pi-code history-icon" />
              <h3>{{ t('about.history.programmer') }}</h3>
            </div>
            <p>{{ resolveText(Perfil.professionalHistory.programmer) }}</p>
          </div>

          <div class="history-divider" />

          <div class="history-block">
            <div class="history-header">
              <i class="pi pi-compass history-icon" />
              <h3>{{ t('about.history.general') }}</h3>
            </div>
            <p>{{ resolveText(Perfil.professionalHistory.general) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-tabs{
  background: transparent;
}

.about-hero-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
}

.avatar-lg {
  width: 200px !important;
  height: 200px !important;
}

.avatar-lg :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
}

.tab-content {
  padding: 1.5rem 0;
  font-size: 1.05rem;
  line-height: 1.8;
  opacity: 0.85;
}

:global(html.p-dark) .about-history {
  background: transparent;
}

.history-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.history-block p {
  line-height: 1.8;
  opacity: 0.85;
  margin-top: 0.75rem;
}

.history-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.history-header h3 {
  font-size: 1.2rem;
  font-weight: 600;
}

.history-icon {
  font-size: 1.5rem;
  color: var(--p-primary-500);
}

.history-divider {
  width: 1px;
}

:global(html.p-dark) .history-divider {
  background: transparent
}

@media (max-width: 768px) {
  .about-hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .about-avatar {
    display: flex;
    justify-content: center;
  }

  .avatar-lg {
    width: 150px !important;
    height: 150px !important;
  }

  .history-grid {
    grid-template-columns: 1fr;
  }

  .history-divider {
    width: 100%;
    height: 1px;
  }
}
</style>
