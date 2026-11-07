<script setup>
import { vReveal } from "../directives/reveal";

const heading = "Precios";
const subHeading = "Precios para todos. ¡Elige tu plan ahora!";
const startButtonName = "Comenzar";
const startUrl = "https://edutk.vercel.app/";
const footnote =
  "Precios en soles (S/). El plan Corporativo se cotiza según el número de alumnos.";

// Iconos de trazo (24x24), sin dependencias externas
const icons = {
  rocket:
    '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  landmark:
    '<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="m12 2 8 5H4z"/>',
};

const plans = [
  {
    name: "Gratuito",
    icon: "rocket",
    segment: "B2C · Versión de prueba",
    tagline: "Conoce la plataforma sin costo.",
    price: "0",
    features: [
      "Creación de examen.",
      "360 exámenes por mes.",
      "3 feedback automatizados.",
    ],
  },
  {
    name: "Básico",
    icon: "user",
    segment: "B2C · Docentes",
    tagline: "Para docentes que están empezando.",
    price: "15",
    period: "/ mes",
    featured: true,
    features: [
      "Funcionalidades básicas para prueba y adquisición orgánica.",
      "Límite ampliado de correcciones y aulas.",
    ],
  },
  {
    name: "Premium",
    icon: "users",
    segment: "B2C · Docentes",
    tagline: "Para quienes usan la plataforma todo el semestre.",
    price: "49",
    period: "/ semestral",
    features: [
      "Creación ilimitada de exámenes.",
      "Límite ampliado de correcciones y aulas.",
      "Corrección ilimitada, analíticas avanzadas y soporte prioritario.",
    ],
  },
  {
    name: "Corporativo",
    icon: "landmark",
    segment: "B2B · Colegios",
    tagline: "Para colegios e instituciones educativas.",
    prefix: "Desde",
    price: "100",
    period: "alumno/año",
    features: [
      "Licencia institucional por volumen de docentes.",
      "Dashboards de rendimiento académico para directivos e integración con sistemas de gestión escolar.",
    ],
  },
];
</script>

<template>
  <section class="et-section" id="pricing-section">
    <div class="et-container">
      <div class="et-head" v-reveal>
        <h2 class="et-title">{{ heading }}</h2>
        <p class="et-lead">{{ subHeading }}</p>
      </div>

      <ul class="plans">
        <li v-for="(plan, i) in plans" :key="plan.name" class="plans__cell" v-reveal="i * 80">
          <article class="plan" :class="{ 'plan--featured': plan.featured }">
            <span v-if="plan.featured" class="plan__badge">Recomendado</span>

            <span class="plan__icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                v-html="icons[plan.icon]"
              ></svg>
            </span>

            <span class="plan__segment">{{ plan.segment }}</span>
            <h3 class="plan__name">{{ plan.name }}</h3>
            <p class="plan__tagline">{{ plan.tagline }}</p>

            <p class="plan__price">
              <span v-if="plan.prefix" class="plan__pre">{{ plan.prefix }}</span>
              <span class="plan__cur">S/</span>
              <span class="plan__num">{{ plan.price }}</span>
              <span v-if="plan.period" class="plan__per">{{ plan.period }}</span>
            </p>

            <ul class="et-checks plan__list" :class="{ 'et-checks--dark': plan.featured }">
              <li v-for="f in plan.features" :key="f">{{ f }}</li>
            </ul>

            <a
              :href="startUrl"
              class="et-btn et-btn--block"
              :class="plan.featured ? 'et-btn--coral' : 'et-btn--outline'"
              >{{ startButtonName }}</a
            >
          </article>
        </li>
      </ul>

      <p class="plans__note" v-reveal>{{ footnote }}</p>
    </div>
  </section>
</template>

<style scoped>
.plans {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 22px;
  margin: 0;
  padding: 18px 0 0;
  list-style: none;
}
.plans__cell {
  display: flex;
}
.plans__note {
  margin: 36px 0 0;
  text-align: center;
  font-size: 0.88rem;
  color: var(--et-muted);
}

/* Tarjeta */
.plan {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 26px 28px;
  background: #fff;
  border: 1.5px solid var(--et-line);
  border-radius: 24px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.plan:hover {
  border-color: var(--et-blue-400);
  box-shadow: var(--et-shadow-md);
  transform: translateY(-4px);
}

/* Plan destacado: el único elemento con peso visual extra */
.plan--featured {
  background: var(--et-navy-800);
  border-color: var(--et-navy-800);
  color: #fff;
  box-shadow: var(--et-shadow-lg);
}
.plan--featured:hover {
  border-color: var(--et-blue-400);
}
.plan__badge {
  position: absolute;
  top: -14px;
  left: 26px;
  padding: 5px 14px;
  border-radius: 999px;
  background: var(--et-coral-600);
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 0.78rem;
  color: #fff;
}

/* Icono */
.plan__icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  margin-bottom: 18px;
  border-radius: 50%;
  background: var(--et-navy-800);
  color: #fff;
}
.plan__icon svg {
  width: 26px;
  height: 26px;
}
.plan--featured .plan__icon {
  background: var(--et-coral-600);
}

/* Segmento (B2C / B2B) */
.plan__segment {
  align-self: flex-start;
  margin-bottom: 16px;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(54, 80, 180, 0.09);
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--et-blue-600);
}
.plan--featured .plan__segment {
  background: rgba(255, 255, 255, 0.12);
  color: var(--et-blue-200);
}

/* Nombre y descripción */
.plan__name {
  margin: 0 0 6px;
  font-family: var(--et-font-display);
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: -0.01em;
  color: var(--et-navy-800);
}
.plan--featured .plan__name {
  color: #fff;
}
.plan__tagline {
  min-height: 2.8em;
  margin: 0 0 22px;
  font-size: 0.92rem;
  line-height: 1.4;
  color: var(--et-muted);
}
.plan--featured .plan__tagline {
  color: var(--et-blue-200);
}

/* Precio */
.plan__price {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0 0 24px;
  padding: 20px 0 22px;
  border-top: 1px solid var(--et-line);
  border-bottom: 1px solid var(--et-line);
  font-family: var(--et-font-display);
  font-weight: 700;
  color: var(--et-navy-800);
}
.plan--featured .plan__price {
  border-color: rgba(255, 255, 255, 0.16);
  color: #fff;
}
.plan__pre {
  font-size: 0.9rem;
  font-weight: 600;
}
.plan__cur {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--et-muted);
}
.plan--featured .plan__cur {
  color: var(--et-blue-200);
}
.plan__num {
  font-size: 2.9rem;
  line-height: 1;
  letter-spacing: -0.03em;
}
.plan__per {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--et-muted);
}
.plan--featured .plan__per {
  color: var(--et-blue-200);
}

/* Características */
.plan__list {
  flex: 1;
  margin-bottom: 28px;
  font-size: 0.95rem;
  line-height: 1.5;
}
.plan--featured .plan__list {
  color: var(--et-blue-100);
}

/* Responsive */
@media (min-width: 640px) {
  .plans {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1100px) {
  .plans {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (prefers-reduced-motion: reduce) {
  .plan,
  .plan:hover {
    transition: none;
    transform: none;
  }
}
</style>
