import {showBtn, hideBtn, showAndCloseNav} from "./functions/showModal";
import {changeSlide} from "./functions/changeSlide";

const searchInput = document.querySelector(`.search__input`);

searchInput.addEventListener(`focus`, showBtn);
searchInput.addEventListener(`blur`,  hideBtn);

const btnCatalog = document.querySelector(`.item--catalog`);

btnCatalog.addEventListener(`click`, showAndCloseNav);

const optionsList = document.querySelector(`.options__list`);

optionsList.addEventListener(`click`, changeSlide);


