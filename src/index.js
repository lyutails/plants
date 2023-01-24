import "./style.scss";

function burgerCreate() {
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

  const nav_item_burger_home = document.querySelector(".nav_item_burger_home");
  const nav_item_link_burger_home = document.querySelector(
    ".nav_item_link_burger_home"
  );
  nav_item_burger_home.addEventListener("click", () => {
    nav_item_link_burger_home.classList.add("active");
    nav_item_link_burger_about.classList.remove("active");
    nav_item_link_burger_price.classList.remove("active");
    nav_item_link_burger_service.classList.remove("active");
    nav_item_link_burger_contacts.classList.remove("active");
  });

  const nav_item_burger_about = document.querySelector(
    ".nav_item_burger_about"
  );
  const nav_item_link_burger_about = document.querySelector(
    ".nav_item_link_burger_about"
  );
  nav_item_burger_about.addEventListener("click", () => {
    nav_item_link_burger_about.classList.add("active");
    nav_item_link_burger_home.classList.remove("active");
    nav_item_link_burger_price.classList.remove("active");
    nav_item_link_burger_service.classList.remove("active");
    nav_item_link_burger_contacts.classList.remove("active");
  });

  const nav_item_burger_service = document.querySelector(
    ".nav_item_burger_service"
  );
  const nav_item_link_burger_service = document.querySelector(
    ".nav_item_link_burger_service"
  );
  nav_item_burger_service.addEventListener("click", () => {
    nav_item_link_burger_service.classList.add("active");
    nav_item_link_burger_home.classList.remove("active");
    nav_item_link_burger_about.classList.remove("active");
    nav_item_link_burger_price.classList.remove("active");
    nav_item_link_burger_contacts.classList.remove("active");
  });

  const nav_item_burger_price = document.querySelector(
    ".nav_item_burger_price"
  );
  const nav_item_link_burger_price = document.querySelector(
    ".nav_item_link_burger_price"
  );
  nav_item_burger_price.addEventListener("click", () => {
    nav_item_link_burger_price.classList.add("active");
    nav_item_link_burger_home.classList.remove("active");
    nav_item_link_burger_about.classList.remove("active");
    nav_item_link_burger_service.classList.remove("active");
    nav_item_link_burger_contacts.classList.remove("active");
  });

  const nav_item_burger_contacts = document.querySelector(
    ".nav_item_burger_contacts"
  );
  const nav_item_link_burger_contacts = document.querySelector(
    ".nav_item_link_burger_contacts"
  );
  nav_item_burger_contacts.addEventListener("click", () => {
    nav_item_link_burger_contacts.classList.add("active");
    nav_item_link_burger_home.classList.remove("active");
    nav_item_link_burger_about.classList.remove("active");
    nav_item_link_burger_service.classList.remove("active");
    nav_item_link_burger_price.classList.remove("active");
  });
}
burgerCreate();
