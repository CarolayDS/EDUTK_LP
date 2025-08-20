<script setup>
import { themeColor, siteName } from "../data/items";
</script>
<template>
  <nav class="site-nav dark js-site-navbar mb-5 site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <a href="/" class="logo m-0 float-left">
          <img src="../assets/images/edutk.png" alt="Logo" class="logo-img" />
        </a>

        <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-left">
          <li class="active">
            <a href="#home-section" class="nav-link">Inicio</a>
          </li>
          <li><a href="#about-section" class="nav-link">Nosotros</a></li>
          <li><a href="#features-section" class="nav-link">Características</a></li>
          <li><a href="#pricing-section" class="nav-link">Precio</a></li>
          <li><a href="#testimonials-section" class="nav-link">Testimonios</a></li>
          <li><a href="#contact-section" class="nav-link">Contacto</a></li>
        </ul>
        <ul
          class="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right"
        >
          <li class="cta-button-outline" style="margin-right: 5px;"><a href="https://edutk.vercel.app/">Iniciar Sesión</a></li>
          <li class="cta-primary">
            <a href="https://edutk.vercel.app/" :style="[{ backgroundColor: themeColor }]">Registrarse</a>
          </li>
        </ul>
        <a
          href="#"
          class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span></span>
        </a>
      </div>
    </div>
  </nav>
</template>
<style>
.logo-img {
  height: 50px;   /* ajusta el alto según lo que necesites */
  width: auto;    /* mantiene la proporción */
  display: inline-block;
  vertical-align: middle; /* alinea con el punto azul */
}


</style>