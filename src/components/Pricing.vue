<script setup>
import { vReveal } from "../directives/reveal";

const heading = "Precios";
const subHeading = "Precios para todos. ¡Elige tu plan ahora!";
const startButtonName = "Comenzar";
const startUrl = "https://edutk.vercel.app/";

const plans = [
  {
    name: "Freemium",
    price: "0",
    features: [
      "Creación de examen.",
      "Herramientas de IA para la preparación de clases.",
      "Webinar gratuito sobre la utilización de la IA.",
      "Corrección automatizada de exámenes para un aula de hasta 40 alumnos.",
    ],
  },
  {
    name: "Básico",
    price: "9",
    featured: true,
    features: [
      "Creación ilimitada de exámenes.",
      "Comunidad docente para compartir y colaborar.",
      "Hasta 3 aulas con corrección automatizada de exámenes.",
    ],
  },
  {
    name: "Premium",
    price: "19",
    features: [
      "Creación ilimitada de exámenes.",
      "Corrección automatizada ilimitada de exámenes.",
      "Soporte técnico ilimitado.",
    ],
  },
  {
    name: "Corporativo",
    price: "499 - 2000",
    range: true,
    features: [
      "Creación ilimitada de exámenes.",
      "Corrección automatizada de exámenes para toda la planilla docente.",
      "Soporte técnico ilimitado.",
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
            <h3 class="plan__name">{{ plan.name }}</h3>
            <p class="plan__price" :class="{ 'plan__price--range': plan.range }">
              <span class="plan__cur">S/</span><span class="plan__num">{{ plan.price }}</span>
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
    </div>
  </section>
</template>

<style scoped>
.plans {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 22px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.plans__cell {
  display: flex;
}

.plan {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 26px 28px;
  background: #fff;
  border: 1.5px solid var(--et-line);
  border-radius: 26px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
}
.plan:hover {
  border-color: var(--et-blue-400);
  box-shadow: var(--et-shadow-md);
  transform: translateY(-4px);
}
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
.plan__name {
  margin: 0 0 10px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--et-blue-600);
}
.plan--featured .plan__name {
  color: var(--et-blue-400);
}
.plan__price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin: 0 0 24px;
  padding-bottom: 22px;
  border-bottom: 1px solid var(--et-line);
  font-family: var(--et-font-display);
  font-weight: 700;
  color: var(--et-navy-800);
}
.plan--featured .plan__price {
  border-bottom-color: rgba(255, 255, 255, 0.16);
  color: #fff;
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
.plan__price--range .plan__num {
  font-size: 1.95rem;
}
.plan__list {
  flex: 1;
  margin-bottom: 28px;
  font-size: 0.97rem;
}
.plan--featured .plan__list {
  color: var(--et-blue-100);
}

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
</style>
