import {showBtn, hideBtn, showAndCloseNav, searchBtn} from "./functions/showModal";
import {changeRange} from "./functions/dragAndDropCost";
import {searchInput, setSearch} from "./functions/searchInput";
import {createGoods} from "./functions/createGoods";

searchInput.addEventListener(`focus`, showBtn);
searchInput.addEventListener(`blur`,  hideBtn);
searchBtn.addEventListener(`click`, setSearch);

const btnCatalog = document.querySelector(`.item--catalog`);

btnCatalog.addEventListener(`click`, showAndCloseNav);

const costPin = document.querySelector(`.cost-level__pin`);
const costPin2 = document.querySelector(`.pin--2`);

costPin.addEventListener(`mousedown`, changeRange);
costPin2.addEventListener(`mousedown`, changeRange);

/*createGoods();*/
