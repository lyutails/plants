export function serviceBlur() {
  const gardensButton = document.querySelector(".service_button.gardens");
  const gardensCards = document.querySelectorAll(".card.gardens");
  const lawnButton = document.querySelector(".service_button.lawn");
  const lawnCards = document.querySelectorAll(".card.lawn");
  const plantingButton = document.querySelector(".service_button.planting");
  const plantingCards = document.getElementsByClassName("card planting");
  const serviceButtons = document.querySelectorAll(".service_button");

  // function toggleBlur() {
  //     this.classList.toggle('blur');
  //     this.style.filter = 'blur(5px)';
  // }
  // gardens.addEventListener('click', toggleBlur);

  gardensButton.addEventListener("click", () => {
    //gardensCardOne.style.filter = 'blur(5px)';
    //gardensCardFive.style.filter = 'blur(5px)';
    gardensButton.classList.toggle("active");
    for (const card of gardensCards) {
      card.classList.remove("blur");
    }
    for (const card of lawnCards) {
      card.classList.toggle("blur");
    }
    for (const card of plantingCards) {
      card.classList.toggle("blur");
    }
  });

  lawnButton.addEventListener("click", () => {
    lawnButton.classList.toggle("active");
    for (const card of lawnCards) {
      card.classList.remove("blur");
    }
    for (const card of gardensCards) {
      card.classList.toggle("blur");
    }
    for (const card of plantingCards) {
      card.classList.toggle("blur");
    }
  });

  plantingButton.addEventListener("click", () => {
    plantingButton.classList.toggle("active");
    for (const card of plantingCards) {
      card.classList.remove("blur");
    }
    for (const card of gardensCards) {
      card.classList.toggle("blur");
    }
    for (const card of lawnCards) {
      card.classList.toggle("blur");
    }
  });

  serviceButtons.forEach((button) => {
    button.addEventListener("click", () => {button.disabled = true;
    });
  });

  //document.querySelector(".service_button.planting").disabled = true;
}
