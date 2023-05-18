import { containerHandler } from "./src/js/container/container";
import "./src/css/main.css";

export const initialAction = () => {
  containerHandler();
};

initialAction();
