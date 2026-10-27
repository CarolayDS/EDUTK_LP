<script setup>
import { vReveal } from "../directives/reveal";

const heading = "Novedades";
const subHeading = "Ideas y guías para docentes que quieren ganar tiempo en el aula.";

// Textos de ejemplo: reemplázalos por tus artículos reales.
const blogItems = [
  {
    title: "Cómo corregir exámenes en minutos con inteligencia artificial",
    category: "Guías",
    read: "4 min",
    url: "#",
  },
  {
    title: "Evaluaciones personalizadas: ideas para cada nivel de aprendizaje",
    category: "Evaluación",
    read: "5 min",
    url: "#",
  },
  {
    title: "Tecnología para docentes: ganar tiempo sin perder el trato humano",
    category: "Educación",
    read: "3 min",
    url: "#",
  },
];
</script>

<template>
  <section class="et-section et-section--tint">
    <div class="et-container">
      <div class="et-head" v-reveal>
        <h2 class="et-title">{{ heading }}</h2>
        <p class="et-lead">{{ subHeading }}</p>
      </div>

      <ul class="news">
        <li v-for="(post, i) in blogItems" :key="post.title" class="news__cell" v-reveal="i * 90">
          <article class="post">
            <div class="post__cover" :class="'post__cover--' + (i + 1)" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="64" height="64">
                <circle cx="24" cy="21" r="18" fill="#fff" fill-opacity=".14" />
                <path d="M10.2 27.5 6.6 41.2c-.3 1.4.9 2.2 2.1 1.7l13.4-5.1z" fill="#fff" fill-opacity=".14" />
                <path d="M16 21.8 21.4 27l9.2-10.6" fill="none" stroke="#fff" stroke-opacity=".85" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="post__body">
              <p class="post__meta">{{ post.category }}, {{ post.read }} de lectura</p>
              <h3 class="post__title">
                <a :href="post.url" class="post__link">{{ post.title }}</a>
              </h3>
              <span class="post__more" aria-hidden="true">Leer artículo</span>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.news {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 22px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.news__cell {
  display: flex;
}

.post {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  background: #fff;
  border: 1px solid var(--et-line);
  border-radius: 24px;
  transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
}
.post:hover {
  border-color: var(--et-blue-200);
  box-shadow: var(--et-shadow-md);
  transform: translateY(-4px);
}
.post__cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}
.post__cover--1 {
  background: linear-gradient(135deg, var(--et-navy-800), var(--et-navy-700));
}
.post__cover--2 {
  background: linear-gradient(135deg, var(--et-navy-700), var(--et-blue-500));
}
.post__cover--3 {
  background: linear-gradient(135deg, var(--et-navy-900), var(--et-blue-600));
}
.post__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px 24px 26px;
}
.post__meta {
  margin: 0 0 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--et-blue-600);
}
.post__title {
  margin: 0 0 18px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1.12rem;
  line-height: 1.4;
}
.post__link {
  color: var(--et-navy-800);
  text-decoration: none;
}
/* toda la tarjeta es clicable */
.post__link::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.post__more {
  margin-top: auto;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--et-coral-600);
}
.post:hover .post__more {
  text-decoration: underline;
}

@media (min-width: 700px) {
  .news {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1040px) {
  .news {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
