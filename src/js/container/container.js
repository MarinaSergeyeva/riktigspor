import { catalogMarkup } from "../catalog/catalogMarkup";
import { refs } from "../components/refs";
import {
  addEventListeners,
  getFavorites,
  showFavorites,
} from "../storage/storage";

const containerHeaderMarkup = () => {
  return `
    <header class="header-wrapper"><h2>Header</h2></header>
    `;
};

const containerFooterMarkup = () => {
  return `
    <footer class="footer-wrapper"><h2>Footer</h2></footer>
    `;
};

const containerSectionsMarkup = () => {
  return `
    <div class="catalog-wrapper">${catalogMarkup()}</div>
    `;
};

export const containerHandler = () => {
  refs.container.insertAdjacentHTML("afterbegin", containerHeaderMarkup());
  refs.container.insertAdjacentHTML("beforeend", containerFooterMarkup());
  getFavorites();
  refs.sections.innerHTML = containerSectionsMarkup();
  showFavorites();
  addEventListeners();
};
