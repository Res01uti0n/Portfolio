/*Получение максимальной и минимальной цены*/
import {shadow} from "./getShadowSize";

const MAX_RANGE_PRICE = 8400;
const inputMin = document.querySelector(`.min-cost`);
const inputMax = document.querySelector(`.max-cost`);
const outputMin = document.querySelector(`.output__min`);
const outputMax = document.querySelector(`.output__max`);

const getRightPrice = (percents) => {
  const price = MAX_RANGE_PRICE * percents / 100;

  return price;
};

const getMinAndMaxPrice = () => {
  const shadowPosition = {
    left: getRightPrice(shadow.style.left.slice(0, -1)),
    right: getRightPrice(shadow.style.right.slice(0, -1)),
    width: getRightPrice(shadow.style.width.slice(0, -1)),
  };

  const minPrice = MAX_RANGE_PRICE - (shadowPosition.width + shadowPosition.right);
  const maxPrice = MAX_RANGE_PRICE - shadowPosition.right;

  inputMin.setAttribute(`value`, minPrice);
  inputMax .setAttribute(`value`, maxPrice);
  outputMin.textContent = `от ${minPrice}`;
  outputMax.textContent = `до ${maxPrice}`;
};

export {getMinAndMaxPrice};
