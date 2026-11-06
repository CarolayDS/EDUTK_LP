<script setup>
import personPhoto from "../assets/images/teacher.png";
import { vReveal } from "../directives/reveal";

const heading = "Servicio de Inteligencia Artificial";
const subHeading = "Educación inteligente con IA";
const quote =
  "Antes pasaba horas corrigiendo exámenes, ahora EduTek lo hace en minutos. Gracias a esta plataforma, dedico más tiempo a preparar actividades dinámicas y a motivar a mis estudiantes.";
const personName = "María Aguirre";
const designation = "Docente de CyT - Santa María";

const youtubeVideoUrl =
  "https://www.youtube.com/embed/O4hzm-AaVHI?autoplay=1&mute=1&loop=1&playlist=O4hzm-AaVHI&playsinline=1";
</script>

<template>
  <section class="et-section et-section--tint" id="features-section">
    <div class="et-container">
      <div class="svc">
        <!-- Texto -->
        <div class="svc__copy" v-reveal>
          <h2 class="et-title">{{ heading }}</h2>
          <p class="svc__sub">{{ subHeading }}</p>
          <p class="svc__intro">
            En EduTek transformamos la manera en que los docentes trabajan. Nuestra plataforma con inteligencia
            artificial automatiza procesos como:
          </p>

          <ul class="feat">
            <li class="feat__item">
              <span class="feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="4" y="3" width="16" height="18" rx="3" />
                  <path d="M8.5 12.5l2.4 2.4 4.6-4.9" />
                </svg>
              </span>
              <span>Corrección de exámenes en segundos, con resultados precisos y justos.</span>
            </li>
            <li class="feat__item">
              <span class="feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9z" />
                  <path d="M14 3v6h6M12 12v5M9.5 14.5h5" />
                </svg>
              </span>
              <span>Generación de exámenes adaptados a diferentes niveles y estilos de aprendizaje.</span>
            </li>
            <li class="feat__item">
              <span class="feat__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
                  <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
                </svg>
              </span>
              <span>Herramientas de IA que apoyan la creación de materiales educativos innovadores y personalizados.</span>
            </li>
          </ul>
        </div>

        <!-- Video -->
        <div class="svc__video" v-reveal="140">
          <div class="video">
            <iframe
              :src="https://www.youtube.com/watch?v=sHv8MFSff_c"
              title="Video de presentación de EduTek"
              loading="lazy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Testimonio destacado -->
      <figure class="quote et-on-dark" v-reveal>
        <svg class="quote__mark" viewBox="0 0 48 48" width="44" height="44" aria-hidden="true" focusable="false">
          <path d="M20 10C11.7 12.4 6 19.3 6 28v10h14V26h-7c.3-5 3.2-8.6 7-10zM42 10c-8.3 2.4-14 9.3-14 18v10h14V26h-7c.3-5 3.2-8.6 7-10z" />
        </svg>
        <blockquote class="quote__text">“{{ quote }}”</blockquote>
        <figcaption class="quote__author">
          <img :src="personPhoto" :alt="personName" class="quote__pic" width="52" height="52" loading="lazy" />
          <span>
            <strong class="quote__name">{{ personName }}</strong>
            <span class="quote__role">{{ designation }}</span>
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.svc {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
}
.svc__sub {
  margin: -4px 0 18px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--et-blue-600);
}
.svc__intro {
  margin: 0 0 26px;
  color: var(--et-muted);
}

.feat {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.feat__item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 18px;
  background: #fff;
  border: 1px solid var(--et-line);
  border-radius: 18px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.feat__item:hover {
  border-color: var(--et-blue-400);
  box-shadow: var(--et-shadow-md);
  transform: translateY(-2px);
}
.feat__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--et-navy-800);
  color: var(--et-blue-200);
}

/* video 16:9 (con respaldo por padding para navegadores antiguos) */
.video {
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  background: var(--et-navy-900);
  border-radius: 24px;
  box-shadow: var(--et-shadow-lg);
}
.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* testimonio destacado */
.quote {
  position: relative;
  display: grid;
  gap: 22px;
  margin: clamp(40px, 6vw, 72px) 0 0;
  padding: clamp(28px, 4vw, 48px);
  border-radius: 28px;
  background: var(--et-navy-800);
  color: #fff;
  overflow: hidden;
}
.quote::after {
  content: "";
  position: absolute;
  top: -40%;
  right: -10%;
  width: 55%;
  height: 160%;
  background: radial-gradient(closest-side, rgba(127, 156, 245, 0.28), rgba(127, 156, 245, 0));
  pointer-events: none;
}
.quote__mark {
  fill: var(--et-coral-500);
}
.quote__text {
  position: relative;
  z-index: 1;
  margin: 0;
  max-width: 62ch;
  font-family: var(--et-font-display);
  font-weight: 500;
  font-size: clamp(1.1rem, 2.2vw, 1.45rem);
  line-height: 1.5;
}
.quote__author {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 14px;
}
.quote__pic {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--et-blue-400);
  background: var(--et-navy-700);
}
.quote__name {
  display: block;
  font-family: var(--et-font-display);
  font-weight: 600;
}
.quote__role {
  display: block;
  font-size: 0.92rem;
  color: var(--et-blue-200);
}

@media (min-width: 960px) {
  .svc {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
}
</style>
