// Header dropdown - Start -
const initDropdown = () => {
  const helpBlock = document.querySelector('.header__help-block');
  if (helpBlock) {
    const helpBtn = helpBlock.querySelector('.header__btn-help');
    const dropdownBlock = helpBlock.querySelector('.header__dropdown-block');
    const closeBtn = helpBlock.querySelector('.header__dropdown-btn-close');
    helpBlock.addEventListener('click', (e) => {
      const target = e.target;
      if (target === helpBtn) {
        dropdownBlock.classList.toggle('is-active');
      }
      if (target === closeBtn) {
        dropdownBlock.classList.remove('is-active');
      }
    });
  }
};
export {initDropdown};
// Header dropdown - End -
