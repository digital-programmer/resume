const hamburger = document.getElementById("icon");
const navMenu = document.getElementById("navigation");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navMenu.classList.toggle("show");
}

const navLink = document.querySelectorAll(".nav-item");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  navMenu.classList.remove("show");
}
