<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import Button from 'primevue/button'
import TechCard from '@/components/cards/TechCard.vue'
import { LANGUAGES } from '@/data/Tecnologias'

const { t } = useI18n()
const router = useRouter()

const grouped = computed(() => {
  const groups: Record<string, typeof LANGUAGES> = {
    programming: {},
    markup: {},
    stylesheet: {},
  }

  for (const [id, lang] of Object.entries(LANGUAGES)) {
    if (groups[lang.type]) {
      groups[lang.type]![id] = lang
    }
  }

  return groups
})
</script>

<template>
  <div class="languages-page">
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

        <h1 class="section-title">{{ t('tech.languagesPage.title') }}</h1>
        <p class="section-subtitle">{{ t('tech.languagesPage.subtitle') }}</p>

        <div
          v-for="(langs, type) in grouped"
          :key="type"
          class="lang-group"
        >
          <h2 class="group-title">
            {{ t(`tech.languagesPage.types.${type}`) }}
          </h2>
          <div class="grid-cards-sm">
            <TechCard
              v-for="(lang, id) in langs"
              :key="id"
              :tech="lang"
              :category="lang.type"
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

.lang-group {
  margin-bottom: 2.5rem;
}

.group-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--p-primary-500);
}
</style>
