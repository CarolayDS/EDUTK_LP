<script setup>
import Logo from "./Logo.vue";

const year = new Date().getFullYear();

const contactInfo = {
  address: "Lima, Perú",
  phone: "953 975 396",
  phoneHref: "tel:+51953975396",
  email: "edutek.comunicaciones@gmail.com",
};

const navLinks = [
  { label: "Inicio", href: "#home-section" },
  { label: "Nosotros", href: "#about-section" },
  { label: "Características", href: "#features-section" },
  { label: "Precio", href: "#pricing-section" },
  { label: "Testimonios", href: "#testimonials-section" },
  { label: "Contacto", href: "#contact-section" },
];

const platformLinks = [
  { label: "Iniciar sesión", href: "https://edutk.vercel.app/" },
  { label: "Registrarse", href: "https://edutk.vercel.app/" },
];

const instagramUrl = "https://www.instagram.com/edutk_/";
</script>

<template>
  <footer class="foot et-on-dark">
    <div class="et-container">
      <div class="foot__grid">
        <div class="foot__brand">
          <a href="/" class="foot__logo" aria-label="EduTek, ir al inicio"><Logo /></a>
          <p class="foot__tag">Más tiempo para enseñar.</p>
          <p class="foot__about">
            Startup educativa peruana que usa inteligencia artificial para aliviar la carga de los docentes.
          </p>
          <a :href="instagramUrl" target="_blank" rel="noopener noreferrer" class="foot__social" aria-label="Instagram de EduTek">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <nav class="foot__col" aria-label="Secciones">
          <h3 class="foot__h">Navegación</h3>
          <ul class="foot__list">
            <li v-for="l in navLinks" :key="l.href"><a :href="l.href" class="foot__a">{{ l.label }}</a></li>
          </ul>
        </nav>

        <nav class="foot__col" aria-label="Plataforma">
          <h3 class="foot__h">Plataforma</h3>
          <ul class="foot__list">
            <li v-for="l in platformLinks" :key="l.label"><a :href="l.href" class="foot__a">{{ l.label }}</a></li>
          </ul>
        </nav>

        <div class="foot__col">
          <h3 class="foot__h">Contacto</h3>
          <address class="foot__address">{{ contactInfo.address }}</address>
          <ul class="foot__list">
            <li><a :href="contactInfo.phoneHref" class="foot__a">{{ contactInfo.phone }}</a></li>
            <li><a :href="'mailto:' + contactInfo.email" class="foot__a foot__a--wrap">{{ contactInfo.email }}</a></li>
          </ul>
        </div>
      </div>

      <p class="foot__copy">© {{ year }} EduTek. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  padding: clamp(48px, 7vw, 80px) 0 28px;
  background: var(--et-navy-950);
  color: var(--et-blue-200);
}
.foot__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 36px;
}
.foot__logo {
  display: inline-flex;
  text-decoration: none;
}
.foot__tag {
  margin: 18px 0 8px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--et-blue-400);
}
.foot__about {
  margin: 0 0 20px;
  max-width: 38ch;
  font-size: 0.97rem;
}
.foot__social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  transition: background-color 0.25s ease, transform 0.25s ease;
}
.foot__social:hover {
  background: var(--et-coral-600);
  transform: translateY(-2px);
}

.foot__h {
  margin: 0 0 16px;
  font-family: var(--et-font-display);
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
}
.foot__list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.foot__a {
  color: var(--et-blue-200);
  text-decoration: none;
  transition: color 0.2s ease;
}
.foot__a:hover {
  color: #fff;
  text-decoration: underline;
}
.foot__a--wrap {
  overflow-wrap: anywhere;
}
.foot__address {
  margin: 0 0 10px;
  font-style: normal;
}

.foot__copy {
  margin: clamp(36px, 5vw, 56px) 0 0;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  text-align: center;
}

@media (min-width: 640px) {
  .foot__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1000px) {
  .foot__grid {
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 0.8fr) minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 48px;
  }
}
</style>
