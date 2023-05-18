import userData from "../userData";

export function catalogMarkup() {
  return `<div>
            <h2 class="catalog__title">Catalog</h2>
            <ul class="catalog__list">${catalogItemMarkup()}</ul>
          </div>`;
}

function catalogItemMarkup() {
  const products = userData.allProducts;

  const markup = products.reduce((acc, item) => {
    acc += `<li class="catalog__item" key=${item.id}>
            <article class="product">
              <img class="product__image" src=${item.thumbnail} alt="product__image" />
              <h3 class="product__title">${item.title}</h3>
              <p class="product__description">${item.description}</p>
              <p class="product__price">price: ${item.price} NOK</p>
              <button class="button product__button" aria-label="Add to cart">
                Add to favorite
              </button>
              <svg class="favorite__icon" width="30" height="30">
                <use xlink:href="./src/images/icons/favorite.svg#favorite" fill="red"></use>
              </svg>
            </article>
          </li>`;
    return acc;
  }, "");

  return markup;
}
