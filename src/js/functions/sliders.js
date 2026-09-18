export default function sliders() {
  const cardCarSliders = document.querySelectorAll(".card-car__slider");

  if (cardCarSliders.length) {
    cardCarSliders.forEach(slider => {
      const swiper = new Swiper(slider, {
        speed: 900,
        spaceBetween: 5,
        slidesPerView: 1,
        navigation: {
          prevEl: slider.querySelector(".slider-arrow._prev"),
          nextEl: slider.querySelector(".slider-arrow._next")
        },
        pagination: {
          el: slider.querySelector(".slider-pagination-r"),
          clickable: true
        }
      })
    })
  }

  const catalogSlider = document.querySelector(".s-catalog__slider");

  if (catalogSlider && window.matchMedia("(max-width: 1025px)").matches) {
    const swiper = new Swiper(catalogSlider, {
      speed: 900,
      slidesPerView: "auto",
      spaceBetween: 10,
      pagination: {
        el: ".s-catalog .slider-pagination",
        clickable: true
      },
      
    })
  }
}