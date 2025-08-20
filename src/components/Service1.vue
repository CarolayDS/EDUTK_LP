<script setup>
import { themeColor } from "../data/items";
import personPhoto from "../assets/images/teacher.png";
import mainPhoto from "../assets/images/service1.jpg";

const service1Heading = "Servicio de Inteligencia Artificial";
const service1SubHeading = "🚀 Educación Inteligente con IA";
const service1Quote =
  '"Antes pasaba horas corrigiendo exámenes, ahora EDUTK lo hace en minutos. Gracias a esta plataforma, dedico más tiempo a preparar actividades dinámicas y a motivar a mis estudiantes."';
const personName = "María Aguirre";
const designation = "Docente de CyT- Santa Maria ";

const youtubeVideoUrl = "https://www.youtube.com/embed/O4hzm-AaVHI?autoplay=1&mute=1&loop=1&playlist=O4hzm-AaVHI";
</script>

<template>
  <div class="untree_co-section" id="features-section">
    <div class="container">
      <div class="row justify-content-between">
        <!-- Texto y testimonial -->
        <div class="col-lg-4">
          <span
            class="caption"
            data-aos="fade-up"
            data-aos-delay="0"
            :style="[{ color: themeColor }]"
          >
            {{ service1Heading }}
          </span>
          <h3 class="heading mb-4" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              En EDUTK transformamos la manera en que los docentes trabajan. Nuestra plataforma con Inteligencia Artificial automatiza procesos como:
            </p>
            <ul class="list-unstyled ul-check primary">
              <li>Corrección de exámenes en segundos, con resultados precisos y justos.</li>
              <li>Generación de exámenes adaptados a diferentes niveles y estilos de aprendizaje.</li>
              <li>Herramientas de IA que apoyan la creación de materiales educativos innovadores y personalizados.</li>
            </ul>
          </div>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="untree_co-testimonial d-flex">
              <div class="text">
                <blockquote>
                  {{ service1Quote }}
                </blockquote>
                <div class="author d-flex">
                  <div class="pic mr-3">
                    <img :src="personPhoto" alt="Image" class="img-fluid" />
                  </div>
                  <div>
                    <strong class="d-block">{{ personName }}</strong>
                    <span class="d-block">{{ designation }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Video de YouTube más grande -->
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="400">
          <div class="video-container">
            <iframe
              :src="youtubeVideoUrl"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="img-fluid img-shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-shadow {
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  border-radius: 12px;
}

/* Contenedor responsive y más alto para video */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* relación 16:9 */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
