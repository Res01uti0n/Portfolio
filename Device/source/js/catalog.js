import {showBtn, hideBtn, showAndCloseNav} from "./functions/showModal";
import {changeRange} from "./functions/dragAndDropCost";

const searchInput = document.querySelector(`.search__input`);

searchInput.addEventListener(`focus`, showBtn);
searchInput.addEventListener(`blur`,  hideBtn);

const btnCatalog = document.querySelector(`.item--catalog`);

btnCatalog.addEventListener(`click`, showAndCloseNav);

const costPin = document.querySelector(`.cost-level__pin`);
const costPin2 = document.querySelector(`.pin--2`);

costPin.addEventListener(`mousedown`, changeRange);
costPin2.addEventListener(`mousedown`, changeRange);
