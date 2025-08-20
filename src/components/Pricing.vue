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
    name: "PREMIUM",
    price: "1.99",
  },
  {
    name: "CORPORATIVO",
    price: "0.99",
  },
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
        <div class="col-lg-10">
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[0].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>$</sup><span>{{ packages[0].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Creación de exámenes (limitado a 2 opciones).</li>
                    <li>Sin acceso a informes de resultados.</li>
                    <li>Soporte limitado a una interacción diaria con la IA.</li>
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
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div class="pricing active">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[1].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>$</sup><span>{{ packages[1].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Creación ilimitada de exámenes y preguntas personalizadas.</li>
                    <li>Comunidad docente para compartir y colaborar.</li>
                    <li>Soporte ilimitado para la corrección de exámenes y generación de nuevos.</li>
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
            <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div class="pricing">
                <div class="body">
                  <div class="price">
                    <span class="d-block plan">{{ packages[2].name }}</span>
                    <span class="price" :style="[{ color: themeColor }]"
                      ><sup>$</sup><span>{{ packages[2].price }}</span></span
                    >
                  </div>
                  <ul class="list-unstyled ul-check primary mb-5">
                    <li>Acceso a informes detallados y completos.</li>
                    <li>Dashboard descargable.</li>
                    <li>Soporte ilimitado, incluido acceso a una línea directa para problemas técnicos.</li>
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
