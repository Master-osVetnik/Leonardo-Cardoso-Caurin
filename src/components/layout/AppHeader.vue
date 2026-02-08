<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'
import Button from 'primevue/button'
import Select from 'primevue/select'
import { ref, watch } from 'vue'

const { t, locale } = useI18n()
const { isDark, toggleDark } = useTheme()
const mobileMenuOpen = ref(false)

const navItems = [
  { label: 'nav.home', to: '/' },
  { label: 'nav.about', to: '/about' },
  { label: 'nav.projects', to: '/projects' },
  { label: 'nav.tech', to: '/tech' },
]

const localeOptions = [
  { label: 'PT', value: 'pt' },
  { label: 'EN', value: 'en' },
]

const selectedLocale = ref(locale.value)

watch(selectedLocale, (val) => {
  locale.value = val
})
</script>

<template>
  <header class="app-header">
    <div class="header-content container">
      <router-link to="/" class="header-logo">
        <span class="logo-text">{{"<LCC />"}}</span>
      </router-link>

      <nav class="header-nav" :class="{ 'is-open': mobileMenuOpen }">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          active-class="nav-link--active"
          :exact="item.to === '/'"
          @click="mobileMenuOpen = false"
        >
          {{ t(item.label) }}
        </router-link>
      </nav>

      <div class="header-actions">
        <Select
          v-model="selectedLocale"
          :options="localeOptions"
          optionLabel="label"
          optionValue="value"
          variant="filled"
          style="border: none; box-shadow: none; background-color: transparent;"
        />

        <Button
          :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"
          severity="secondary"
          text
          rounded
          @click="toggleDark()"
          :aria-label="isDark ? t('common.lightMode') : t('common.darkMode')"
        />

        <Button
          icon="pi pi-bars"
          severity="secondary"
          text
          rounded
          class="mobile-menu-btn"
          @click="mobileMenuOpen = !mobileMenuOpen"
          aria-label="Menu"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 1000;
  backdrop-filter: blur(12px);
  background: linear-gradient(135deg, var(--color-bg-gradient-from) 0%, var(--color-bg-gradient-to) 100%);
  border-bottom: 1px solid transparent;
  border-image: linear-gradient(90deg, transparent 0%, rgba(0, 124, 180, 0.8) 30%, rgba(0, 124, 180, 0.8) 70%, transparent 100%) 1;}

:global(html.p-dark) .app-header {
  background: rgba(10, 10, 10, 0.8);
  border-bottom-color: rgba(255, 255, 255, 0.06);
}

.header-content {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2rem;
}

.header-logo {
  font-weight: 800;
  font-size: 1.25rem;
  text-decoration: none;
}

.logo-text {
  background: var(--color-text-desc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-nav {
  display: flex;
  gap: 0.5rem;
  flex: 1;
}

.nav-link {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--color-text-desc);
  background: transparent;
}

:global(html.p-dark) .nav-link:hover {
  background: rgba(255, 255, 255, 0.05);
}

.nav-link--active {
  color: var(--color-text-desc);
  background: var(--color-accent-primary-alpha);
}

:global(html.p-dark) .nav-link--active {
  background: rgba(255, 255, 255, 0.08);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.locale-select {
  width: 5rem;
}

.mobile-menu-btn {
  display: none;
}

@media (max-width: 768px) {
  .mobile-menu-btn {
    display: inline-flex;
  }

  .header-nav {
    display: none;
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 1rem;
    background: inherit;
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }

  .header-nav.is-open {
    display: flex;
  }

  .locale-select {
    width: 4.5rem;
  }
}
</style>
