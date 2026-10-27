<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from "vue";
import Logo from "./Logo.vue";

const loginUrl = "https://edutk.vercel.app/";

const links = [
  { id: "home-section", label: "Inicio" },
  { id: "about-section", label: "Nosotros" },
  { id: "features-section", label: "Características" },
  { id: "pricing-section", label: "Precio" },
  { id: "testimonials-section", label: "Testimonios" },
  { id: "contact-section", label: "Contacto" },
];

const scrolled = ref(false);
const open = ref(false);
const active = ref("home-section");
let observer = null;

function onScroll() {
  scrolled.value = window.scrollY > 12;
}
function closeMenu() {
  open.value = false;
}
function onKey(e) {
  if (e.key === "Escape") open.value = false;
}

// Bloquea el scroll de la página mientras el menú móvil está abierto
watch(open, (isOpen) => {
  document.body.classList.toggle("et-no-scroll", isOpen);
});

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKey);

  // Resalta en el menú la sección que se está viendo
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) active.value = entry.target.id;
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKey);
  document.body.classList.remove("et-no-scroll");
  if (observer) observer.disconnect();
});
</script>

<template>
  <header class="et-header et-on-dark" :class="{ 'is-scrolled': scrolled, 'is-open': open }">
    <div class="et-container et-header__bar">
      <a href="/" class="et-header__brand" aria-label="EduTek, ir al inicio" @click="closeMenu">
        <Logo />
      </a>

      <nav class="et-header__nav" aria-label="Navegación principal">
        <ul class="et-header__links">
          <li v-for="link in links" :key="link.id">
            <a
              :href="'#' + link.id"
              class="et-header__link"
              :class="{ 'is-active': active === link.id }"
              :aria-current="active === link.id ? 'true' : null"
              >{{ link.label }}</a
            >
          </li>
        </ul>
      </nav>

      <div class="et-header__actions">
        <a :href="loginUrl" class="et-btn et-btn--ghost et-btn--sm">Iniciar sesión</a>
        <a :href="loginUrl" class="et-btn et-btn--coral et-btn--sm">Registrarse</a>
      </div>

      <button
        type="button"
        class="et-header__burger"
        :class="{ 'is-open': open }"
        :aria-expanded="open ? 'true' : 'false'"
        aria-controls="et-mobile-menu"
        :aria-label="open ? 'Cerrar menú' : 'Abrir menú'"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Menú móvil -->
    <div id="et-mobile-menu" class="et-header__panel" :class="{ 'is-open': open }">
      <div class="et-container">
        <ul class="et-header__mlinks">
          <li v-for="link in links" :key="'m-' + link.id">
            <a :href="'#' + link.id" :class="{ 'is-active': active === link.id }" @click="closeMenu">{{
              link.label
            }}</a>
          </li>
        </ul>
        <div class="et-header__mactions">
          <a :href="loginUrl" class="et-btn et-btn--ghost et-btn--block">Iniciar sesión</a>
          <a :href="loginUrl" class="et-btn et-btn--coral et-btn--block">Registrarse</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.et-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}
.et-header.is-scrolled,
.et-header.is-open {
  background: var(--et-navy-900);
  box-shadow: 0 10px 30px -12px rgba(6, 10, 40, 0.55);
}
@supports ((-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px))) {
  .et-header.is-scrolled {
    background: rgba(14, 23, 69, 0.82);
    -webkit-backdrop-filter: saturate(160%) blur(14px);
    backdrop-filter: saturate(160%) blur(14px);
  }
  .et-header.is-open {
    background: var(--et-navy-900);
  }
}

.et-header__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  height: 72px;
}
.et-header__brand {
  display: inline-flex;
  flex: none;
  text-decoration: none;
  border-radius: 12px;
}

/* ---------- Navegación escritorio ---------- */
.et-header__nav {
  display: none;
  flex: 1;
  justify-content: center;
}
.et-header__links {
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.et-header__link {
  display: block;
  padding: 8px 13px;
  border-radius: 999px;
  font-family: var(--et-font-display);
  font-weight: 500;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  transition: color 0.2s ease, background-color 0.2s ease;
}
.et-header__link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}
.et-header__link.is-active {
  color: #fff;
  background: rgba(127, 156, 245, 0.22);
}

.et-header__actions {
  display: none;
  align-items: center;
  gap: 10px;
  flex: none;
}

/* ---------- Botón hamburguesa ---------- */
.et-header__burger {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 46px;
  height: 46px;
  margin-left: auto;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
.et-header__burger span {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: #fff;
  transition: transform 0.3s ease, opacity 0.2s ease;
}
.et-header__burger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.et-header__burger.is-open span:nth-child(2) {
  opacity: 0;
}
.et-header__burger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---------- Panel móvil ---------- */
.et-header__panel {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  max-height: calc(100vh - 72px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background: var(--et-navy-900);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 40px -20px rgba(6, 10, 40, 0.6);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s linear 0.25s;
}
.et-header__panel.is-open {
  opacity: 1;
  visibility: visible;
  transform: none;
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s;
}
.et-header__mlinks {
  margin: 0;
  padding: 8px 0;
  list-style: none;
}
.et-header__mlinks a {
  display: block;
  padding: 15px 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-family: var(--et-font-display);
  font-weight: 500;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
}
.et-header__mlinks a.is-active {
  color: var(--et-blue-400);
}
.et-header__mactions {
  display: grid;
  gap: 12px;
  padding: 20px 0 28px;
}

/* ---------- Escritorio ---------- */
@media (min-width: 1100px) {
  .et-header__nav,
  .et-header__actions {
    display: flex;
  }
  .et-header__burger,
  .et-header__panel {
    display: none;
  }
}
</style>
