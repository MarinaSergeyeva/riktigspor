import { containerHandler } from "./src/js/container/container.js";
import { getAllProducts } from "./src/js/api/products/apiProducts.js";

export const initialAction = async () => {
  await getAllProducts();
  containerHandler();
};

initialAction();
