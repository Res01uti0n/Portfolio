/*Регулировка тени*/
const shadow = document.querySelector(`.cost-level__depth`);

const getRightSize = (size1, size2)=> {
  let width;
  let left;
  let right;

  if (size1 > size2) {
    width =  size1;
    left = size2;
  } else {
    width =  size2;
    left = size1;
  }

  right = 100 - width;
  width = 100 - left - right;

  shadow.style.width = width + `%`;
  shadow.style.left = left + `%`;
  shadow.style.right = right + `%`;
};

const getShadowSize = (max) => {
  const pinCoords = {
    pin1: document.querySelector(`.cost-level__pin`).style.left.slice(0, -2),
    pin2: document.querySelector(`.pin--2`).style.left.slice(0, -2),
  };

  const pin1size = Math.floor(pinCoords.pin1 / (max / 100));
  const pin2size = Math.floor(pinCoords.pin2 / (max / 100));

  getRightSize(pin1size, pin2size);

};

export {getShadowSize, shadow};
