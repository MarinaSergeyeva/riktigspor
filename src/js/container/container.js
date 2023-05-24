import { catalogMarkup } from "../catalog/catalogMarkup.js";
import {
  addEventListeners,
  getFavorites,
  showFavorites,
} from "../catalog/favorites.js";
import { navigationMarkup } from "../components/navigationMarkup.js";
import { refs } from "../components/refs.js";

const containerHeaderMarkup = () => {
  return `
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a href="/">
          <img src="./src/images/logo.svg" alt="main logo" class="logo" height="32" width="80">
        </a>
        ${navigationMarkup()}
      </div>
    </div>
  </header>
    `;
};

const containerFooterMarkup = () => {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">  
        <p class="footer__info">Hello! I'm footer and I'll be filled with contacts
      </div>
    </div>
  </footer>
    `;
};

const containerSectionsMarkup = () => {
  return `
  <div class="container">
    <div class="catalog__wrapper">${catalogMarkup()}</div>
    </div>`;
};

export const containerHandler = () => {
  refs.container.insertAdjacentHTML("beforebegin", containerHeaderMarkup());
  refs.container.insertAdjacentHTML("afterend", containerFooterMarkup());
  getFavorites();
  refs.sections.innerHTML = containerSectionsMarkup();
  showFavorites();
  addEventListeners();
};
