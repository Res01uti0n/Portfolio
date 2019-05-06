const MODAL_CLASS = {
  searchBtn: `btn--show`,
  navExtra : `extra--show`,
  modal: `modal--show`,
};

/*Показ и скрытие элементов*/
const addClass = (modal, className)=> {
  modal.classList.add(className);
};

const removeClass = (modal, className)=> {
  modal.classList.remove(className);
};

/*Кнопки поиска*/
const searchBtn = document.querySelector(`.search__btn`);

const showBtn = (evt)=> {
  addClass(searchBtn, MODAL_CLASS.searchBtn);
};

const hideBtn = (evt)=> {
  removeClass(searchBtn, MODAL_CLASS.searchBtn);
};

/*Напиши нам*/
const writeUsModal = document.querySelector(`.write-us__modal`);

const showWriteUs = (evt) => {
  evt.preventDefault();

  addClass(writeUsModal, MODAL_CLASS.modal);
  const inputName = writeUsModal.querySelector(`#name`);
  inputName.focus();

  const btnClose = writeUsModal.querySelector(`.modal-close__btn`);
  btnClose.addEventListener(`click`, hideWriteUs);
};

const hideWriteUs = (evt) => {
  removeClass(writeUsModal, MODAL_CLASS.modal);
};

/*Карта*/
const mapModal = document.querySelector(`.map__modal`);

const showMapModal = (evt) => {
  evt.preventDefault();

  addClass(mapModal, MODAL_CLASS.modal);

  const btnClose = mapModal.querySelector(`.modal-close__btn`);
  btnClose.addEventListener(`click`, hideMap);
};

const hideMap = (evt) => {
  removeClass(mapModal, MODAL_CLASS.modal);
};

/*Дополнительной навигации*/
const navExtra = document.querySelector(`.nav__extra`);

const showAndCloseNav = (evt)=> {
  navExtra.classList.toggle(MODAL_CLASS.navExtra);
};

export {showBtn, hideBtn, showAndCloseNav, showWriteUs, showMapModal};


