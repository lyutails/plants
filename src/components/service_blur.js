export function serviceBlur() {
  const gardensButton = document.querySelector(".service_button.gardens");
  const gardensCards = document.querySelectorAll(".card.gardens");
  const lawnButton = document.querySelector(".service_button.lawn");
  const lawnCards = document.querySelectorAll(".card .lawn");
  const plantingButton = document.querySelector(".service_button.planting");
  const plantingCards = document.getElementsByClassName("card planting");
  const serviceButtons = document.querySelectorAll('.service_button');

  serviceButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
    })
  })

  // function toggleBlur() {
  //     this.classList.toggle('blur');
  //     this.style.filter = 'blur(5px)';
  // }
  // gardens.addEventListener('click', toggleBlur);

  gardensButton.addEventListener("click", () => {
    //gardensCardOne.style.filter = 'blur(5px)';
    //gardensCardFive.style.filter = 'blur(5px)';
    for (const card of lawnCards) {
        card.classList.toggle('blur');
    }
    for (const card of plantingCards) {
        card.classList.toggle('blur');
    }
  });

  lawnButton.addEventListener("click", () => {
    for (const card of gardensCards) {
        card.classList.toggle('blur');
    }
    for (const card of plantingCards) {
        card.classList.toggle('blur');
    }
  });

  plantingButton.addEventListener("click", () => {
    for (const card of gardensCards) {
        card.classList.toggle('blur');
    }
    for (const card of lawnCards) {
        card.classList.toggle('blur');
    }
  });

  if(gardensButton.classList.contains('active') === true && lawnButton.classList.contains('active') === true) {
    // plantingButton.setAttribute('disabled', '');
    // plantingButton.disabled = true;
    document.querySelector(".service_button.planting").disabled = true;
    lawnCardThree.classList.remove("blur");
  }
}
