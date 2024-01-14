  // Verificar se a tela é um dispositivo móvel
  function isMobile() {
    return window.innerWidth <= 900; // Ajuste esse valor conforme necessário
  }

  // Alterar a imagem do carrossel se for um dispositivo móvel
  document.addEventListener("DOMContentLoaded", function () {
    if (isMobile()) {
      var mobileCarouselItem = document.getElementById("mobile-carousel-item");
      if (mobileCarouselItem) {
        mobileCarouselItem.querySelector("img").src = "./Images/3CARROSEL.webp";
      }
    }
  });