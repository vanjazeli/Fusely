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

// window.onload = swiperPosition();
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
    hamburger.classList.add("is-active");
    hamburgerToggler = true;
  } else {
    popup.style.top = `-100vh`;
    hamburger.classList.remove("is-active");
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

// textResponsiveness();
window.addEventListener("resize", textResponsiveness);

// footer date

let footerText = document.querySelector(
  ".footer__bottom__secondary-container__text"
);

let year = new Date().getFullYear();

footerText.textContent = `© Fusely ${year}. All rights reserved.`;

// load

let body = document.querySelector("body");

// document.addEventListener("onload", () => {
// });

window.onload = () => {
  textResponsiveness();
  swiperPosition();
  body.style.opacity = `1`;
};
