import './style.scss';

function burgerCreate() {
    const burger = document.querySelector('.burger');

    for (let i = 1; i <= 4; i++) {
        const burger_line = document.createElement('span');
        burger_line.classList.add('burger_line');
        burger.append(burger_line);
    }

    const overlay = document.querySelector('.overlay');
    const burger_menu = document.querySelector('.burger_menu');

    burger.addEventListener('click', () => {
        overlay.classList.toggle('active');
        burger.classList.toggle('active');
        burger_menu.classList.toggle('active');
    })

    const nav_item_burger = document.querySelector('.nav_item_burger');
    const nav_item_link_burger = document.querySelector('.nav_item_link_burger');
    nav_item_burger.addEventListener('click', () => {
        nav_item_link_burger.classList.add('active');
    })
}
burgerCreate();
