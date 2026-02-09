<script setup lang="ts">
import { useLocalized } from '@/composables/useLocalized'
import Card from 'primevue/card'


import {
  CATEGORY, // type CategoryDTO,
  type Empresa,
} from '@/data/Works/Index'

const props = defineProps<{
  company: Empresa
}>()

const { resolveText } = useLocalized()

const areaName = CATEGORY[props.company.category]
  ? resolveText(CATEGORY[props.company.category]!.title)
  : props.company.category
</script>

<template>
  <Card class="work-card">
    <template #title>
      <div class="work-header">
        <i v-if="!company.logo" class="pi pi-building work-icon" />
        <img v-else :src="company.logo" :alt="company.title" class="work-logo" />
        <div>
          <div>{{ company.title }}</div>
          <small class="work-area">{{ areaName }}</small>
        </div>
      </div>
    </template>
    <template #content>
      <p v-if="company.description" class="work-desc">
        {{ resolveText(company.description) }}
      </p>
      <a
        v-if="company.site"
        :href="company.site"
        target="_blank"
        rel="noopener noreferrer"
        class="work-link"
      >
        <i class="pi pi-external-link" /> {{ company.site }}
      </a>
    </template>
  </Card>
</template>

<style scoped>
.work-card {
  transition: transform 0.2s;
}

.work-card:hover {
  transform: translateY(-2px);
}

.work-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.work-icon {
  font-size: 1.5rem;
  color: var(--p-primary-400);
}

.work-logo {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  object-fit: contain;
}

.work-area {
  opacity: 0.6;
  font-size: 0.85rem;
}

.work-desc {
  font-size: 0.9rem;
  opacity: 0.75;
  margin-bottom: 0.5rem;
}

.work-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--p-primary-500);
}

.work-link:hover {
  text-decoration: underline;
}
</style>
