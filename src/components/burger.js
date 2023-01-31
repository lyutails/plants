import "../style.scss";

export function burgerCreate() {
  const burger = document.querySelector(".burger");

  for (let i = 1; i <= 4; i++) {
    const burger_line = document.createElement("span");
    burger_line.classList.add("burger_line");
    burger.append(burger_line);
  }

  const overlay = document.querySelector(".overlay");
  const burger_menu = document.querySelector(".burger_menu");

  overlay.addEventListener("click", () => {
    overlay.classList.toggle("active");
    burger_menu.classList.toggle("active");
    burger.classList.toggle("active");
  });

  burger.addEventListener("click", () => {
    overlay.classList.toggle("active");
    burger.classList.toggle("active");
    burger_menu.classList.toggle("active");
  });

  const nav_items_burger = document.querySelectorAll(
    ".burger_nav .nav_item_burger .nav_item_link_burger"
  );
  nav_items_burger.forEach((nav_item) => {
    nav_item.addEventListener("click", (e) => {
      document
        .querySelector(".nav_item_burger .nav_item_link_burger.active")
        .classList.remove("active");
      e.target.classList.add("active");
    });
  });
}
