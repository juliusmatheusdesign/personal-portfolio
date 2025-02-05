document.addEventListener("DOMContentLoaded", (event) => {
  if (window.innerWidth > 1440) { // Limita a execução apenas para telas maiores que 1440px
    gsap.registerPlugin(ScrollTrigger);

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
  }
});