import userData from "../userData.js";
import { loader } from "../components/loader.js";

export const catalogMarkup = () => {
  // markup for demo switching between pages. Should be updated with real navigation
  let title;
  if (window?.location?.pathname === "/") {
    title = "Catalog";
  } else if (window.location.pathname === "/contacts") {
    title = "Contacts";
  } else if (window.location.pathname === "/profile") {
    title = "My profile";
  }

  return `<div>
    <h2 class="catalog__title">${title}</h2>
    <ul class="catalog__list">${catalogListMarkup()}</ul>
    </div>`;
};

const catalogListMarkup = () => {
  const products = userData.allProducts;
  let markup;
  if (products.length) {
    markup = products.reduce((acc, item) => {
      acc += cardMarkup(item);
      return acc;
    }, "");
  } else {
    return loader();
  }

  return markup;
};

const cardMarkup = (item) => {
  const markup = `<li class="catalog__item" key=${item.id} id=${item.id}>
            <article class="product">
              <img class="product__image" src=${item.thumbnail} alt="product__image" />
              <h3 class="product__title">${item.title}</h3>
              <p class="product__description">${item.description}</p>
              <p class="product__price">Price: ${item.price} NOK</p>
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
