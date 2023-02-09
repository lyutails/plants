export function pricesAccordion() {
  const basicsOpenButton = document.querySelector(".circle.basics");
  const standardOpenButton = document.querySelector(".circle.standard");
  const procareOpenButton = document.querySelector(".circle.procare");
  const basicsBlock = document.querySelector(".option.one");
  const standardBlock = document.querySelector(".option.two");
  const procareBlock = document.querySelector(".option.three");
  const arrowDropDownLeft = document.querySelector(".arrow_dropdown.left");
  const arrowDropDownRight = document.querySelector(".arrow_dropdown.right");

  const allPricesOptions = document.querySelectorAll('.option');

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

  line.style.visibility = "hidden";
  text.style.visibility = "hidden";
  priceBasicsHolder.style.visibility = "hidden";
  orderButton.style.visibility = "hidden";

  basicsBlock.style.height = "50px";
  standardBlock.style.height = "50px";
  procareBlock.style.height = "50px";

  basicsOpenButton.addEventListener("click", () => {
    basicsBlock.classList.toggle("opened");
    basicsOpenButton.classList.toggle("opened");
    arrowDropDownLeft.classList.toggle("opened");
    arrowDropDownRight.classList.toggle("opened");

    basicsBlock.appendChild(line);
    basicsBlock.appendChild(text);
    basicsBlock.appendChild(priceBasicsHolder);
    basicsBlock.appendChild(orderButton);

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

      standardBlock.classList.remove('opened');
      standardBlock.style.height = "50px";
      procareBlock.classList.remove('opened');
      procareBlock.style.height = "50px";
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

  standardOpenButton.addEventListener("click", () => {
    standardBlock.classList.toggle("opened");
    standardOpenButton.classList.toggle("opened");
    arrowDropDownLeft.classList.toggle("opened");
    arrowDropDownRight.classList.toggle("opened");

    standardBlock.appendChild(line);
    standardBlock.appendChild(text);
    standardBlock.appendChild(priceBasicsHolder);
    standardBlock.appendChild(orderButton);

    basicsBlock.classList.remove('opened');
    basicsBlock.style.height = "50px";
    procareBlock.classList.remove('opened');
    procareBlock.style.height = "50px";

    if (standardBlock.classList.contains("opened")) {
      line.style.visibility = "visible";
      text.style.visibility = "visible";
      priceBasicsHolder.style.visibility = "visible";
      orderButton.style.visibility = "visible";
      standardBlock.style.height = "154px";
      priceBasics.textContent = "$25";
    } else {
      line.style.visibility = "hidden";
      text.style.visibility = "hidden";
      priceBasicsHolder.style.visibility = "hidden";
      orderButton.style.visibility = "hidden";
      standardBlock.style.height = "50px";
    }
  });

  procareOpenButton.addEventListener("click", (e) => {
    procareBlock.classList.toggle("opened");
    procareOpenButton.classList.toggle("opened");
    arrowDropDownLeft.classList.toggle("opened");
    arrowDropDownRight.classList.toggle("opened");

    procareBlock.appendChild(line);
    procareBlock.appendChild(text);
    procareBlock.appendChild(priceBasicsHolder);
    procareBlock.appendChild(orderButton);

    basicsBlock.classList.remove('opened');
    basicsBlock.style.height = "50px";
    standardBlock.classList.remove('opened');
    standardBlock.style.height = "50px";

    if (procareBlock.classList.contains("opened")) {
      line.style.visibility = "visible";
      text.style.visibility = "visible";
      priceBasicsHolder.style.visibility = "visible";
      orderButton.style.visibility = "visible";
      procareBlock.style.height = "154px";
      priceBasics.textContent = "$35";
    } else {
      line.style.visibility = "hidden";
      text.style.visibility = "hidden";
      priceBasicsHolder.style.visibility = "hidden";
      orderButton.style.visibility = "hidden";
      procareBlock.style.height = "50px";
    }
  });

//   allPricesOptions.forEach((option) => {
//     option.addEventListener('click', (e) => {
//         e.target.classList.add('opened');
//         !e.target.classList.remove('opened');
//     })
//   })
}
