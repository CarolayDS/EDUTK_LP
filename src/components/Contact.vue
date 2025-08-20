<script setup>
const heading = "Contáctanos";
const subHeading = "La educación es la clave del futuro. Escríbenos y conversemos.";
const contactInfoHeading = "Información de Contacto";

// Información de contacto
const contactInfo = {
  address: "Lima - Perú",
  phone: "953975396",
  email: "EDUTEKPERU@gmail.com",
  socials: {
    facebook: "#",
    youtube: "#",
    instagram: "https://www.instagram.com/edutk_/"
  }
};
</script>

<template>
  <div id="contact-section" class="contact-section" style="background: linear-gradient(to bottom, #ffffff 0%, #d9f1ff 40%, #ffffff 100%);">
    <div class="container">
      
      <!-- Encabezado -->
      <div class="text-center mb-5">
        <h2 class="heading">{{ heading }}</h2>
        <p>{{ subHeading }}</p>
      </div>

      <div class="row align-items-center">
        <!-- Imagen -->
        <div class="col-lg-6 text-center mb-4 mb-lg-0">
          <img 
            src="../assets/images/contacto.svg"
            alt="Contacto EDUTK" 
            class="contact-img"
          />
        </div>

        <!-- Información de contacto -->
        <div class="col-lg-6">
          <h3 class="h5 mb-4">{{ contactInfoHeading }}</h3>
          <p><i class="bi bi-geo-alt-fill text-primary"></i> {{ contactInfo.address }}</p>
          <p><i class="bi bi-telephone-fill text-primary"></i> {{ contactInfo.phone }}</p>
          <p><i class="bi bi-envelope-fill text-primary"></i> {{ contactInfo.email }}</p>

          <!-- Redes sociales -->
          <div class="social-icons mt-4">
            <a :href="contactInfo.socials.facebook" target="_blank" class="icon facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a :href="contactInfo.socials.youtube" target="_blank" class="icon youtube">
              <i class="bi bi-youtube"></i>
            </a>
            <a :href="contactInfo.socials.instagram" target="_blank" class="icon instagram">
              <i class="bi bi-instagram"></i>
            </a>
          </div>

        
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.heading {
  color: #407BFF;
  font-weight: bold;
}

.contact-img {
  max-width: 100%;
  border-radius: 12px;
}

p {
  
  margin: 0.6rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
}

/* Iconos sociales */
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 1rem;
}

.icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
  color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon.facebook { background: #3b5998; }
.icon.youtube { background: #ff0000; }
.icon.instagram { background: #d62976; }

.icon:hover {
  transform: scale(1.15);
  box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
}


</style>
