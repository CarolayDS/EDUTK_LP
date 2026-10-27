<script setup>
import mainPhoto3 from "../assets/images/hero3.svg";

// Filas del examen de muestra que se "corrigen" en la animación
const rows = [78, 64, 86, 58];
</script>

<template>
  <section class="hero et-on-dark" id="home-section">
    <div class="et-container hero__grid">
      <!-- Texto -->
      <div class="hero__copy">
        <h1 class="hero__title" style="animation-delay: 0.05s">
          <span class="hero__line">Más tiempo</span>
          <span class="hero__line hero__line--accent">para enseñar</span>
        </h1>
        <p class="hero__lead" style="animation-delay: 0.2s">
          <strong>Transformamos la enseñanza en el Perú.</strong>
          EduTek es una startup educativa peruana que aplica inteligencia artificial y automatización para
          reducir la carga operativa de los docentes y mejorar la calidad del aprendizaje de los estudiantes.
        </p>
        <div class="hero__actions" style="animation-delay: 0.35s">
          <a href="#features-section" class="et-btn et-btn--coral">Ver características</a>
          <a href="#pricing-section" class="et-btn et-btn--ghost">Ver precios</a>
        </div>
      </div>

      <!-- Visual: ilustración + examen que se corrige solo -->
      <div class="hero__visual">
        <div class="hero__panel">
          <img :src="mainPhoto3" alt="Ilustración de la plataforma EduTek" class="hero__img" />
        </div>

        <div class="exam" aria-hidden="true">
          <p class="exam__title">Examen de muestra</p>
          <ul class="exam__rows">
            <li v-for="(w, i) in rows" :key="i" class="exam__row">
              <svg class="exam__check" viewBox="0 0 24 24" width="22" height="22" focusable="false">
                <circle cx="12" cy="12" r="12" class="exam__dot" />
                <path
                  d="M6.5 12.4l3.8 3.8L17.6 8.6"
                  :style="{ animationDelay: 1.1 + i * 0.5 + 's' }"
                />
              </svg>
              <span class="exam__bar" :style="{ width: w + '%' }"></span>
            </li>
          </ul>
          <p class="exam__foot" style="animation-delay: 3.3s">Corregido en segundos</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  color: #fff;
  padding-top: calc(72px + clamp(40px, 7vw, 88px));
  padding-bottom: clamp(72px, 9vw, 120px);
  background-color: #141f5a;
  background-image: radial-gradient(60% 70% at 88% 8%, rgba(127, 156, 245, 0.3), rgba(127, 156, 245, 0) 62%),
    radial-gradient(45% 55% at 0% 100%, rgba(238, 90, 69, 0.14), rgba(238, 90, 69, 0) 70%);
  border-radius: 0 0 clamp(28px, 5vw, 56px) clamp(28px, 5vw, 56px);
}
/* trama de puntos muy suave */
.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1.5px);
  background-size: 24px 24px;
  pointer-events: none;
}
.hero__grid {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(44px, 7vw, 80px);
  align-items: center;
}

/* ---------- Texto ---------- */
.hero__title,
.hero__lead,
.hero__actions {
  animation: hero-in 0.9s var(--et-ease) both;
}
.hero__title {
  margin: 0 0 24px;
  font-family: var(--et-font-display);
  font-weight: 700;
  font-size: clamp(2.3rem, 6.4vw, 4.75rem);
  line-height: 1.04;
  letter-spacing: -0.03em;
  color: #fff;
}
.hero__line {
  display: block;
}
.hero__line--accent {
  color: var(--et-blue-400);
}
.hero__lead {
  margin: 0 0 32px;
  max-width: 52ch;
  font-size: 1.1rem;
  color: var(--et-blue-200);
}
.hero__lead strong {
  color: #fff;
  font-weight: 700;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

/* ---------- Visual ---------- */
.hero__visual {
  position: relative;
  padding-bottom: 44px;
}
.hero__panel {
  padding: clamp(16px, 3vw, 32px);
  background: var(--et-blue-50);
  border-radius: 28px;
  box-shadow: var(--et-shadow-lg);
  animation: hero-in 1s 0.2s var(--et-ease) both;
}
.hero__img {
  display: block;
  width: 100%;
  height: auto;
}

.exam {
  position: absolute;
  left: 14px;
  bottom: 0;
  width: min(270px, 74%);
  padding: 16px 18px 14px;
  background: #fff;
  color: var(--et-ink);
  border-radius: 18px;
  box-shadow: var(--et-shadow-lg);
  animation: exam-in 0.8s 0.7s var(--et-ease) both;
}
.exam__title {
  margin: 0 0 12px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 0.82rem;
  color: var(--et-muted);
}
.exam__rows {
  display: grid;
  gap: 11px;
  margin: 0 0 14px;
  padding: 0;
  list-style: none;
}
.exam__row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.exam__check {
  flex: none;
}
.exam__dot {
  fill: var(--et-blue-100);
}
.exam__check path {
  fill: none;
  stroke: var(--et-coral-600);
  stroke-width: 2.6;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 22;
  stroke-dashoffset: 22;
  animation: draw 0.45s ease-out forwards;
}
.exam__bar {
  display: block;
  height: 8px;
  border-radius: 8px;
  background: var(--et-blue-100);
}
.exam__foot {
  margin: 0;
  padding-top: 10px;
  border-top: 1px solid var(--et-line);
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 0.82rem;
  color: var(--et-navy-800);
  opacity: 0;
  animation: fade-in 0.5s ease-out forwards;
}

@keyframes hero-in {
  from {
    opacity: 0;
    transform: translate3d(0, 22px, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes exam-in {
  from {
    opacity: 0;
    transform: translate3d(0, 26px, 0) scale(0.96);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes fade-in {
  to {
    opacity: 1;
  }
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  }
  .exam {
    left: -28px;
  }
}
</style>
