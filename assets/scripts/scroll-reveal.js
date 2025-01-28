document.addEventListener("DOMContentLoaded", () => {
  // Verificar se a largura da janela é maior que 768px (exemplo para tablet e desktop)
  if (window.innerWidth > 768) {
    const sr = ScrollReveal({
      distance: '50px',   // Distância do movimento
      duration: 800,      // Duração da animação
      easing: 'ease-in-out', // Curva de aceleração
      reset: false        // Repetir animação ao scroll (defina `true` se quiser repetição)
    });

    // Selecione os elementos para animar
    sr.reveal('.header, .home, .projects, .about', { origin: 'top' });
    sr.reveal('.area-grid-1', { origin: 'left', interval: 200 });
    sr.reveal('.work-1, .work-2, .work-3, .work-4', { origin: 'bottom', interval: 100 });
    sr.reveal('.content-about, .about-grid-1, .about-grid-2', { origin: 'right', interval: 200 });
  }
});