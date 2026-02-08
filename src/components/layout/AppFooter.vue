<script setup lang="ts">
import { socialMediaLinks } from '@/data/Bio/Contact'
</script>

<template>
  <footer class="app-footer">
    <div class="footer-content container">
      <div class="footer-social">
        <a
          v-for="link in socialMediaLinks"
          :key="link.social"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          :aria-label="link.label"
        >
          <i :class="link.icon" />
        </a>
      </div>
      <p class="footer-copy">
        &copy; {{ new Date().getFullYear() }} Leonardo Cardoso Caurin
      </p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 2rem 0;
  text-align: center;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

:global(html.p-dark) .app-footer {
  border-top-color: rgba(255, 255, 255, 0.06);
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.social-link {
  font-size: 1.25rem;
  opacity: 0.6;
  transition: opacity 0.2s, color 0.2s;
}

.social-link:hover {
  opacity: 1;
  color: var(--p-primary-500);
}

.footer-copy {
  font-size: 0.85rem;
  opacity: 0.5;
}
</style>
