<script setup>
import mainVideo from "../assets/images/entrevista.mp4"; // 👈 ruta del video

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
    des: "Con herramientas como EDUTK, los docentes pueden dedicar más tiempo a fortalecer la relación con sus alumnos.",
  },
  {
    id: 4,
    name: "Fortalecer la educación",
    des: "La tecnología debe ser un aliado para que los niños reciban apoyo y fortaleza en su aprendizaje.",
  },
];
</script>

<template>
  <div class="untree_co-section " style="background: linear-gradient(to bottom, #ffffff 0%, #d9f1ff 50%, #ffffff 100%);">
>
    <div class="container">
      <div class="row justify-content-between align-items-center">
        
        <!-- 📌 Columna izquierda con el video -->
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div class="img-shadow">
            <video class="img-fluid rounded" autoplay muted loop controls>
              <source :src="mainVideo" type="video/mp4" />
            </video>
          </div>
        </div>

        <!-- 📌 Columna derecha con los textos -->
        <div class="col-lg-6">
          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="service link horizontal d-flex mb-3"
            :data-aos="'fade-left'"
            :data-aos-delay="index * 100"
          >
            <div class="service-icon mb-4" :class="'color-' + (index + 1)">
              <svg class="bi bi-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">
                <circle cx="8" cy="8" r="7"/>
              </svg>
            </div>
            <div class="service-contents">
              <h3>{{ item.name }}</h3>
              <p>{{ item.des }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
