/*функция подчеркивания навигации*/
const itemMouseOverHandler = (evt) => {
  const currentItem = evt.target;
  if (currentItem.classList.contains('nav__item')) {
    currentItem.classList.add(`nav__item--active`);
  }
  currentItem.addEventListener(`mouseout`, itemMouseOutHandler);
};

const itemMouseOutHandler = (evt)=> {
  evt.target.classList.remove(`nav__item--active`);
};

export {itemMouseOverHandler};
