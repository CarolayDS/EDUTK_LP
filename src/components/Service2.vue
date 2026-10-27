<script setup>
import mainVideo from "../assets/images/entrevista.mp4";
import { vReveal } from "../directives/reveal";

const heading = "Una mirada desde el aula";
const subHeading =
  "Escucha cómo la tecnología puede devolverles tiempo a los docentes para acompañar a sus estudiantes.";

const items = [
  {
    id: 1,
    name: "Educación como motor de cambio",
    des: "La educación en el Perú es la base para transformar nuestra sociedad y dar nuevas oportunidades.",
  },
  {
    id: 2,
    name: "Comprender y apoyar a los niños",
    des: "No solo se trata de enseñar contenidos, sino de brindar apoyo emocional y comprensión a cada estudiante.",
  },
  {
    id: 3,
    name: "Más tiempo para lo humano",
    des: "Con herramientas como EduTek, los docentes pueden dedicar más tiempo a fortalecer la relación con sus alumnos.",
  },
  {
    id: 4,
    name: "Fortalecer la educación",
    des: "La tecnología debe ser un aliado para que los niños reciban apoyo y fortaleza en su aprendizaje.",
  },
];
</script>

<template>
  <section class="et-section et-section--dark et-on-dark">
    <div class="et-container">
      <div class="et-head" v-reveal>
        <h2 class="et-title">{{ heading }}</h2>
        <p class="et-lead">{{ subHeading }}</p>
      </div>

      <div class="int">
        <div class="int__video" v-reveal>
          <video class="int__player" controls muted loop autoplay playsinline preload="metadata">
            <source :src="mainVideo" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>

        <ul class="int__list">
          <li v-for="(item, i) in items" :key="item.id" class="int__item" v-reveal="i * 90">
            <span class="int__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <template v-if="item.id === 1">
                  <path d="M12 6.5C10.3 5.2 8 4.5 5 4.5v13c3 0 5.3.7 7 2 1.7-1.3 4-2 7-2v-13c-3 0-5.3.7-7 2z" />
                  <path d="M12 6.5v13" />
                </template>
                <template v-else-if="item.id === 2">
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                </template>
                <template v-else-if="item.id === 3">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M12 7.5V12l3 2" />
                </template>
                <template v-else>
                  <path d="M4 17l5.5-5.5 4 4L20 9" />
                  <path d="M15 9h5v5" />
                </template>
              </svg>
            </span>
            <div>
              <h3 class="int__name">{{ item.name }}</h3>
              <p class="int__des">{{ item.des }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.int {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
}
.int__video {
  overflow: hidden;
  border-radius: 24px;
  background: var(--et-navy-900);
  box-shadow: 0 30px 70px -28px rgba(0, 0, 0, 0.6);
}
.int__player {
  display: block;
  width: 100%;
  height: auto;
}

.int__list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.int__item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 18px 20px;
  border-radius: 18px;
  transition: background-color 0.25s ease;
}
.int__item:hover {
  background: rgba(255, 255, 255, 0.06);
}
.int__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(127, 156, 245, 0.18);
  color: var(--et-blue-400);
}
.int__name {
  margin: 0 0 4px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1.08rem;
  line-height: 1.35;
  color: #fff;
}
.int__des {
  margin: 0;
  color: var(--et-blue-200);
}

@media (min-width: 960px) {
  .int {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
}
</style>
