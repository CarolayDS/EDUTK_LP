<script setup>
import contactImg from "../assets/images/contacto.svg";
import { vReveal } from "../directives/reveal";

const heading = "Contáctanos";
const subHeading = "La educación es la clave del futuro. Escríbenos y conversemos.";

const contactInfo = {
  address: "Lima, Perú",
  phone: "953 975 396 / 945 671 217",
  phoneHref: "tel:+51953975396",
  email: "edutek.startup2.0@gmail.com",
  instagram: "https://www.instagram.com/edutk_/",
  linkedin: "https://www.linkedin.com/company/edutk/",
};
</script>

<template>
  <section class="et-section" id="contact-section">
    <div class="et-container">
      <div class="contact et-on-dark" v-reveal>
        <div class="contact__copy">
          <h2 class="et-title contact__title">{{ heading }}</h2>
          <p class="contact__sub">{{ subHeading }}</p>

          <ul class="info">
            <li class="info__row">
              <span class="info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0c0 5.4 6.5 11 6.5 11z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
              </span>
              <span class="info__text">
                <span class="info__label">Ubicación</span>
                <span class="info__value">{{ contactInfo.address }}</span>
              </span>
            </li>
            <li class="info__row">
              <span class="info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
              </span>
              <span class="info__text">
                <span class="info__label">Teléfono</span>
                <a :href="contactInfo.phoneHref" class="info__value info__link">{{ contactInfo.phone }}</a>
              </span>
            </li>
            <li class="info__row">
              <span class="info__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="M3.5 7.5l8.5 6 8.5-6" />
                </svg>
              </span>
              <span class="info__text">
                <span class="info__label">Correo</span>
                <a :href="'mailto:' + contactInfo.email" class="info__value info__link">{{ contactInfo.email }}</a>
              </span>
            </li>
          </ul>

          <div class="contact__actions">
            <a :href="contactInfo.instagram" target="_blank" rel="noopener noreferrer" class="et-btn et-btn--ghost">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a :href="contactInfo.linkedin" target="_blank" rel="noopener noreferrer" class="et-btn et-btn--ghost">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div class="contact__visual">
          <img :src="contactImg" alt="Contacto EduTek" class="contact__img" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: clamp(28px, 5vw, 56px);
  align-items: center;
  overflow: hidden;
  padding: clamp(28px, 5vw, 64px);
  border-radius: clamp(26px, 4vw, 40px);
  color: #fff;
  background-color: #141f5a;
  background-image: radial-gradient(55% 80% at 100% 0%, rgba(127, 156, 245, 0.3), rgba(127, 156, 245, 0) 65%),
    radial-gradient(40% 60% at 0% 100%, rgba(238, 90, 69, 0.16), rgba(238, 90, 69, 0) 70%);
}
.contact__title {
  color: #fff;
}
.contact__sub {
  margin: 0 0 30px;
  max-width: 44ch;
  font-size: 1.08rem;
  color: var(--et-blue-200);
}

.info {
  display: grid;
  gap: 18px;
  margin: 0 0 34px;
  padding: 0;
  list-style: none;
}
.info__row {
  display: flex;
  align-items: center;
  gap: 16px;
}
.info__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(127, 156, 245, 0.18);
  color: var(--et-blue-400);
}
.info__text {
  min-width: 0;
}
.info__label {
  display: block;
  font-size: 0.85rem;
  color: var(--et-blue-200);
}
.info__value {
  display: block;
  font-family: var(--et-font-display);
  font-weight: 500;
  font-size: 1.02rem;
  color: #fff;
  overflow-wrap: anywhere;
}
.info__link {
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  display: inline-block;
  transition: border-color 0.2s ease, color 0.2s ease;
}
.info__link:hover {
  color: var(--et-blue-400);
  border-bottom-color: var(--et-blue-400);
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.contact__visual {
  padding: clamp(16px, 3vw, 28px);
  border-radius: 28px;
  background: var(--et-blue-50);
}
.contact__img {
  display: block;
  width: 100%;
  height: auto;
}

@media (min-width: 900px) {
  .contact {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  }
}
</style>
