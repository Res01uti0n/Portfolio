/*Смена слайда*/
const slides = Array.from(document.querySelectorAll(`.slide`));
const toggles = Array.from(document.querySelectorAll(`.option__item`));

const changeSlide = (evt)=> {
  if (evt.target.classList.contains(`option__item`)) {
    const index = evt.target.getAttribute(`data-index`);

    slides.forEach((item)=> {
      item.classList.add(`hidden`);
    });

    toggles.forEach((item)=> {
      item.classList.remove(`option--active`);
    });

    slides[index].classList.remove(`hidden`);
    toggles[index].classList.add(`option--active`);
  }
};

export {changeSlide};

