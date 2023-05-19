import userData from "../userData";

export const getFavorites = () => {
  const localFav = JSON.parse(localStorage.getItem("favorites"));

  if (localFav && localFav.length > userData.favoriteProducts.length) {
    userData.favoriteProducts = [...localFav];
  }
};

export const showFavorites = () => {
  const allProducts = document.querySelectorAll(".catalog__item");
  const favorites = userData.favoriteProducts;

  allProducts.forEach((product) => {
    const id = Number(product.id);

    if (favorites.includes(id)) {
      const elem = document.getElementById(`favorite__icon-${id}`);
      elem.classList.add("active");
    }
  });
};

export const addFavoriteItem = (e) => {
  if (e.target.nodeName === "BUTTON") {
    const id = Number(e.target.dataset.id);

    const elem = document.getElementById(`favorite__icon-${id}`);
    elem.classList.add("active");

    if (!userData.favoriteProducts.includes(id)) {
      userData.favoriteProducts = [...userData.favoriteProducts, id];
      localStorage.setItem(
        "favorites",
        JSON.stringify(userData.favoriteProducts)
      );
    }
  }
};

export const addEventListeners = () => {
  const list = document.querySelector(".catalog__list");
  list.addEventListener("click", addFavoriteItem);
};
