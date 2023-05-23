import userData from "../userData";

export const catalogMarkup = () => {
  return `<div>
    <h2 class="catalog__title">Catalog</h2>
    <ul class="catalog__list">${catalogListMarkup()}</ul>
    </div>`;
};

const catalogListMarkup = () => {
  const products = userData.allProducts;

  const markup = products.reduce((acc, item) => {
    acc += cardMarkup(item);
    return acc;
  }, "");

  return markup;
};

const cardMarkup = (item) => {
  const markup = `<li class="catalog__item" key=${item.id} id=${item.id}>
            <article class="product">
              <img class="product__image" src=${item.thumbnail} alt="product__image" />
              <h3 class="product__title">${item.title}</h3>
              <p class="product__description">${item.description}</p>
              <p class="product__price">price: ${item.price} NOK</p>
              <button class="button product__button" data-id="${item.id}" aria-label="Add to favorite">
                Add to favorite
              </button>
              <svg class="favorite__icon" id="favorite__icon-${item.id}" width="30" height="30">
                <use
                  xlink:href="./src/images/icons/favorite.svg#favorite"
                  fill="red"
                ></use>
                </svg>
            </article>
          </li>`;

  return markup;
};
