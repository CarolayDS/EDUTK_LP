<script setup>
import mainPhoto1 from "../assets/images/info_edutk.png";
import { vReveal } from "../directives/reveal";

const heading = "¿Quiénes somos?";
</script>

<template>
  <section class="et-section" id="about-section">
    <div class="et-container about">
      <div class="about__media" v-reveal>
        <img :src="mainPhoto1" alt="Equipo y plataforma EduTek" class="about__img" loading="lazy" />
      </div>

      <div class="about__copy" v-reveal="120">
        <h2 class="et-title">{{ heading }}</h2>
        <p class="about__p">
          Somos EduTek, un equipo de jóvenes innovadores comprometidos con transformar la educación en el Perú a
          través de la tecnología. Creemos que los docentes son el motor de la enseñanza y que, liberándolos de
          tareas repetitivas, pueden enfocarse en lo más importante: conectar con sus estudiantes y brindar una
          educación de calidad.
        </p>
        <p class="about__p">
          Nuestro propósito es ofrecer
          <strong class="about__em"
            >herramientas que automaticen procesos, reduzcan la carga laboral y abran nuevas oportunidades
            educativas</strong
          >, generando un impacto positivo en docentes y estudiantes.
        </p>
        <ul class="et-checks about__list">
          <li>Automatización en la corrección de exámenes para docentes</li>
          <li>Generación de exámenes personalizados</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(36px, 6vw, 72px);
  align-items: center;
}

.about__media {
  position: relative;
  isolation: isolate;
}
/* bloque de color detrás de la imagen */
.about__media::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 22px;
  left: -14px;
  right: 14px;
  bottom: -22px;
  border-radius: 28px;
  background: var(--et-blue-100);
}
.about__img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: var(--et-shadow-md);
}

.about__p {
  margin: 0 0 18px;
  color: var(--et-muted);
}
.about__em {
  font-weight: 700;
  color: var(--et-navy-800);
}
.about__list {
  margin-top: 26px;
  color: var(--et-ink);
  font-weight: 600;
}

@media (min-width: 900px) {
  .about {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  }
}
</style>
