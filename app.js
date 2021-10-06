const homeHeader = document.querySelector(".home-header");
const navbar = document.querySelector(".navbar");
const navbarMobile = document.querySelector(".navbar-mobile");
const mobMenuIcon = document.querySelector(".mob-menu-icon");
const mobCross = document.querySelector(".mob-cross");
const mobHamburger = document.querySelector(".mob-hamburger");

document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    homeHeader.classList.add("head-bg");
    navbar.classList.add("head-height");
  } else {
    homeHeader.classList.remove("head-bg");
    navbar.classList.remove("head-height");
  }
});

mobMenuIcon.addEventListener("click", () => {
  navbarMobile.classList.toggle("open");
  mobCross.classList.toggle("show");
  mobHamburger.classList.toggle("hide");
});
