/*Слайдеры*/
const firstSliderData = {
  firstListSlides: Array.from(document.querySelectorAll(`.slide`)),
  firstListToggles: Array.from(document.querySelectorAll(`.option__item`)),
  classForSlide: `hidden`,
  classForBtn: `option--active`,
};

const secondSliderData = {
  firstListSlides: Array.from(document.querySelectorAll(`.serves`)),
  firstListToggles: Array.from(document.querySelectorAll(`.serves__btn`)),
  classForSlide: `hidden`,
  classForBtn: `serves--active`,
};

class Slider {
  constructor(slidesArray, btnList, class1, class2) {
    this.slides = slidesArray;
    this.btns = btnList;
    this.classSlide = class1;
    this.classBtn = class2;
  }

  changeSlide(index) {
    this.slides.forEach((item)=> {
      item.classList.add(this.classSlide);
    });

    this.slides[index].classList.remove(this.classSlide);
  }

  changeBtnDecor(index) {
    this.btns.forEach((item) => {
      item.classList.remove(this.classBtn);
    });

    this.btns[index].classList.add(this.classBtn);
  }
}

const firstSlider = new Slider(firstSliderData.firstListSlides, firstSliderData.firstListToggles,
  firstSliderData.classForSlide, firstSliderData.classForBtn);

const secondSlider = new Slider(secondSliderData.firstListSlides, secondSliderData.firstListToggles,
  secondSliderData.classForSlide, secondSliderData.classForBtn);

const firstSliderHandler = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains(`option__item`)) {
    const index = evt.target.getAttribute(`data-index`);

    firstSlider.changeSlide(index);
    firstSlider.changeBtnDecor(index);
  }
};

const secondSliderHandler = (evt) => {
  evt.preventDefault();

  if (evt.target.classList.contains(`serves__btn`)) {
    const index = evt.target.getAttribute(`data-index`);

    secondSlider.changeSlide(index);
    secondSlider.changeBtnDecor(index);
  }
};

export {firstSliderHandler, secondSliderHandler};

