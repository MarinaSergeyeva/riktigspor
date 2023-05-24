import { toggleFavorite } from "./catalog/favorites";

export const addEventListeners = () => {
  const list = document.querySelector(".catalog__list");

  // adding attribute for current page
  document.querySelectorAll(".navigation__link").forEach((link) => {
    if (link.href === window.location.href) {
      link.setAttribute("aria-current", "page");
    }
  });

  // mobile menu
  const mobileNav = document.querySelector(".menu");
  const openMenu = () => {
    alert("Here can be your mobile menu.");
  };

  list.addEventListener("click", toggleFavorite);
  mobileNav?.addEventListener("click", openMenu);
};
