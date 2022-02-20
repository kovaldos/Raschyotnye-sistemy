// Change main heading inner text on mobile - Start
const initChangeH1Text = () => {
  const h1 = document.querySelector('.main-heading__title');
  if (h1) {
    let text = h1.innerText;
    if (window.matchMedia('(max-width: 800px)').matches) {
      h1.innerText = 'Узнайте, как оплатить';
    } else {
      h1.innerText = text;
    }
  }
};
export {initChangeH1Text};
// Change main heading inner text on mobile - Start
