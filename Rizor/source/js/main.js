import {btnClickHandler} from './functions/openMenu';
import {itemMouseOverHandler} from "./functions/navDecoration";
import {changePhoto} from "./functions/changePhoto";

const menuBtn = document.querySelector(`.menu__btn`);
menuBtn.addEventListener(`click`, btnClickHandler);

const listItems = document.querySelector(`.nav__list`);
listItems.addEventListener(`mouseover`, itemMouseOverHandler);

const listColors = document.querySelector(`.color__list`);
listColors.addEventListener(`click`, changePhoto);



