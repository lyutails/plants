export function pricesAccordion() {
  const basicsOpenButton = document.querySelector(".circle.basics");
  const basicsBlock = document.querySelector(".option");
  const arrowDropDownLeft = document.querySelector(".arrow_dropdown.left");
  const arrowDropDownRight = document.querySelector(".arrow_dropdown.right");

  basicsOpenButton.addEventListener("click", () => {
    basicsBlock.classList.toggle("opened");
    basicsOpenButton.classList.toggle("opened");
    arrowDropDownLeft.classList.toggle("opened");
    arrowDropDownRight.classList.toggle("opened");

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

    HTMLElement.prototype.empty = function () {
      while (this.firstChild) {
        this.removeChild(this.firstChild);
      }
    };

    if (basicsBlock.classList.contains("opened")) {
      basicsBlock.appendChild(line);
      basicsBlock.appendChild(text);
      basicsBlock.appendChild(priceBasicsHolder);
      basicsBlock.appendChild(orderButton);
    } else {
      basicsBlock.removeChild(basicsBlock.lastChild);
      //   priceBasics.replaceChildren();
      //   text.textContent = "";
      text.empty();
      text.remove();
      priceBasicsHolder.remove();
      document.querySelector('.option.opened').removeChild("price_text");
      //   text.style.display = "none";
    }
  });

  //   const pricesOptions = document.querySelectorAll('.prices_options .option .circle');
  //   pricesOptions.forEach((price_option) => {
  //     price_option.addEventListener('click', (e) => {
  //         document.querySelector('.option .circle.opened').classList.remove('opened');
  //         e.target.classList.add('opened');
  //     })
  //   })
}
