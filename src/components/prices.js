export function pricesAccordion() {
  const basicsOpenButton = document.querySelector(".circle.basics");
  const basicsBlock = document.querySelector(".option");
  const arrowDropDownLeft = document.querySelector(".arrow_dropdown.left");
  const arrowDropDownRight = document.querySelector(".arrow_dropdown.right");

  const line = document.createElement("div");
  line.classList.add("price_line");
  const text = document.createElement("p");
  text.classList.add("price_text");
  text.textContent =
    "Release of Letraset sheets containing Lorem Ipsum passages, and more recently";
  const priceBasicsHolder = document.createElement("div");
  priceBasicsHolder.classList.add("price_basics_holder");
  const priceBasics = document.createElement("span");
  priceBasics.classList.add("price_basics");
  priceBasics.textContent = "$15";
  priceBasicsHolder.appendChild(priceBasics);
  const pricePerHour = document.createElement("span");
  pricePerHour.classList.add("price_hour");
  pricePerHour.textContent = " / per hour";
  priceBasicsHolder.appendChild(pricePerHour);
  const orderButton = document.createElement("div");
  orderButton.classList.add("order_button");
  orderButton.textContent = "Order";

  basicsBlock.appendChild(line);
  basicsBlock.appendChild(text);
  basicsBlock.appendChild(priceBasicsHolder);
  basicsBlock.appendChild(orderButton);

  line.style.visibility = "hidden";
  text.style.visibility = "hidden";
  priceBasicsHolder.style.visibility = "hidden";
  orderButton.style.visibility = "hidden";
  basicsBlock.style.height = "50px";

  basicsOpenButton.addEventListener("click", () => {
    basicsBlock.classList.toggle("opened");
    basicsOpenButton.classList.toggle("opened");
    arrowDropDownLeft.classList.toggle("opened");
    arrowDropDownRight.classList.toggle("opened");

    HTMLElement.prototype.empty = function () {
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
    };

    if (basicsBlock.classList.contains("opened")) {
      line.style.visibility = "visible";
      text.style.visibility = "visible";
      priceBasicsHolder.style.visibility = "visible";
      orderButton.style.visibility = "visible";
      basicsBlock.style.height = "154px";
    } else {
      //basicsBlock.removeChild(basicsBlock.lastChild);
      //   priceBasics.replaceChildren();
      //   text.textContent = "";
      //text.empty();
      //text.remove();
      //priceBasicsHolder.remove();
      //document.querySelector(".option.opened").removeChild("price_text");
      //   text.style.display = "none";
      line.style.visibility = "hidden";
      text.style.visibility = "hidden";
      priceBasicsHolder.style.visibility = "hidden";
      orderButton.style.visibility = "hidden";
      basicsBlock.style.height = "50px";
    }
  });
}
