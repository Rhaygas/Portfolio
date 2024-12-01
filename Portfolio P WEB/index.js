// Seleciona o cabeçalho pela classe correta
const header = document.querySelector('.cabecalho');

// Função para lidar com o scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Verifica se o scroll passou de 20px
  if (scrollY > 20) {
    if (!header.classList.contains('fixed')) {
        header.classList.add('fixed');
    }
} else {
    if (header.classList.contains('fixed')) {
        header.classList.remove('fixed');
    }
}
});

