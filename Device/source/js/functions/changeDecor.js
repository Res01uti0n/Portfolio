/*Смена цвета в популярных*/
const changeDecor = (evt)=> {
  if (evt.target.classList.contains(`popular__item`)) {
    evt.target.classList.add(`item--hover`);
    evt.target.addEventListener(`mouseout`, backDecor);
  }
};

const backDecor = (evt) => {
  evt.target.removeEventListener(`mouseout`, backDecor);
  evt.target.classList.remove(`item--hover`);
};

export {changeDecor};
