const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", (e) => {
  e.preventDefault();

  // Close hambuger menu
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("noscroll");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  }
  // Open hamburger menu
  else {
    header.classList.add("open");
    body.classList.add("noscroll");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
