<script setup>
import { themeColor } from "../data/items";
const heading = "PRECIOS";
const subHeading = "Precios para todos. Elige tu plan ahora!";
const startButtonName = "Comienza";
const packages = [
  {
    name: "FREEMIUM",
    price: "0",
  },
  {
    name: "BÁSICO",
    price: "9",
  },
  {
    name: "PREMIUN",
    price: "19",
  },
  {
    name: "CORPORATIVO",
    price: "499 - 2000",
  }
];
</script>
<template>
  <div class="untree_co-section"  id="pricing-section">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-35">
          <div class="row">
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[0].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>S/.</sup><span>{{ packages[0].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Creación de examen.</li>
                    <li>Herramientas de IA para la preparación de clases.</li>
                    <li>Webinar gratuito sobre la utilización de la IA.</li>
                    <li>Corrección automatizada de exámenes para un aula de hasta 40 alumnos.</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="https://edutk.vercel.app/"
                      class="btn btn-outline-primary"
                      :style="[
                        { color: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div class="pricing active">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[1].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>S/.</sup><span>{{ packages[1].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Creación ilimitada de exámenes.</li>
                    <li>Comunidad docente para compartir y colaborar.</li>
                    <li>Hasta 3 aulas con corrección automatizada de exámenes </li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="https://edutk.vercel.app/"
                      class="btn btn-primary"
                      :style="[
                        { backgroundColor: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[2].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>S/.</sup><span>{{ packages[2].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Creación ilimitada de exámenes.</li>
                    <li>Corrección automatizada de exámenes ilimitados.</li>
                    <li>Soporte técnico ilimitado.</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="https://edutk.vercel.app/"
                      class="btn btn-outline-primary"
                      :style="[
                        { color: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 " data-aos="fade-up" data-aos-delay="300">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[3].name }}</span>
                    <span class="price" :style="[{ color: themeColor }, { fontSize: '1.70rem' }]"
                      ><sup>S/.</sup><span>{{ packages[3].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Creación ilimitada de exámenes.</li>
                    <li>Corrección automatizada de exámenes para toda la planilla según.</li>
                    <li>Soporte técnico ilimitado.</li>
                  </ul>
                  <p class="text-center mb-0">
                    <a
                      href="https://edutk.vercel.app/"
                      class="btn btn-outline-primary"
                      :style="[
                        { color: themeColor },
                        { borderColor: themeColor },
                      ]"
                      >{{ startButtonName }}</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
