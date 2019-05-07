/*Создание карточек товара*/
const goods = [
  {src:`img/catalog/item-1.jpg`, name:`Любительская селфи-палка`, price: `500 руб.`},
  {src:`img/catalog/item-2.jpg`, name:`Профессиональная селфи-палка`, price: `1 500 руб.`},
  {src:`img/catalog/item-3.jpg`, name:`Непотопляемая селфи-палка`, price: `2 500 руб.`},
  {src:`img/catalog/item-4.jpg`, name:`Селфи-палка «Следуй за мной»`, price: `4 900 руб.`},
];

const createGoods = ()=> {
  const fragment = document.createDocumentFragment();
  const goodsList = document.querySelector(`.goods__block`);
  const template = document.querySelector(`#good`).content.querySelector(`.good__card`);

  class Good {
    constructor(img, title, price) {
      this.img = img;
      this.title = title;
      this.price = price;
    }

    createCard() {
      const element = template.cloneNode(true);

      element.querySelector(`.good__img`).src = this.img;
      element.querySelector(`.good__img`).alt = this.title;
      element.querySelector(`.good__title`).textContent = this.title;
      element.querySelector(`.good__price`).textContent = this.price;

      return element;
    }
  }

  goods.forEach((item)=> {
    const infoCard = new Good(item.src, item.name, item.price);
    const card = infoCard.createCard();

    fragment.appendChild(card)
  });

  goodsList.insertBefore(fragment, goodsList.firstChild);
};

export {createGoods};
