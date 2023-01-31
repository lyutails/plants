import "./style.scss";

import { burgerCreate } from "./components/burger";

burgerCreate();

const gardens = document.querySelector('.service_button.gardens');
const gardensCardOne = document.querySelector('.card.one');
const gardensCardFive = document.querySelector('.card.five');
const lawn = document.querySelector('.service_button.lawn');
const gardensCardThree = document.querySelector('.card.three');
const planting = document.querySelector('.service_button.planting');
const gardensCardTwo = document.querySelector('.card.two');
const gardensCardFour = document.querySelector('.card.four');
const gardensCardSix = document.querySelector('.card.six');

// function toggleBlur() {
//     this.classList.toggle('blur');
//     this.style.filter = 'blur(5px)';
// }
// gardens.addEventListener('click', toggleBlur);

gardens.addEventListener('click', () => {
    //gardensCardOne.style.filter = 'blur(5px)';
    //gardensCardFive.style.filter = 'blur(5px)';
    gardensCardThree.classList.toggle('blur');
    gardensCardTwo.classList.toggle('blur');
    gardensCardFour.classList.toggle('blur');
    gardensCardSix.classList.toggle('blur');
})

lawn.addEventListener('click', () => {
    if(gardensCardThree.classList.contains('blur')){
        gardensCardThree.classList.remove('blur');
    }
    gardensCardOne.classList.toggle('blur');
    gardensCardFive.classList.toggle('blur');
    gardensCardTwo.classList.toggle('blur');
    gardensCardFour.classList.toggle('blur');
    gardensCardSix.classList.toggle('blur');
})

planting.addEventListener('click', () => {
    gardensCardOne.classList.toggle('blur');
    gardensCardThree.classList.toggle('blur');
    gardensCardFive.classList.toggle('blur');
})

const logo = document.querySelector('.logo');
logo.onclick = function() {
    logo.classList.toggle('active');
}