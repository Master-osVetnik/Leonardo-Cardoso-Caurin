<script setup lang="ts">
import Card from 'primevue/card'
import type { Cliente } from '@/data/Works/Index'

defineProps<{
  client: Cliente
}>()
</script>

<template>
  <Card class="client-card">
    <template #title>
      <div class="client-header">
        <i v-if="!client.logo" class="pi pi-user client-icon" />
        <img v-else :src="client.logo" :alt="client.title" class="client-logo" />
        <span>{{ client.title }}</span>
      </div>
    </template>
    <template #content v-if="client.site">
      <a :href="client.site" target="_blank" rel="noopener noreferrer" class="client-link">
        <i class="pi pi-external-link" /> {{ client.site }}
      </a>
    </template>
  </Card>
</template>

<style scoped>
.client-card {
  transition: transform 0.2s;
}

.client-card:hover {
  transform: translateY(-2px);
}

.client-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.client-icon {
  font-size: 1.5rem;
  color: var(--p-primary-400);
}

.client-logo {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  object-fit: contain;
}

.client-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--p-primary-500);
}

.client-link:hover {
  text-decoration: underline;
}
</style>
