<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import Button from 'primevue/button'
import TechCard from '@/components/cards/TechCard.vue'
import { FRAMEWORKS, LAYERS } from '@/data/Tecnologias'

const { t } = useI18n()
const router = useRouter()

const groupedByLayer = computed(() => {
  const groups: Record<string, Record<string, (typeof FRAMEWORKS)[string]>> = {}

  for (const [id, fw] of Object.entries(FRAMEWORKS)) {
    const layerName = LAYERS[fw.layer]?.nickname || fw.layer
    if (!groups[layerName]) groups[layerName] = {}
    groups[layerName][id] = fw
  }

  return groups
})
</script>

<template>
  <div class="frameworks-page">
    <section class="section">
      <div class="container">
        <Button
          :label="t('common.back')"
          icon="pi pi-arrow-left"
          severity="secondary"
          text
          @click="router.push('/tech')"
          class="back-btn"
        />

        <h1 class="section-title">{{ t('tech.frameworksPage.title') }}</h1>
        <p class="section-subtitle">{{ t('tech.frameworksPage.subtitle') }}</p>

        <div
          v-for="(frameworks, layer) in groupedByLayer"
          :key="layer"
          class="fw-group"
        >
          <h2 class="group-title">{{ layer }}</h2>
          <div class="grid-cards-sm">
            <TechCard
              v-for="(fw, id) in frameworks"
              :key="id"
              :tech="fw"
              :category="t(`tech.frameworksPage.categories.${fw.category}`)"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.back-btn {
  margin-bottom: 1rem;
}

.fw-group {
  margin-bottom: 2.5rem;
}

.group-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--p-primary-500);
}
</style>
