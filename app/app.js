// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 45,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// let swiperOffset;

const mySwiper = document.querySelector(".mySwiper");

function swiperPosition() {
  let windowWidth = window.innerWidth;
  let slideWidth = document.querySelector(".swiper-slide").offsetWidth;
  let containerWidth =
    document.querySelector(".primary-container").offsetWidth - 80;
  if (windowWidth < 1400) {
    let swiperOffset = (windowWidth - containerWidth) / 2;
    mySwiper.style.transform = `translateX(-${swiperOffset}px)`;
    mySwiper.style.width = `calc(100vw)`;
  } else {
    let swiperOffset = 129;
    mySwiper.style.transform = `translateX(-${swiperOffset}px)`;
    mySwiper.style.width = `calc(100% + 2 * 129px)`;
  }
}

window.onload = swiperPosition();
window.addEventListener("resize", swiperPosition);

// hamburger

let hamburgerToggler = false;

const popup = document.querySelector(".popup");
const hamburger = document.querySelector(
  ".header__navbar__secondary-container__hamburger"
);

function hamburgerToggle(e) {
  if (
    e.target.getAttribute("data-role") === "hamburger" &&
    hamburgerToggler === false
  ) {
    popup.style.top = "0";
    hamburger.innerHTML = `<img src="/img/Menu Close.svg" alt="" data-role="hamburger"/>`;
    hamburgerToggler = true;
  } else {
    popup.style.top = `-100vh`;
    hamburger.innerHTML = `<img src="/img/hamburger.svg" alt="" data-role="hamburger"/>`;
    hamburgerToggler = false;
  }
}

document.addEventListener("click", hamburgerToggle);

// text responsiveness

let headingOne = document.querySelector(".h1--desktop");
let headingTwo = document.querySelectorAll(".h2--desktop");

function textResponsiveness() {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 450) {
    headingOne.classList.add("h1--mobile");
    for (let i = 0; i < headingTwo.length; i++) {
      headingTwo[i].classList.add("h2--mobile");
    }
  } else {
    headingOne.classList.remove("h1--mobile");
    for (let i = 0; i < headingTwo.length; i++) {
      headingTwo[i].classList.remove("h2--mobile");
    }
  }
}

textResponsiveness();
window.addEventListener("resize", textResponsiveness);

// footer date

let footerText = document.querySelector(
  ".footer__bottom__secondary-container__text"
);

let year = new Date().getFullYear();

footerText.textContent = `© Fusely ${year}. All rights reserved.`;

// load

let body = document.querySelector("body");

body.style.opacity = `1`;

// theme

// let hours = new Date().getHours();

// hours = 23;

// const body = document.querySelector("body");

// if (hours <= 7 || hours >= 19) {
//   body.style.background = `#12111A
//   `;
// }
