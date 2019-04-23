/*открытие меню по нажатию на кнопку в мобильной версии*/
const btnClickHandler = (evt) => {
  const navModal = document.querySelector(`.nav__block`);

  navModal.classList.toggle(`nav--show`);
};

export {btnClickHandler};
