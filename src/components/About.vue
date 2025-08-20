<script setup>
import { themeColor } from "../data/items";
import mainPhoto1 from "../assets/images/info_edutk.png";

const heading = "Nosotros";
const subHeading = "¿Quiénes Somos?";
</script>

<template>
  <div class="untree_co-section" id="about-section">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        
        <!-- Imagen -->
        <div class="col-12 col-lg-8 mb-4 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
          <img 
            :src="mainPhoto1" 
            alt="Nosotros EDUTK" 
            class="img-fluid mx-auto d-block" 
            style="max-width: 100%; height: auto; border-radius: 12px;"
          />
        </div>

        <!-- Texto -->
        <div class="col-12 col-lg-4">
          <div class="mb-4" data-aos="fade-up" data-aos-delay="0">
            <span class="caption" :style="{ color: themeColor }">{{ heading }}</span>
            <h2 class="heading">{{ subHeading }}</h2>
          </div>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
            <p>
              Somos EDUTK, un equipo de jóvenes innovadores comprometidos con transformar la educación en el Perú a través de la tecnología. Creemos que los docentes son el motor de la enseñanza y que, liberándolos de tareas repetitivas, pueden enfocarse en lo más importante: conectar con sus estudiantes y brindar una educación de calidad. 
            </p>
            <p>
              Nuestro propósito es ofrecer
              <span class="highlight">herramientas que automaticen procesos, reduzcan la carga laboral y abran nuevas oportunidades educativas</span>, generando un impacto positivo en docentes y estudiantes.
            </p>
          </div>
          <ul class="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="200">
            <li>Automatización en la corrección de exámenes para docentes</li>
            <li>Generación de exámenes personalizados</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.heading {
  color: #407BFF;
  font-weight: bold;
  font-size: 1.8rem;
}

/* Texto destacado */
.highlight {
  color: #407BFF;
  font-weight: 600;
}

/* Lista con check */
.ul-check li::before {
  content: "✔";
  color: #407BFF;
  margin-right: 8px;
}

/* Ajustes para móviles */
@media (max-width: 768px) {
  .heading {
    font-size: 1.5rem;
  }
  p {
    font-size: 0.95rem;
  }
  .ul-check li {
    font-size: 0.95rem;
  }
}
</style>
