<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLocalized } from '@/composables/useLocalized'
import Card from 'primevue/card'
import { TECH_DATABASE } from '@/data/Tecnologias'
import type { BaseEntity } from '@/data/Tecnologias/types'

const props = defineProps<{
  tech: BaseEntity & { nickname: string }
  category?: string
  techId?: string
}>()

const router = useRouter()
const { resolveText } = useLocalized()

// Descobrir categoria e ID da tecnologia
const techInfo = computed(() => {
  // Se categoria e ID foram passados, usar diretamente
  if (props.category && props.techId) {
    return { category: props.category, id: props.techId }
  }

  // Caso contrário, buscar nos dados
  const nickname = props.tech.nickname

  // Buscar em cada categoria
  for (const [id, lang] of Object.entries(TECH_DATABASE.languages)) {
    if (lang.nickname === nickname) return { category: 'languages', id }
  }
  for (const [id, fw] of Object.entries(TECH_DATABASE.frameworks)) {
    if (fw.nickname === nickname) return { category: 'frameworks', id }
  }
  for (const [id, lib] of Object.entries(TECH_DATABASE.libraries)) {
    if (lib.nickname === nickname) return { category: 'libraries', id }
  }
  for (const [id, db] of Object.entries(TECH_DATABASE.databases)) {
    if (db.nickname === nickname) return { category: 'databases', id }
  }
  for (const [id, rt] of Object.entries(TECH_DATABASE.runtimes)) {
    if (rt.nickname === nickname) return { category: 'runtimes', id }
  }
  for (const [id, tool] of Object.entries(TECH_DATABASE.tools)) {
    if (tool.nickname === nickname) return { category: 'tools', id }
  }
  for (const [id, cloud] of Object.entries(TECH_DATABASE.cloudPlatforms)) {
    if (cloud.nickname === nickname) return { category: 'cloud', id }
  }

  return null
})

const handleClick = () => {
  if (techInfo.value) {
    router.push(`/tech/${techInfo.value.category}/${techInfo.value.id}`)
  }
}
</script>

<template>
  <Card class="tech-card" :class="{ clickable: !!techInfo }" @click="handleClick">
    <template #title>
      <div class="tech-card-header">
        <i v-if="tech.icon" :class="tech.icon" class="tech-icon" />
        <span>{{ tech.nickname }}</span>
      </div>
    </template>
    <template #subtitle v-if="category">
      {{ category }}
    </template>
    <template #content>
      <p class="tech-description">{{ resolveText(tech.description) }}</p>
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
