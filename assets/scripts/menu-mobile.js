// Seleciona os elementos
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const menuLinks = document.querySelectorAll('.mobile-menu-list a'); // Todos os links do menu

// Abre o menu mobile ao clicar no ícone hambúrguer
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open'); // Adiciona a classe que exibe o menu
});

// Fecha o menu mobile ao clicar no botão "X"
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open'); // Remove a classe que exibe o menu
});

// Fecha o menu ao clicar em qualquer link do menu mobile
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open'); // Remove a classe que exibe o menu
  });
});