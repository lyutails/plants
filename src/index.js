import "./style.scss";

import { burgerCreate } from "./components/burger";
import { serviceBlur } from "./components/service_blur";
import { pricesAccordion } from "./components/prices";
import { citySelect } from "./components/city-select";

burgerCreate();

serviceBlur();

pricesAccordion();

citySelect();

const logo = document.querySelector(".logo");
logo.onclick = function () {
  logo.classList.toggle("active");
}
