<template>
  <div class="not-found-page">
    <div class="error-container">
      <div class="glitch-wrapper">
        <div class="glitch" data-text="404">404</div>
      </div>
      
      <h1 class="error-title">{{ t('notFound.title') }}</h1>
      <p class="error-description">{{ t('notFound.description') }}</p>
      
      <div class="error-actions">
        <router-link to="/" class="btn btn-primary">
          <i class="pi pi-home"></i>
          {{ t('notFound.backHome') }}
        </router-link>
        
        <button @click="goBack" class="btn btn-secondary">
          <i class="pi pi-arrow-left"></i>
          {{ t('notFound.goBack') }}
        </button>
      </div>
      
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found-page {
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, var(--surface-ground) 0%, var(--surface-section) 100%);
}

.error-container {
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 600px;
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glitch Effect */
.glitch-wrapper {
  margin-bottom: 2rem;
}

.glitch {
  font-size: clamp(6rem, 15vw, 12rem);
  font-weight: 900;
  line-height: 1;
  color: var(--primary-color);
  position: relative;
  animation: glitch-skew 1s infinite;
  text-shadow: 
    2px 2px 0 var(--primary-400),
    -2px -2px 0 var(--primary-600);
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  left: 2px;
  text-shadow: -2px 0 var(--red-500);
  clip: rect(24px, 9999px, 90px, 0);
  animation: glitch-anim 3s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: -2px 0 var(--blue-500);
  clip: rect(85px, 9999px, 140px, 0);
  animation: glitch-anim 2s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
  0% { clip: rect(61px, 9999px, 90px, 0); }
  20% { clip: rect(2px, 9999px, 82px, 0); }
  40% { clip: rect(46px, 9999px, 113px, 0); }
  60% { clip: rect(94px, 9999px, 35px, 0); }
  80% { clip: rect(115px, 9999px, 68px, 0); }
  100% { clip: rect(71px, 9999px, 21px, 0); }
}

@keyframes glitch-skew {
  0% { transform: skew(0deg); }
  10% { transform: skew(0.5deg); }
  20% { transform: skew(-0.5deg); }
  30% { transform: skew(0deg); }
  100% { transform: skew(0deg); }
}

/* Text */
.error-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
  animation: fadeInUp 0.8s ease-out 0.2s backwards;
}

.error-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-color-secondary);
  margin-bottom: 2.5rem;
  line-height: 1.6;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

/* Buttons */
.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease-out 0.6s backwards;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-family: inherit;
}

.btn-primary {
  background: var(--primary-color);
  color: var(--primary-color-text);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  background: var(--primary-600);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: var(--surface-card);
  color: var(--text-color);
  border: 2px solid var(--surface-border);
}

.btn-secondary:hover {
  background: var(--surface-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Floating Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.shape {
  position: absolute;
  opacity: 0.1;
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 100px;
  height: 100px;
  background: var(--primary-color);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  background: var(--blue-500);
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  top: 60%;
  right: 10%;
  animation-delay: -5s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  background: var(--purple-500);
  border-radius: 41% 59% 41% 59% / 41% 59% 41% 59%;
  bottom: 20%;
  left: 20%;
  animation-delay: -10s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  background: var(--pink-500);
  border-radius: 48% 52% 48% 52% / 62% 48% 52% 38%;
  top: 30%;
  right: 20%;
  animation-delay: -15s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(20px, -20px) rotate(90deg);
  }
  50% {
    transform: translate(-20px, 20px) rotate(180deg);
  }
  75% {
    transform: translate(20px, 20px) rotate(270deg);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .not-found-page {
    padding: 1rem;
  }
  
  .error-actions {
    flex-direction: column;
    width: 100%;
  }
  
  .btn {
    width: 100%;
    justify-content: center;
  }
  
  .shape {
    transform: scale(0.6);
  }
}
</style>
