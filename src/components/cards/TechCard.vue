<script setup lang="ts">

import { useRouter } from 'vue-router'

import { useLocalized } from '@/composables/useLocalized'
import Card from 'primevue/card'

const props = defineProps<{
  tech: { key?: string; nickname: string; description?: { pt: string; en: string }; icon?: string }
  subtitle?: string
}>()

const router = useRouter()
const { resolveText } = useLocalized()

function handleClick() {
  if (props.tech?.key) {
    router.push({ name: 'tech-detail', params: { key: props.tech.key } })
  }
}
</script>

<template>
  <Card class="tech-card clickable" @click="handleClick" role="button" tabindex="0">
    <template #title>
      <div class="tech-card-header">
        <i v-if="tech.icon" :class="tech.icon" />
        <span>{{ tech.nickname }}</span>
      </div>
    </template>
    <template #subtitle v-if="subtitle">
      {{ subtitle }}
    </template>
    <template #content>
      <p v-if="tech.description" class="tech-description">{{ resolveText(tech.description) }}</p>
    </template>
  </Card>
</template>

<style scoped>
.tech-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.tech-card.clickable {
  cursor: pointer;
}

.tech-card.clickable:hover {
  transform: translateY(-4px);
}

.tech-card:active {
  transform: translateY(-2px);
}

.tech-card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-icon {
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tech-description {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}
</style>
