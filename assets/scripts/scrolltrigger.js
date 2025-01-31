document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to(".metas-title", {
    y: 850,
    duration: 3,
    ease: "linear",
    scrollTrigger: {
      trigger: '.metas-title',
      start: 'bottom 80%',
      end: 'bottom -10%',
      scrub: 2,
      //markers: true,
    }
  });

  gsap.to(".pesquisas-title", {
    y: 2000,
    duration: 3,
    ease: "linear",
    scrollTrigger: {
      trigger: '.pesquisas-title',
      start: 'bottom 40%',
      end: 'bottom -180%',
      scrub: 2,
      //markers: true,
    }
  });

});