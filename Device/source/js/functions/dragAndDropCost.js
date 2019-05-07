/*Перемещение ползунка*/
import {getShadowSize} from "./getShadowSize";
import {getMinAndMaxPrice} from "./getMinMaxPrice";

const getCooords = (elem) => {
  const box = elem.getBoundingClientRect();

  return {
    left: box.left + pageXOffset,
  }
};

const setPinPosition = (pin, pinXCoord) => {
  pin.style.left = pinXCoord + `px`;
};

const range = document.querySelector(`.cost-level__line`);
const MIN_X_RANGE = 0;
const MAX_X_RANGE = 190;

const changeRange = (evt)=> {
  const coordsRange = getCooords(range);
  const coordsPin = getCooords(evt.target);
  const shiftX = evt.pageX - coordsPin.left + coordsRange.left;

  const onPinMove = (evtMove) => {
    let pinX = evtMove.pageX - shiftX;

    const checkArea = (position, min, max) => {

      if (position > max) {
        position = max;
      }

      if (position < min ) {
        position = min;
      }

      pinX = position;
      return pinX;
    };

    const pinCurrentPosition = checkArea(pinX, MIN_X_RANGE, MAX_X_RANGE);
    setPinPosition(evt.target, pinCurrentPosition);
    getShadowSize(MAX_X_RANGE);
    getMinAndMaxPrice();
  };

  document.addEventListener(`mousemove`, onPinMove);

  let onPinMouseUp = () => {
    document.removeEventListener(`mousemove`, onPinMove);
    document.removeEventListener(`mouseup`, onPinMouseUp);
  };

  document.addEventListener(`mouseup`, onPinMouseUp);
};

export {changeRange};
