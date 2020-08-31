
let swiperTeam = new Swiper(".swiper-container", {
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
