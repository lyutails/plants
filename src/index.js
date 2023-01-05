import './style.scss';

function burgerCreate() {
    const burger = document.querySelector('.burger');

    for (let i = 1; i <= 4; i++) {
        const burger_line = document.createElement('span');
        burger_line.classList.add('burger_line');
        burger.append(burger_line);
    }
}
burgerCreate();