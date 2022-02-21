// Burger menu - Start -

const initBurgerMenu = () => {
  const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    const slider = document.querySelector('.work-with-us__slider');
    iconMenu.addEventListener('click', () => {
      iconMenu.classList.toggle('is-active');
      menuBody.classList.toggle('is-active');
      document.body.classList.toggle('is-locked');
      // Фикс для перекрытия боковым меню слайдера с партнёрами, если он будет
      if (slider) {
        setTimeout(() => {
          slider.classList.toggle('z-index--1');
        }, 150);
      }
    });
  }
};
export {initBurgerMenu};
// Burger menu - End -

