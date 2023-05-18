import { containerHandler } from "./src/js/container/container";
import "./src/css/main.css";
import { getAllProducts } from "./src/js/api/products/apiProducts";

export const initialAction = async () => {
  await getAllProducts();
  containerHandler();
};

initialAction();