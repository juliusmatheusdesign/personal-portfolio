document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // Cria uma condição para telas com largura mínima de 1440px
  ScrollTrigger.matchMedia({
    "(min-width: 1440px)": function() {
      gsap.to(".metas-title", {
        y: 850,
        duration: 3,
        ease: "linear",
        scrollTrigger: {
          trigger: ".metas-title",
          start: "bottom 80%",
          end: "bottom -10%",
          scrub: 2,
          //markers: true,
        },
      });

      gsap.to(".pesquisas-title", {
        y: 2000,
        duration: 3,
        ease: "linear",
        scrollTrigger: {
          trigger: ".pesquisas-title",
          start: "bottom 40%",
          end: "bottom -180%",
          scrub: 2,
          //markers: true,
        },
      });

      gsap.to(".dados-title", {
        y: 2200,
        duration: 3,
        ease: "linear",
        scrollTrigger: {
          trigger: ".dados-title",
          start: "bottom 40%",
          end: "bottom -180%",
          scrub: 2,
          //markers: true,
        },
      });

      gsap.to(".solution-title", {
        y: 5000,
        duration: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".solution-title",
          start: "bottom 80%",
          end: "bottom -500%",
          scrub: 4,
          //markers: true,
        },
      });

      gsap.to(".concent-conceito-direito", {
        y: 580,
        duration: 3,
        ease: "linear",
        scrollTrigger: {
          trigger: ".concent-conceito-direito",
          start: "bottom 80%",
          end: "bottom -10%",
          scrub: 2,
          //markers: true,
        },
      });
    }
  });
});