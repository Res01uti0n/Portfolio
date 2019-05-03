const MODAL_CLASS = {
  searchBtn: `btn--show`,
  navExtra : `extra--show`,
};

/*Показ и скрытие элементов*/
const addClass = (modal, className)=> {
  modal.classList.add(className);
};

const removeClass = (modal, className)=> {
  modal.classList.remove(className);
};

/*Кнопки поииска*/
const searchBtn = document.querySelector(`.search__btn`);

const showBtn = (evt)=> {
  addClass(searchBtn, MODAL_CLASS.searchBtn);
};

const hideBtn = (evt)=> {
  removeClass(searchBtn, MODAL_CLASS.searchBtn);
};

/*Дополнительной навигации*/
const navExtra = document.querySelector(`.nav__extra`);

const showAndCloseNav = (evt)=> {
  navExtra.classList.toggle(MODAL_CLASS.navExtra);
};

export {showBtn, hideBtn, showAndCloseNav};


