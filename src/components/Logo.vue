<script setup>
// Logo de EduTek en SVG + texto: se ve nítido en cualquier tamaño.
// tone="light" -> para fondos oscuros (por defecto) · tone="dark" -> para fondos claros
defineProps({
  tone: { type: String, default: "light" },
});
</script>

<template>
  <span class="et-logo" :class="'et-logo--' + tone">
    <svg class="et-logo__mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <circle class="bubble" cx="24" cy="21" r="18" />
      <path class="bubble" d="M10.2 27.5 6.6 41.2c-.3 1.4.9 2.2 2.1 1.7l13.4-5.1z" />
      <path
        class="check"
        d="M16 21.8 21.4 27l9.2-10.6"
        fill="none"
        stroke-width="4.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path class="spark" d="M32 4.6Q32 8 35.4 8Q32 8 32 11.4Q32 8 28.6 8Q32 8 32 4.6Z" />
      <path class="spark" d="M38 11.3Q38 13.5 40.2 13.5Q38 13.5 38 15.7Q38 13.5 35.8 13.5Q38 13.5 38 11.3Z" />
    </svg>
    <span class="et-logo__word">Edu<span>Tek</span></span>
  </span>
</template>

<style scoped>
.et-logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  line-height: 1;
}
.et-logo__mark {
  width: 42px;
  height: 42px;
  flex: none;
}
.et-logo__word {
  font-family: var(--et-font-display);
  font-weight: 700;
  font-size: 1.65rem;
  letter-spacing: -0.02em;
}
.check {
  stroke: var(--et-coral-500);
}

/* sobre fondo oscuro */
.et-logo--light .bubble {
  fill: #fff;
}
.et-logo--light .spark {
  fill: var(--et-navy-700);
}
.et-logo--light .et-logo__word {
  color: #fff;
}
.et-logo--light .et-logo__word span {
  color: var(--et-blue-400);
}

/* sobre fondo claro */
.et-logo--dark .bubble {
  fill: var(--et-navy-800);
}
.et-logo--dark .spark {
  fill: var(--et-blue-400);
}
.et-logo--dark .et-logo__word {
  color: var(--et-navy-800);
}
.et-logo--dark .et-logo__word span {
  color: var(--et-blue-500);
}
</style>
