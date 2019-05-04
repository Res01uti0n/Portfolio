import {showBtn, hideBtn, showAndCloseNav, showWriteUs, showMapModal} from "./functions/showModal";
import {firstSliderHandler, secondSliderHandler} from "./functions/changeSlide";
import {changeDecor} from "./functions/changeDecor";

const searchInput = document.querySelector(`.search__input`);

searchInput.addEventListener(`focus`, showBtn);
searchInput.addEventListener(`blur`,  hideBtn);

const btnCatalog = document.querySelector(`.item--catalog`);

btnCatalog.addEventListener(`click`, showAndCloseNav);

const optionsList = document.querySelector(`.options__list`);

optionsList.addEventListener(`click`, firstSliderHandler);

const popularList = document.querySelector(`.popular__list`);

popularList.addEventListener(`mouseover`, changeDecor);

const servesList = document.querySelector(`.serves__list`);

servesList.addEventListener(`click`, secondSliderHandler);

const btnWriteUs = document.querySelector(`.btn--write`);

btnWriteUs.addEventListener(`click`, showWriteUs);

const map = document.querySelector(`.info__map`);

map.addEventListener(`click`, showMapModal);


