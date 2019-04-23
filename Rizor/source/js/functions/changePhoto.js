/*функция выбора цвета*/
import {hyroPhotos} from "../data";

const pictureHyro = document.querySelector(`.picture`);
const source1900 = pictureHyro.querySelector(`source`);
const source768 = pictureHyro.querySelector(`.source-2`);
const img = pictureHyro.querySelector(`img`);

const changePhoto = (evt) => {
  if(evt.target.name === `color`) {
    const id = evt.target.getAttribute(`id`);

    source1900.srcset = hyroPhotos[id];
    source768.srcset = hyroPhotos[id];
    img.src = hyroPhotos[id];
  }
};

export {changePhoto};
