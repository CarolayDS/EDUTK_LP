<script setup>
import { vReveal } from "../directives/reveal";

const heading = "¿Por qué elegir EduTek?";
const subHeading = "Herramientas pensadas para que los docentes dediquen su tiempo a lo que más importa.";

const advantages = [
  {
    icon: "clock",
    name: "Menos tareas repetitivas",
    des: "Automatiza la corrección de exámenes y recupera horas cada semana.",
  },
  {
    icon: "shield",
    name: "Resultados precisos y justos",
    des: "La corrección con IA aplica los mismos criterios a todos los estudiantes.",
  },
  {
    icon: "file",
    name: "Exámenes a tu medida",
    des: "Genera evaluaciones adaptadas a distintos niveles y estilos de aprendizaje.",
  },
  {
    icon: "pin",
    name: "Hecho en el Perú",
    des: "Una startup educativa peruana que trabaja de cerca con docentes de nuestras aulas.",
  },
];
</script>

<template>
  <section class="et-section">
    <div class="et-container">
      <div class="et-head" v-reveal>
        <h2 class="et-title">{{ heading }}</h2>
        <p class="et-lead">{{ subHeading }}</p>
      </div>

      <ul class="adv">
        <li v-for="(item, i) in advantages" :key="item.name" class="adv__card" v-reveal="i * 80">
          <span class="adv__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <template v-if="item.icon === 'clock'">
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5V12l3 2" />
              </template>
              <template v-else-if="item.icon === 'shield'">
                <path d="M12 3l7 3v5.5c0 4.3-3 7.6-7 9.5-4-1.9-7-5.2-7-9.5V6z" />
                <path d="M9 12l2.2 2.2L15.5 10" />
              </template>
              <template v-else-if="item.icon === 'file'">
                <path d="M14 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9z" />
                <path d="M14 3v6h6M12 12v5M9.5 14.5h5" />
              </template>
              <template v-else>
                <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.4 6.5 11 6.5 11z" />
                <circle cx="12" cy="10" r="2.4" />
              </template>
            </svg>
          </span>
          <h3 class="adv__name">{{ item.name }}</h3>
          <p class="adv__des">{{ item.des }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.adv {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.adv__card {
  padding: 28px 26px 30px;
  background: var(--et-blue-50);
  border: 1px solid transparent;
  border-radius: 22px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease, background-color 0.25s ease;
}
.adv__card:hover {
  background: #fff;
  border-color: var(--et-blue-200);
  box-shadow: var(--et-shadow-md);
  transform: translateY(-4px);
}
.adv__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin-bottom: 20px;
  border-radius: 16px;
  background: var(--et-navy-800);
  color: var(--et-blue-200);
}
.adv__name {
  margin: 0 0 8px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1.12rem;
  line-height: 1.35;
  color: var(--et-navy-800);
}
.adv__des {
  margin: 0;
  color: var(--et-muted);
}

@media (min-width: 640px) {
  .adv {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1040px) {
  .adv {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
