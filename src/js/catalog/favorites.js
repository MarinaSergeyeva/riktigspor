import userData from "../userData.js";

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
      const btnText = document.querySelector(`[data-id='${product.id}']`);

      elem.classList.add("active");
      btnText.innerHTML = "Remove from favorite";
    }
  });
};

export const toggleFavorite = (e) => {
  const id = Number(e.target.dataset.id);
  const isFavorite = userData.favoriteProducts.includes(id);
  const elem = document.getElementById(`favorite__icon-${id}`);
  const btnText = document.querySelector(`[data-id='${id}']`);

  // ADDING ITEM TO FAVORITES //

  if (e.target.nodeName === "BUTTON" && !isFavorite) {
    elem.classList.add("active");

    userData.favoriteProducts = [...userData.favoriteProducts, id];
    localStorage.setItem(
      "favorites",
      JSON.stringify(userData.favoriteProducts)
    );

    btnText.innerHTML = "Remove from favorite";
  }

  // REMOVING ITEM FROM FAVORITES //

  if (e.target.nodeName === "BUTTON" && isFavorite) {
    elem.classList.remove("active");

    const updatedFavorites = userData.favoriteProducts.filter(
      (product) => product !== id
    );
    userData.favoriteProducts = [...updatedFavorites];
    localStorage.setItem(
      "favorites",
      JSON.stringify(userData.favoriteProducts)
    );

    btnText.innerHTML = "Add to favorite";
  }
};
