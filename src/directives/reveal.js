// v-reveal · aparición suave al entrar en pantalla.
// Uso:  <div v-reveal> ...</div>   o con retardo:  <div v-reveal="120"> ...</div>
// Si el navegador no soporta IntersectionObserver (o el usuario pidió menos
// movimiento) el contenido simplemente se muestra sin animación.
export const vReveal = {
  mounted(el, binding) {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("et-reveal");
    if (binding.value) el.style.animationDelay = binding.value + "ms";

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    el.__etIo = io;
  },
  unmounted(el) {
    if (el.__etIo) {
      el.__etIo.disconnect();
      el.__etIo = null;
    }
  },
};
