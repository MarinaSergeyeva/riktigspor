import { catalogMarkup } from "../catalog/catalog";
import { refs } from "../components/refs";

const containerHeaderMarkup = function () {
  return `
    <header class="header-wrapper"><h2>Header</h2></header>
    `;
};

const containerFooterMarkup = function () {
  return `
    <footer class="footer-wrapper"><h2>Footer</h2></footer>
    `;
};

const containerSectionsMarkup = function () {
  return `
    <div class="catalog-wrapper">${catalogMarkup()}</div>
    `;
};

export const containerHandler = () => {
  refs.container.insertAdjacentHTML("afterbegin", containerHeaderMarkup());
  refs.container.insertAdjacentHTML("beforeend", containerFooterMarkup());
  refs.sections.innerHTML = containerSectionsMarkup();
};
