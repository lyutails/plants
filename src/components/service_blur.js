export function serviceBlur() {
  const gardensButton = document.querySelector(".service_button.gardens");
  const gardensCardOne = document.querySelector(".card.one");
  const gardensCardFive = document.querySelector(".card.five");
  const lawnButton = document.querySelector(".service_button.lawn");
  const lawnCardThree = document.querySelector(".card.three");
  const plantingButton = document.querySelector(".service_button.planting");
  const plantingCardTwo = document.querySelector(".card.two");
  const plantingCardFour = document.querySelector(".card.four");
  const plantingCardSix = document.querySelector(".card.six");

  // function toggleBlur() {
  //     this.classList.toggle('blur');
  //     this.style.filter = 'blur(5px)';
  // }
  // gardens.addEventListener('click', toggleBlur);

  gardensButton.addEventListener("click", () => {
    //gardensCardOne.style.filter = 'blur(5px)';
    //gardensCardFive.style.filter = 'blur(5px)';
    lawnCardThree.classList.toggle("blur");
    plantingCardTwo.classList.toggle("blur");
    plantingCardFour.classList.toggle("blur");
    plantingCardSix.classList.toggle("blur");
    gardensButton.classList.toggle('active');
  });

  lawnButton.addEventListener("click", () => {
    lawnCardThree.classList.toggle("blur");
    lawnButton.classList.toggle('active');
  });

  //document.querySelector(".service_button.planting").disabled = true;

  if(gardensButton.classList.contains('active') === true && lawnButton.classList.contains('active') === true) {
    // plantingButton.setAttribute('disabled', '');
    // plantingButton.disabled = true;
    document.querySelector(".service_button.planting").disabled = true;
    lawnCardThree.classList.remove("blur");
  }
}
