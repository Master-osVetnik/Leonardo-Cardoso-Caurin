<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { useLocalized } from '@/composables/useLocalized'
  import { useRouter } from 'vue-router'
  import Button from 'primevue/button'
  import Avatar from 'primevue/avatar'
  import Perfil from '@/data/Bio/Perfil'

  import Projects from '@/components/lists/Projects.vue'

  const { t } = useI18n()
  const { resolveText } = useLocalized()
  const router = useRouter()

</script>

<template>
  <div class="home-page">
    <!-- HERO SECTION -->
    <section class="hero section">
      <div class="container hero-grid">
        <div class="hero-avatar">
          <Avatar
            :image="Perfil.avatar"
            size="xlarge"
            shape="circle"
            class="avatar-img"
          />
        </div>
        <div class="hero-content">
          <p class="hero-greeting">{{ t('home.greeting') }}</p>
          <h1 class="hero-name">{{ Perfil.fullName }}</h1>
          <p class="hero-role">{{ t('home.role') }}</p>
          <p class="hero-resume">{{ resolveText(Perfil.resume) }}</p>
          <div class="hero-buttons">
            <Button
              :label="t('home.cta.projects')"
              icon="pi pi-folder"
              variant="filled"
              style="background-color: var(--color-text-desc); border-width: 0px;"
              @click="router.push('/projects')"
            />
            <Button
              :label="t('home.cta.about')"
              icon="pi pi-user"
              severity="secondary"
              outlined
              @click="router.push('/about')"
            />
            <Button
              :label="t('home.cta.contact')"
              icon="pi pi-envelope"
              severity="secondary"
              outlined
              @click="router.push('/about')"
            />
          </div>
        </div>
      </div>
    </section>

    <Projects 
      :filter="{ featured: true }"
      :showFilters="false"
    />
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
}

.hero-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3rem;
  align-items: center;
}

.avatar-img {
  width: 220px !important;
  height: 220px !important;
}

.avatar-img :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-greeting {
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 0.25rem;
}

.hero-name {
  font-size: 2.75rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 0.25rem;
}

.hero-role {
  font-size: 1.25rem;
  color: var(--color-text-desc);
  font-weight: 600;
  margin-bottom: 1rem;
}

.hero-resume {
  font-size: 1.05rem;
  opacity: 0.8;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 1.5rem;
}

.hero-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.projects-section {
  background: transparent;
}

:global(html.p-dark) .projects-section {
  background: rgba(255, 255, 255, 0.02);
}

.section-footer {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .hero-avatar {
    display: flex;
    justify-content: center;
  }

  .avatar-img {
    width: 160px !important;
    height: 160px !important;
  }

  .hero-name {
    font-size: 2rem;
  }

  .hero-resume {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }
}
</style>
