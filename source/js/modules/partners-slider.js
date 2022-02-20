/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-new */
// слайдер в секции Где купить - начало -
const initPartnersSlider = () => {
  const swiper01 = document.querySelector('.work-with-us__slider');
  if (swiper01) {
    new Swiper(swiper01, {
      // Optional parameters

      // Раскомментировать опции ниже для запуска бегущей строки
      loop: true,
      loopedSlides: 6,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 3500,
      freeMode: true,
      watchOverflow: true,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 0,
    });
  }

};
export {initPartnersSlider};

// слайдер в секции Где купить - конец -
