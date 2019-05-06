import {shadow} from "./dragAndDropCost";

const MAX_RANGE_PRICE = 8400;
const inputMin = document.querySelector(`#min-cost`);
const inputMax = document.querySelector(`#max-cost`);
const outputMin = document.querySelector(`.output__min`);
const outputMax = document.querySelector(`.output__max`);

const getRightPrice = (percents) => {
  const price = Math.floor(MAX_RANGE_PRICE/100 * percents);
  console.log(price);
};

const getMinAndMaxPrice = () => {
  const shadowPosition = {
    left: getRightPrice(shadow.style.left.slice(0, -2)),
    right: getRightPrice(shadow.style.right.slice(0, -2)),
    width: getRightPrice(shadow.style.width.slice(0, -2)),
  };

  const minPrice = MAX_RANGE_PRICE - (shadowPosition.width + shadowPosition.right);
  const maxPrice = MAX_RANGE_PRICE - shadowPosition.right;

  inputMin.value = minPrice;
  inputMax.value = maxPrice;
  outputMin.textContent = `от ${minPrice}`;
  outputMax.textContent = `до ${maxPrice}`;
};

export {getMinAndMaxPrice};
