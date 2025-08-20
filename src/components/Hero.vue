<script setup>
import mainPhoto3 from "../assets/images/hero3.svg";
import { themeColor } from "../data/items";

const heroHeading = "Liberando horas, mejorando clases";
const buttonSeeFeature = "Ver Características";
const buttonPricing = "Precio";
</script>

<template>
  <div class="untree_co-hero" id="home-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <div class="dots"></div>
          <div class="row align-items-center">
            <!-- Imagen -->
            <div
              class="col-lg-7 ml-auto order-lg-2"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img :src="mainPhoto3" alt="Image" class="img-fluid" />
            </div>

            <!-- Texto y botones -->
            <div class="col-lg-5">
              <h1 class="heading" data-aos="fade-up" data-aos-delay="0">
                {{ heroHeading }}
              </h1>
              <div class="excerpt" data-aos="fade-up" data-aos-delay="100">
                <p>
                  EDUTK es una
                  <span
                    style="
                      background-color: rgba(64, 123, 255, 0.07);
                      color: #407bff;
                    "
                    >startup educativa peruana</span
                  >
                  enfocada en aplicar inteligencia artificial y tecnología de automatización para optimizar procesos en la enseñanza. Nuestro modelo permite reducir la carga operativa de los docentes, incrementando la eficiencia y mejorando la calidad del aprendizaje en estudiantes.
                </p>
              </div>

              <!-- Botones alineados correctamente -->
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                style="
                  display: flex;
                  gap: 10px;
                  flex-wrap: wrap;
                  align-items: center;
                  margin-top: 15px;
                "
              >
                <a
                  href="#features-section"
                  class="btn btn-primary smoothscroll"
                  :style="[
                    { background: themeColor },
                    { borderColor: themeColor },
                  ]"
                >
                  {{ buttonSeeFeature }}
                </a>
                <a
                  href="#pricing-section"
                  class="btn btn-outline-primary smoothscroll pricing"
                  :style="[{ color: themeColor }, { borderColor: themeColor }]"
                >
                  {{ buttonPricing }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing:hover {
  color: #fff !important;
}
</style>
