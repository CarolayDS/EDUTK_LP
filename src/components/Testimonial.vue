<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
import { vReveal } from "../directives/reveal";

const heading = "Testimonios";
const subHeading = "Comentarios de nuestros clientes";

const testimonials = [
  {
    name: "Inés Ramos",
    designation: "Docente AIP, JPB",
    quote:
      "La IA hace que el proceso sea más eficiente y que pueda enfocarme en lo que realmente importa: el aprendizaje de mis alumnos.",
    photo: "images/teacher1.jpg",
  },
  {
    name: "Anderson Barrios",
    designation: "Docente DPCC, Santa Ana",
    quote:
      "Como docente, la plataforma EduTek ha sido una revolución, la corrección automática de exámenes me ha permitido dedicar más tiempo a la enseñanza personalizada. Los informes detallados y la retroalimentación instantánea que ofrece la IA me permiten ver claramente las áreas de mejora de cada estudiante.",
    photo: "images/teacher3.png",
  },
  {
    name: "Penélope Aguirre",
    designation: "Docente comunicación, San Vicente",
    quote:
      "La posibilidad de generar pruebas automáticamente y corregirlas al instante ha optimizado mi tiempo y mejorado la experiencia de aprendizaje.",
    photo: "images/teacher4.png",
  },
];

const track = ref(null);
const index = ref(0);
const failed = reactive({}); // si una foto no carga, se muestran las iniciales
let raf = 0;

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w.charAt(0))
    .join("")
    .toUpperCase();
}

function go(i) {
  const el = track.value;
  if (!el) return;
  const n = testimonials.length;
  const target = (i + n) % n;
  const left = target * el.clientWidth;
  if (typeof el.scrollTo === "function") {
    el.scrollTo({ left, behavior: "smooth" });
  } else {
    el.scrollLeft = left;
  }
}

function onScroll() {
  if (raf) return;
  raf = window.requestAnimationFrame(() => {
    raf = 0;
    const el = track.value;
    if (el && el.clientWidth) index.value = Math.round(el.scrollLeft / el.clientWidth);
  });
}

function onResize() {
  const el = track.value;
  if (el) el.scrollLeft = index.value * el.clientWidth;
}

onMounted(() => window.addEventListener("resize", onResize));
onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
  if (raf) window.cancelAnimationFrame(raf);
});
</script>

<template>
  <section class="et-section et-section--tint" id="testimonials-section">
    <div class="et-container tst">
      <div class="tst__head" v-reveal>
        <h2 class="et-title">{{ heading }}</h2>
        <p class="et-lead">{{ subHeading }}</p>

        <div class="tst__nav">
          <button type="button" class="tst__btn" aria-label="Testimonio anterior" @click="go(index - 1)">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </button>
          <button type="button" class="tst__btn" aria-label="Testimonio siguiente" @click="go(index + 1)">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          <span class="tst__count" aria-live="polite">{{ index + 1 }} / {{ testimonials.length }}</span>
        </div>
      </div>

      <div class="tst__stage" v-reveal="120">
        <div
          ref="track"
          class="tst__track"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Testimonios de docentes"
          tabindex="0"
          @scroll.passive="onScroll"
        >
          <figure
            v-for="(t, i) in testimonials"
            :key="t.name"
            class="tst__slide"
            role="group"
            :aria-label="i + 1 + ' de ' + testimonials.length"
          >
            <div class="card">
              <svg class="card__mark" viewBox="0 0 48 48" width="40" height="40" aria-hidden="true" focusable="false">
                <path d="M20 10C11.7 12.4 6 19.3 6 28v10h14V26h-7c.3-5 3.2-8.6 7-10zM42 10c-8.3 2.4-14 9.3-14 18v10h14V26h-7c.3-5 3.2-8.6 7-10z" />
              </svg>
              <blockquote class="card__quote">“{{ t.quote }}”</blockquote>
              <figcaption class="card__author">
                <img
                  v-if="!failed[i]"
                  :src="t.photo"
                  :alt="t.name"
                  class="card__pic"
                  width="52"
                  height="52"
                  loading="lazy"
                  @error="failed[i] = true"
                />
                <span v-else class="card__pic card__pic--fallback" aria-hidden="true">{{ initials(t.name) }}</span>
                <span>
                  <strong class="card__name">{{ t.name }}</strong>
                  <span class="card__role">{{ t.designation }}</span>
                </span>
              </figcaption>
            </div>
          </figure>
        </div>

        <div class="tst__dots" role="group" aria-label="Elegir testimonio">
          <button
            v-for="(t, i) in testimonials"
            :key="'d-' + i"
            type="button"
            class="tst__dot"
            :class="{ 'is-on': index === i }"
            :aria-label="'Ir al testimonio ' + (i + 1)"
            :aria-current="index === i ? 'true' : null"
            @click="go(i)"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tst {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(28px, 5vw, 56px);
  align-items: center;
}
.tst__nav {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 28px;
}
.tst__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  padding: 0;
  border: 2px solid var(--et-navy-800);
  border-radius: 50%;
  background: transparent;
  color: var(--et-navy-800);
  cursor: pointer;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
  -webkit-tap-highlight-color: transparent;
}
.tst__btn:hover {
  background: var(--et-navy-800);
  color: #fff;
  transform: translateY(-2px);
}
.tst__count {
  margin-left: 6px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--et-muted);
}

/* Carrusel nativo con scroll-snap (funciona con dedo, mouse y teclado) */
.tst__stage {
  min-width: 0;
}
.tst__track {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  border-radius: 28px;
}
.tst__track::-webkit-scrollbar {
  display: none;
}
.tst__slide {
  flex: 0 0 100%;
  min-width: 0;
  margin: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.card {
  height: 100%;
  padding: clamp(26px, 4vw, 44px);
  background: #fff;
  border: 1px solid var(--et-line);
  border-radius: 28px;
  box-shadow: var(--et-shadow-md);
}
.card__mark {
  display: block;
  margin-bottom: 18px;
  fill: var(--et-coral-500);
}
.card__quote {
  margin: 0 0 28px;
  font-family: var(--et-font-display);
  font-weight: 500;
  font-size: clamp(1.05rem, 1.9vw, 1.3rem);
  line-height: 1.55;
  color: var(--et-navy-800);
}
.card__author {
  display: flex;
  align-items: center;
  gap: 14px;
}
.card__pic {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--et-blue-200);
}
.card__pic--fallback {
  background: var(--et-navy-800);
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
}
.card__name {
  display: block;
  font-family: var(--et-font-display);
  font-weight: 600;
  color: var(--et-navy-800);
}
.card__role {
  display: block;
  font-size: 0.92rem;
  color: var(--et-muted);
}

.tst__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 22px;
}
.tst__dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 0;
  border-radius: 10px;
  background: var(--et-blue-200);
  cursor: pointer;
  transition: width 0.3s ease, background-color 0.3s ease;
}
.tst__dot.is-on {
  width: 30px;
  background: var(--et-coral-600);
}

@media (min-width: 960px) {
  .tst {
    grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
  }
}
</style>
