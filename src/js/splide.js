document.addEventListener("DOMContentLoaded", function () {
  // Инициализация splide.js
  var splide = new Splide("#goods-slider", {
    type: "loop",
    perPage: 1,
    pagination: true,
    arrows: true,
  }).mount();

  // Открытие слайдера
  var openSliderBtn = document.querySelector(".open-slider");
  if (openSliderBtn) {
    openSliderBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var sliderModal = document.querySelector(".slider-modal");
      if (sliderModal) {
        sliderModal.style.display = "flex";
      }
    });
  }

  // Закрытие слайдера при нажатии на фон или кнопку закрытия
  var sliderModal = document.querySelector(".slider-modal");
  if (sliderModal) {
    sliderModal.addEventListener("click", function (e) {
      if (e.target === this) {
        this.style.display = "none";
      }
    });
  }
});
