// Seleciona o botão
const scrollToTopBtn = document.getElementById("scrollToTop");

// Mostra o botão ao rolar a página
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) { // Ajuste o valor conforme necessário
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Rola para o topo ao clicar no botão
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Suaviza o scroll
  });
});