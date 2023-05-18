export function catalogMarkup() {
  return `<ul class="catalog__list">${catalogItemMarkup()}</ul>`;
}

function catalogItemMarkup() {
  return `<li class="catalog__item">
            <article class="product">
              <img class="product__image" src="" alt="product__image" />
              <h3 class="product__name">Product name</h3>
              <p class="product__price">price: NOK</p>
              <button class="button product__button" aria-label="Add to cart">
                <svg class="button__icon" width="30" height="30">
                  <use xlink:href="./src/images/icons/favorite.svg#favorite" fill="red"></use>
                </svg>
              </button>
            </article>
          </li>`;
}
