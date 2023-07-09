'use strict';

// navbar toggle //

const overlay = document.querySelector('[data-overlay]');
const navbar = document.querySelector('[data-navbar]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbarLinks = document.querySelector('[data-nav-link]');

const navToggleFunc = function() {
    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}


navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i=0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", navToggleFunc);
}



// HEADER ACTIVE ON SCROLL //

const header1 = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header1.classList.add("active");
  } else {
    header1.classList.remove("active");
  }
});
 